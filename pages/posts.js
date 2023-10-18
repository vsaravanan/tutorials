// pages/posts.js
import { useSelector } from 'react-redux'
import Layout from '/Layout' // Import the Layout component
import usePostData from '/usePostData' // Import the usePostData hook

const Posts = () => {
  const { isLoading, isFetching, isError } = usePostData() // Import the usePostData hook

  const posts = useSelector(state => state.posts.posts)

  return (
    // <Layout isLoading={isLoading} isFetching={isFetching} isError={isError}>
    <section>
      <h1>Latest Posts</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </section>
    // </Layout>
  )
}

export default Posts
