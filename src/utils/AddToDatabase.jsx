import axios from "axios";
import { toast } from "react-toastify";

const AddToDatabase = async (sendForm, type) => {
  const ServerUrl = process.env.NEXT_PUBLIC_SERVER;
  try {
    const res = await axios.post(`${ServerUrl}/api/${type}`, sendForm, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log({ res });
    toast.success(`${type} Added`);
  } catch (err) {
    console.log({ err });
    toast.error(err.message);
  }
};

export default AddToDatabase;
