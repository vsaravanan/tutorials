import { configureStore } from '@reduxjs/toolkit'
// import { api } from 'features/api/apislice'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import { applyMiddleware } from '@reduxjs/toolkit'
// import counterReducer from 'redux/reducers/counterSlice'
import { apiPosts } from 'features/api/apiPosts'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middlewares = [thunk]

const environment = process.env.NODE_ENV
console.log(environment)

if (environment === 'development') {
  middlewares.push(logger)
}
// middlewares.push(api.middleware)

const initalState = {}

export const store = configureStore(
  {
    reducer: {
      [apiPosts.reducerPath]: apiPosts.reducer,
      // counter: counterReducer,
    },
    middleware: middlewares.concat(apiPosts.middleware),
  },
  initalState,
  // composeWithDevTools(applyMiddleware(...middlewares)),
)
