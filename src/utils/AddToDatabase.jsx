import axios from "axios";
import { toast } from "react-toastify";

const AddToDatabase = async (sendForm, type) => {
  const ServerUrl = process.env.NEXT_PUBLIC_SERVER;
  try {
    const res = await axios.post(`${ServerUrl}/${type}`, sendForm, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(res);
    toast.success(`${type} Added`);
    // return res.data.members;
  } catch (err) {
    toast.error(err.message);
  }
};

export default AddToDatabase;
