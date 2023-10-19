// not yet used
import { delay } from 'lib/utils'
export default async function fetchPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  await delay(5000)
  const posts = await res.json()

  return posts
}
