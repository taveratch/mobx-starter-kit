import { inject, observer } from 'mobx-react'

import Card from 'common/components/Card'
import React from 'react'
import RootStore from 'stores';

type Props = {
  stores: RootStore
}

@inject('stores')
@observer
class PostsPage extends React.Component<Props> {

  postsStore = this.props.stores.posts

  componentDidMount() {
    this.postsStore.fetchPosts()
  }

  render() {
    return (
      <div>
        {
          this.postsStore.posts.map((post: any, i: number) => (
            <div className="m-3" key={i} >
              <Card title={post.title} body={post.body} />
            </div>
          ))
        }
      </div>
    )
  }
}

export default PostsPage