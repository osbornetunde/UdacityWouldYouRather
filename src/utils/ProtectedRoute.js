import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      currentUser ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default ProtectedRoute;
