import cloudinary from "./cloudinary";

const uploader = async (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.v2.uploader.upload_stream(
      {
        folder: "Abnerr",
      },
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
    uploadStream.end(fileBuffer);
  });
};

export const uploadMany = async (fileBufferArray) => {
  return Promise.all(fileBufferArray.map((fileBuffer) => uploader(fileBuffer)));
};

export default uploader;
