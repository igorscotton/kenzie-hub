import {Switch, Route} from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
const Routes = () => {
      return(
            <Switch>
                  <Route exact path='/'>
                        <Login></Login>
                  </Route>
                  <Route path='/register'>
                        <Register></Register>
                  </Route>
                  <Route path='/home'></Route>
            </Switch>
      )
}

export default Routes