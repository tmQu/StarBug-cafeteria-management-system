import axios from "axios";
import useAuth from "./useAuth";

axios.create({
  baseURL: "http://localhost:4000",
});

const userLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {
      const response = await axios('/auth/logout', {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export default userLogout;
