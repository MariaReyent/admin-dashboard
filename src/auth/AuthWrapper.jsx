import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { RenderRoutes } from "../structure/RenderNavigation";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });

  const navigation = useNavigate();

  const login = (userName, password) => {
    return new Promise((resolve, reject) => {
      if (password === "password" && userName) {
        setUser({ name: userName, isAuthenticated: true });
        resolve("success");
      } else {
        reject("Incorrect password");
      }
    });
  };

  const logout = () => {
    setUser({ ...user, isAuthenticated: false });
  };

  useEffect(() => {
    if (!user.isAuthenticated) {
      navigation("/login");
    } 
  }, [navigation, user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <>
        <Header />
        <RenderRoutes />
      </>
    </AuthContext.Provider>
  );
};
