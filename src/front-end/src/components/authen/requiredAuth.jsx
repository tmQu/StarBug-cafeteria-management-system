import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequiredAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  const role = auth?.role;

  return (allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.email ? (
    <Navigate to={{ pathname: "/unauthorized", state: { from: location } }} />
  ) : (
    <Navigate to={{ pathname: "/", state: { from: location } }} />
  );
};

export default RequiredAuth;
