import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PropTypes from "prop-types";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = ({ children }) => {
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
    setUser({ ...user, name:"",  isAuthenticated: false });
  };

  useEffect(() => {
    if (!user.isAuthenticated) {
      navigation("/login");
    }
  }, [navigation, user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Header />
      {children}
    </AuthContext.Provider>
  );
};

AuthWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
