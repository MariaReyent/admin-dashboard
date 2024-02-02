import { Route, Routes, Navigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";
import { nav } from "./navigation";

export const RenderRoutes = () => {
  const { user } = AuthData();

  return (
    <Routes>
      {nav.map((route, index) => {
        if (!user.isAuthenticated && route.isPrivate) {
          return <Route key={index} element={<Navigate to="/login" />} />;
        }
        return <Route key={index} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
};
