import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";
import { useState, useEffect } from "react";
const Routes = ({notify}) => {
  const [auth, setAuth] = useState(false)
  
  useEffect(() => {
    const token = localStorage.getItem('@tokenKenzieHub')

    if(token){
      return setAuth(true)
    }
  }, [])

  return (
    <Switch>
      <Route exact path="/">
        <Login auth={auth} setAuth={setAuth} notify={notify}></Login>
      </Route>
      <Route path="/register">
        <Register notify={notify}></Register>
      </Route>
      <Route path="/user/:id">
        <User auth={auth} setAuth={setAuth} notify={notify}></User>
      </Route>
    </Switch>
  );
};

export default Routes;
