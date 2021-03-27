import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getToken } from "./Common";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(probs) => {
        return !getToken() ? (
          <Component {...probs} />
        ) : (
          <Redirect to={{ pathname: "/Dashboard" }} />
        );
      }}
    />
  );
};

export default PublicRoute;
