import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";
import { useState } from "react";

const Routes = () => {
  

  return (
    <Switch>
      <Route exact path="/">
        <Login></Login>
      </Route>
      <Route path="/register">
        <Register></Register>
      </Route>
      <Route path="/user/:id">
        <User></User>
      </Route>
    </Switch>
  );
};

export default Routes;
