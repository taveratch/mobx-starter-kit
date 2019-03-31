import { action, computed, observable } from 'mobx'

class CounterStore {
  @observable number = 0

  @action.bound
  setNumber(number: number) {
    this.number = number
  }

  @computed get getNumber() {
    return this.number
  }

  @action.bound
  increase() {
    this.number += 1
  }

  @action.bound
  decrease() {
    this.number -= 1
  }
}

export default CounterStore