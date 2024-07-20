import React from "react";
import { Navigate } from "react-router-dom";

const ProtectRoutes = ({ chlidren, user, redirect = "/login" }) => {
  if (!user) return <Navigate to={redirect} />;
  return chlidren;
};

export default ProtectRoutes;
