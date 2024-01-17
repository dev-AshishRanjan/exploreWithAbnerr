import multer from "multer";
import { Gallery } from "../../../lib/models";
import { uploadMany } from "../../../lib/uploader";

const storage = multer.memoryStorage();
const parser = multer({ storage: storage }).array("image");

export const config = {
  api: {
    bodyParser: false,
  },
};

async function POST(req, res) {
  parser(req, res, async (err) => {
    if (err) {
      return res.status(500).json({
        message: "error",
      });
    }

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
    const fileBufferArray = req.files.map((file) => file.buffer);

    /*
      response is an array of objects with url, secure_url, folder, etc
    */
    const response = await uploadMany(fileBufferArray);

    await Promise.all(
      response.map((file) => {
        Gallery.create({
          url: file.secure_url,
          category: req.body.category,
        });
      })
    );

    res.status(200).json({
      status: "success",
    });
  });
}

async function GET(req, res) {
  const { category } = req.query;

  const images = await Gallery.find({
    category: category,
  });

  return res.status(200).json({
    status: "success",
    images: images,
  });
}

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST":
        return await POST(req, res);

      case "GET":
        return await GET(req, res);

      default:
        return res.status(200);
    }
  } catch (error) {
    console.log(error);
    return res.json(500).json({
      status: "error",
      message: "internal server error",
    });
  }
}
