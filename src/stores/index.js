import Counter from 'stores/counter'
import Posts from 'stores/posts'

const stores = {}

stores.counter = new Counter()
stores.posts = new Posts()

export default stores