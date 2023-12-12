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

export default async function handler(req, res) {
  if (req.method === "POST") {
    await POST(req, res);
  }
}
