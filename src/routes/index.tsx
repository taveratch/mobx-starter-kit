import { Provider } from 'mobx-react'
import React from 'react'
import Routes from 'routes/routes'
import RootStore from 'stores';

export default (props: any) => (
  <Provider stores={new RootStore}>
    <Routes {...props} />
  </Provider>
)