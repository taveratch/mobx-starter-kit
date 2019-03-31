import { observer } from 'mobx-react'

import React from 'react'
import styled from 'styled-components'
import RootStore from 'stores';

const BlueText = styled.h1`
  color: blue;
`

type Props = {
  stores: RootStore
}

@observer
class App extends React.Component<Props> {

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