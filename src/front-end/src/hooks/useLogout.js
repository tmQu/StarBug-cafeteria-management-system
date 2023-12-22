import axios from "axios";
import useAuth from "./useAuth";
// axios.create({
//   baseURL: "http://localhost:4000",
// });

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    localStorage.setItem("persist", false);
    try {
      const response = await axios("https://star-bug-cafeteria-management-system.vercel.app/auth/logout", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return logout;
};

export default useLogout;
