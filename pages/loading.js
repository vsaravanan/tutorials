// pages/loading.js
import Layout from '/Layout'

const Loading = () => {
  return (
    <Layout isLoading={true}>
      <section>
        <h1>Loading...</h1>
        {/* Add a loading animation or message */}
      </section>
    </Layout>
  )
}

export default Loading
