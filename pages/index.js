// pages/index.js
import usePostData from '/usePostData'
import Layout from '/Layout'

const Home = () => {
  const { isLoading, isFetching, isError } = usePostData()

  return (
    <Layout isLoading={isLoading} isFetching={isFetching} isError={isError}>
      <section>
        <h1>Latest Posts</h1>
        {/* Your post list rendering logic */}
      </section>
    </Layout>
  )
}

export default Home
