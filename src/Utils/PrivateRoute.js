import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getToken } from "./Common";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(probs) => {
        return getToken() ? (
          <Component {...probs} />
        ) : (
          <Redirect
            to={{ pathname: "/Login", state: { from: probs.location } }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
