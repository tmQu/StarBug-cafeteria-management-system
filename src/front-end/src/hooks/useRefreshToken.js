import axios from "axios";
import useAuth from "./useAuth";

// axios.create({
//   baseURL: "http://localhost:4000",
// });

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("https://star-bug-cafeteria-management-system.vercel.app/auth/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
      return {
        ...prev,
        role: response.data.role,
        accessToken: response.data.accessToken,
        avatar: response.data.imgAvatar,
        name: response.data.name,
        email: response.data.email,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
