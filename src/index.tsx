import React from 'react'
import ReactDOM from 'react-dom'
import Routes from 'routes/index'

(module as any).hot.accept();

const render = (Component: any) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('main'))
}

render(Routes)