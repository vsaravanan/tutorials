import { useFetchPostQuery } from 'features/api/apiPosts'

export default function Posts() {
  const { data: posts } = useFetchPostQuery()

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
