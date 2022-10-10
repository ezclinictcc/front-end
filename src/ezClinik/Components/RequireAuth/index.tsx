import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectIsUserLogged } from "../../store/redux/user/userSlice";

interface IRequireAuth {
  isPrivate: boolean;
}

const RequireAuth: React.FC<IRequireAuth> = ({ isPrivate }) => {
  const isUserLogged = useSelector(selectIsUserLogged);
  const location = useLocation();

  if (isPrivate) {
    return isUserLogged ? (
      <Outlet />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  }

  return <Outlet />;
};

export default RequireAuth;
