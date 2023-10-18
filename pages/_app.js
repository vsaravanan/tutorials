import 'styles/globals.css'

import { store } from 'redux/store'
import { Provider } from 'react-redux'
import Layout from 'components/layout'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  )
}

export default MyApp
