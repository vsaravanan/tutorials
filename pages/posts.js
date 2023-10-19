import { useFetchPostQuery } from 'features/api/apiPosts'

export default function Posts() {
  const { data: posts = [], isLoading, isFetching, isError, error } = useFetchPostQuery()

  if (isLoading || isFetching) {
    return <div>loading...</div>
  }

  if (isError) {
    console.log({ error })
    return <div>{error.status}</div>
  }
  return (
    <section>
      <h1>Latest Posts</h1>
      {/* <ul>
        {posts?.map(post => (
          <li key={post.id}>
            {post.id} - {post.title}
          </li>
        ))}
      </ul> */}
      {posts.map(post => (
        <article key={post.id}>
          <hr></hr>
          <h2>{post.title}</h2>
          <p>
            <br></br>
            {post.body}
          </p>
        </article>
      ))}
    </section>
  )
}
