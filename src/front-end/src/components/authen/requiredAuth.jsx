import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/userAuth";

const RequiredAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return (
    auth?.roles?.find((role) => allowedRoles?.include(role)) 
        ? <Outlet />
        : auth?.user 
            ? <Navigate to={{ pathname: "/unauthorized", state: { from: location } }} />
            : <Navigate to={{ pathname: "/", state: { from: location } }} />
  )
};

export default RequiredAuth;
