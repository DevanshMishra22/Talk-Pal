import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoutes = ({ chlidren, user, redirect = "/login" }) => {
  if (!user) return <Navigate to={redirect} />;
  return chlidren ? chlidren : <Outlet />;
};

export default ProtectRoutes;
