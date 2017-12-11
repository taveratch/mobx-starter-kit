import React from 'react'
import ReactDOM from 'react-dom'
import Routes from 'routes/index.js'

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('main'))
}

render(Routes)