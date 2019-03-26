import React from 'react'
import ReactDOM from 'react-dom'
import Routes from 'routes/index'

const render = (Component: any) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('main'))
}

render(Routes)