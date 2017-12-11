import { Route, Router, Switch } from 'react-router-dom'

import FeaturePage from 'modules/feature/pages/FeaturePage'
import HomePage from 'modules/home/pages/HomePage'
import NavigationBar from 'common/components/NavigationBar'
import React from 'react'
import history from 'common/history'

class Routes extends React.PureComponent {
  render() {
    return (
      <div>
        <NavigationBar />
        <Router history={history}>
          <Switch>
            <Route path='/home' component={HomePage}/>
            <Route path='/features' component={FeaturePage}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Routes