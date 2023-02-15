import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ isAuthed, isLoading, Component }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isAuthed) {
    return <Navigate to="/sign-in" />;
  }

  return <Component />;
};
export default PrivateRoute;
