import { action, observable } from 'mobx'

import Api from 'common/Api'

class Posts {
  @observable posts = []

  @action.bound
  fetchPosts() {
    Api.getPosts()
      .then(posts => this.posts = posts)
  }
}

export default Posts