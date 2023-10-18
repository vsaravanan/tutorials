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
    <ul>
      {posts?.map(post => (
        <li key={post.id}>
          {post.id} - {post.title}
        </li>
      ))}
    </ul>
  )
}
