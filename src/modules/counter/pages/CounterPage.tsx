import Counter from 'modules/counter/components/Counter'
import React from 'react'

class CounterPage extends React.Component {
  render() {
    return (
      <div className="container mt-3 mb-3">
        <h3>Counter</h3>
        <Counter />
      </div>
    )
  }
}

export default CounterPage