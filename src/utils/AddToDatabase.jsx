import axios from "axios";
import { toast } from "react-toastify";

const AddToDatabase = async (sendForm, type) => {
  const ServerUrl = process.env.NEXT_PUBLIC_SERVER;
  try {
    const res = await axios.post(`${ServerUrl}/api/gallery`, sendForm, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(res);
    toast.success(`${type} Added`);
  } catch (err) {
    toast.error(err.message);
  }
};

export default AddToDatabase;
