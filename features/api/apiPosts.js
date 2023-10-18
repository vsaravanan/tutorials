import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiPosts = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: builder => ({
    fetchPost: builder.query({
      query: () => `posts`,
    }),
    createPost: builder.mutation({
      query: post => ({
        url: 'post',
        method: 'POST',
        body: post,
      }),
    }),
  }),
})

export const { useFetchPostQuery, useCreatePostMutation } = apiPosts

// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }
