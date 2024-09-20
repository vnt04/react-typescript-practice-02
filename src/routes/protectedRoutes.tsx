import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isProtected }: { isProtected: boolean }) => {
  if (!isProtected) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
