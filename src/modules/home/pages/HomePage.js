// @hmr: true
import Counter from 'modules/home/components/Counter'
import React from 'react'

class HomePage extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Home</h3>
        <Counter />
      </div>
    )
  }
}

export default HomePage