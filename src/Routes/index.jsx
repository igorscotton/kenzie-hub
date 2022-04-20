import {Switch, Route} from 'react-router-dom'

const Routes = () => {
      return(
            <Switch>
                  <Route path='/'></Route>
                  <Route path='/register'></Route>
                  <Route path='/home'></Route>
            </Switch>
      )
}

export default Routes