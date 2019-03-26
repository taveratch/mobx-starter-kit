import { Provider } from 'mobx-react'
import React from 'react'
import Routes from 'routes/routes'
import stores from 'stores'

export default (props: any) => (
  <Provider stores={stores}>
    <Routes {...props} />
  </Provider>
)