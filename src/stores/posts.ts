import { action, observable } from 'mobx'

import Api from 'common/api'

class Posts {
  @observable posts: any[] = []

  @action.bound
  fetchPosts() {
    Api.getPosts()
      .then((posts: any) => this.posts = posts)
  }
}

export default Posts