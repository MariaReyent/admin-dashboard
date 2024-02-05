import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";

const ProtectedRoutes = ({ element }) => {
  const { user } = AuthData();

  if (!user.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

ProtectedRoutes.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoutes;
