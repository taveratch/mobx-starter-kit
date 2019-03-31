import Counter from 'modules/counter/components/Counter'
import React from 'react'
import RootStore from 'stores';
import { inject } from 'mobx-react';

type Props = {
  stores: RootStore
}


@inject('stores')

class CounterPage extends React.Component<Props> {
  render() {
    return (
      <div className="container mt-3 mb-3">
        <h3>Counter</h3>
        <Counter stores={this.props.stores} />
      </div>
    )
  }
}

export default CounterPage