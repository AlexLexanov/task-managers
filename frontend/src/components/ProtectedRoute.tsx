import { FunctionComponent, ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

type ProtectedRouteProps = {
  toRedirect: string;
  children: ReactElement;
};

export const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({
  toRedirect,
  children,
}) => {
  const isAuthenticated = (): Boolean => {
    const token = localStorage.getItem("accessToken");    
    return Boolean(token);
  };

  // if (!isAuthenticated()) return <Navigate to={ toRedirect } />

  return children ? children : <Outlet />;
};
