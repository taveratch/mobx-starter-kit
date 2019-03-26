import Counter from 'stores/counter'
import Posts from 'stores/posts'

const stores: { counter: any, posts: any } = { counter: null, posts: null }

stores.counter = new Counter()
stores.posts = new Posts()

export default stores