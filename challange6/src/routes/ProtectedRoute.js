import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ redirectPath = "/", children }) => {
  const token = localStorage.getItem("access_token");
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
