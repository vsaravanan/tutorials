import 'styles/globals.css'
// import { wrapper, store } from 'redux/store'
// import { Provider } from 'react-redux'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      {/* <Provider store={store}> */}
      <Component {...pageProps} />
      {/* </Provider> */}
    </>
  )
}

// export default wrapper.withRedux(MyApp)

export default MyApp
