import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [persist, setPersist] = useState(false);

  useEffect(() => {
    const persistedAuth = JSON.parse(localStorage.getItem("auth"));
    if (persistedAuth) {
      setAuth(persistedAuth);
      setPersist(true);
    }
  }, []);

  const handleLogin = (user) => {
    setAuth(user);
    setPersist(true);
    localStorage.setItem("auth", JSON.stringify(user));
  };

  const handleLogout = () => {
    setAuth({});
    setPersist(false);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ auth, persist, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;