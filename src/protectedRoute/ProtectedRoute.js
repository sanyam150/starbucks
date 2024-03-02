import React from "react";
import { Redirect } from "react-router-dom";

const ProtectedRoute = (Component, isAuthenticated, redirectPath) => {
  const wrapperComponent = (props) => {
    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      return <Redirect to={`${"/" + redirectPath}`} />;
    }
  };
  return wrapperComponent;
};

export default ProtectedRoute;
