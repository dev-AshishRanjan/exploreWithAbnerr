import multer from "multer";
import { uploadMany } from "../../../lib/uploader";
import { ArticleImage, Article } from "../../../lib/models";

const storage = multer.memoryStorage();
const parser = multer({ storage: storage }).any();

export const config = {
  api: {
    bodyParser: false,
  },
};

async function POST(req, res) {
  parser(req, res, async (err) => {
    if (err) {
      console.log({ err });
      return res.status(500).json({
        message: "error",
      });
    }
    console.log(req.files);

    /*
      if all goes well, 
      req.files is an array of the form: 
      [{
        fieldname,
        originalname,
        encoding,
        mimetype,
        buffer,
        size
      }]
    */

    const fileData = {
      coverImage: {
        buffer: [],
      },
      otherImage: {
        buffer: [],
      },
    };

    req.files.forEach((file) => {
      if (file.fieldname === "coverImage") {
        fileData.coverImage.buffer.push(file.buffer);
      } else {
        fileData.otherImage.buffer.push(file.buffer);
      }
    });

    /*
      `response` is of the form : [{
        url,
        secure_url,
        folder
      }]
    */

    // UPLOADING COVER IMAGE
    let response = await uploadMany(fileData.coverImage.buffer);
    const coverImage = await ArticleImage.create({
      url: response[0].secure_url,
    });

    // UPLOADING OTHER IMAGES
    response = await uploadMany(fileData.otherImage.buffer);
    const otherImages = await Promise.all(
      response.map((file) => {
        return ArticleImage.create({
          url: file.secure_url,
        });
      })
    );

    const otherImageIds = otherImages.map((image) => image.id);

    const article = await Article.create({
      title: req.body.title,
      description: req.body.description,
      coverImage: coverImage.id,
      otherImages: otherImageIds,
    });

    res.status(200).json({
      status: "success",
    });
  });
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    await POST(req, res);
  }
}
