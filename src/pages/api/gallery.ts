import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return res.status(200).json({
      status: "successfull",
      message: "image added successfully",
    });
  }

  const image = req.body.image;
}
