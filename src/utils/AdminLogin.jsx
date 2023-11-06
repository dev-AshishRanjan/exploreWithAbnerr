import axios from "axios";
import { toast } from "react-toastify";

const Login = async (sendForm, setAdmin) => {
  const ServerUrl = process.env.NEXT_PUBLIC_SERVER;
  // console.log(ServerUrl);
  try {
    const res = await axios.post(`${ServerUrl}/admin`, sendForm, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(res);
    if (res.status === 200) {
      setAdmin(res.admin);
      if (!res.admin) {
        toast.error("Wrong Creds");
      } else {
        toast.success("Welcome Admin");
      }
    }
    // toast.success(`${type} Added`);
    // return res.data.members;
  } catch (err) {
    toast.error(err.message);
  }
};

export default Login;
