import { inject, observer } from 'mobx-react'

import React from 'react'
import styled from 'styled-components'

const BlueText = styled.h1`
  color: blue;
`

@inject('stores')
@observer
class App extends React.Component {

  increase = () => {
    this.props.stores.counter.increase()
  }

  decrease = () => {
    this.props.stores.counter.decrease()
  }

  render() {
    return (
      <div>
        <BlueText>Counter game wih mobx</BlueText>
        <div>
          <button className="btn btn-default" onClick={this.decrease}>-</button>
          <span>{this.props.stores.counter.number}</span>
          <button className="btn btn-default" onClick={this.increase}>+</button>
        </div>
      </div>
    )
  }
}

export default App