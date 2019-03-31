import UIStore from "./UIStore";
import CounterStore from "./counter";
import PostStore from "./posts";

class RootStore {
  UIStore: UIStore
  posts: PostStore
  counter: CounterStore

  constructor() {
    this.UIStore = new UIStore(this)
    this.posts = new PostStore()
    this.counter = new CounterStore()
  }
}

export default RootStore