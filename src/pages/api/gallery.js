import formidable from "formidable";

import prisma from "../../../lib/db";
import cloudinary from "../../../lib/cloudinary";

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = async (req) => {
  return new Promise(async (resolve, reject) => {
    const form = formidable();
    form.parse(req, function (err, fields, files) {
      if (err) reject(err);
      resolve({
        category: fields.category[0],
        image: files.image[0],
      });
    });
  });
};

async function POST(req, res) {
  try {
    const data = await parseForm(req);
    const { secure_url } = await cloudinary.v2.uploader.upload(
      data.image.filepath
    );
    await prisma.galleryImage.create({
      data: {
        category: data.category,
        url: secure_url,
      },
    });
    return res.status(200).json({
      status: "success",
      message: "image uploaded successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "fail",
      message: "image uploading failed",
    });
  }
}

async function GET(req, res) {
  // const t = new URL(req.url);
  // console.log(t);
  console.log(req);
  res.send("abcd");
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    return await GET(req, res);
  } else if (req.method === "POST") {
    return await POST(req, res);
  }
}
