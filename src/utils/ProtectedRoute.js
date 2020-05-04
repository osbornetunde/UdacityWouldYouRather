import React from "react";
import { Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      currentUser ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default ProtectedRoute;
