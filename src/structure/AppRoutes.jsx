import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import  Private  from "../pages/Private";
import  Login  from "../pages/Login";
import  {Home}  from "../pages/Home";

const AppRoutes = () => (
  <Routes>
    <Route
      path="/private"
      element={<ProtectedRoutes element={<Private />} />}
    />
    <Route path="/" element={<ProtectedRoutes element={<Home />} />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default AppRoutes;
