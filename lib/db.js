import mongoose from "mongoose";

let isConnected = false;

const connectToDb = async () => {
  try {
    if (isConnected) return;
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
    isConnected = true;
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectToDb;
