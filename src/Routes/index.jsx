import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";

const Routes = () => {
  const id = window.localStorage.getItem("@idKenzieHub")
  
  return (
    <Switch>
      <Route exact path="/">
        <Login></Login>
      </Route>
      <Route path="/register">
        <Register></Register>
      </Route>
      <Route exact path="/user/:id">
        {id ? <User></User> : <Redirect to="/" />}
      </Route>
    </Switch>
  );
};

export default Routes;
