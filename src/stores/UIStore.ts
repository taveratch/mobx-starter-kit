import RootStore from "stores";
import { observable } from "mobx";

class UIStore {
  rootStore: RootStore

  @observable isLoading: boolean = false

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }
}

export default UIStore