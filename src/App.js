import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import "./App.css";
import Login from "./Login";
import DashBoard from "./Dashboard";
import Home from "./Home";
import PublicRoute from "./Utils/PublicRoute";
import PrivateRoute from "./Utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/Login">
            Login
          </NavLink>
          <NavLink activeClassName="active" to="/Dashboard">
            Dashboard
          </NavLink>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute path="/Login" component={Login} />
            <PrivateRoute path="/Dashboard" component={DashBoard} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
