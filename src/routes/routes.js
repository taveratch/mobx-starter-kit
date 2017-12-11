import { Route, Router, Switch } from 'react-router-dom'

import NavigationBar from 'common/components/NavigationBar'
import React from 'react'
import history from 'common/history'
import routes from 'routes/routes-config'

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <NavigationBar />
            <Switch>
              {
                routes.map((item, i) => <Route key={i} path={item.path} component={item.component} />)
              }
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Routes