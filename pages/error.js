// pages/error.js
import Layout from '/Layout'

const Error = () => {
  return (
    <Layout isError={true}>
      <section>
        <h1>Error</h1>
        <p>Something went wrong. Please try again later.</p>
      </section>
    </Layout>
  )
}

export default Error
