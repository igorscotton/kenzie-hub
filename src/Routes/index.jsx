import {Switch, Route} from 'react-router-dom'
import Login from '../pages/Login'

const Routes = () => {
      return(
            <Switch>
                  <Route path='/'>
                        <Login></Login>
                  </Route>
                  <Route path='/register'></Route>
                  <Route path='/home'></Route>
            </Switch>
      )
}

export default Routes