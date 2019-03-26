import CounterPage from 'modules/counter/pages/CounterPage'
import ParagraphPage from 'modules/paragraph/pages/ParagraphPage'
import PostsPage from 'modules/posts/pages/PostsPage'

export default [
  {
    path: '/posts',
    label: 'Posts',
    component: PostsPage
  },
  {
    path: '/counter',
    label: 'Counter',
    component: CounterPage
  },
  {
    path: '/paragraph',
    label: 'Paragraph',
    component: ParagraphPage
  },
  {
    path: '/',
    label: 'Posts',
    component: PostsPage
  }
]