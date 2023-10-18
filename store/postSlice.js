// store/postSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { fetchPosts } from '/lib/api'

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    isLoading: false,
    isFetching: false,
    isError: false,
  },
  reducers: {
    // Reducer action to set loading state
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },

    // Reducer action to set fetching state
    setFetching: (state, action) => {
      state.isFetching = action.payload
    },

    // Reducer action to set error state
    setError: (state, action) => {
      state.isError = action.payload
    },

    // Reducer action to set posts
    setPosts: (state, action) => {
      state.posts = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isFetching = false
        state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, state => {
        state.isLoading = false
        state.isFetching = false
        state.isError = true
      })
  },
})

export const { reducer, actions } = postSlice

export default postSlice.reducer
