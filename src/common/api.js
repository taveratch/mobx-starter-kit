import ApiManager from 'common/api-manager'

export default {
  getPosts: () => {
    return ApiManager.fetch({
      url: 'https://jsonplaceholder.typicode.com/posts'
    })
  }
}