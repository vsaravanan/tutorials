// usePostData.js
import { useEffect } from 'react'
import { useRoute } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './store/postSlice'

const usePostData = () => {
  const dispatch = useDispatch()
  const { isLoading, isFetching, isError } = useSelector(state => state.posts)
  const route = useRoute

  useEffect(() => {
    if (route === '/') {
      dispatch(fetchPosts())
    }
  }, [route, dispatch])

  return { isLoading, isFetching, isError }
}

export default usePostData
