import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'redux/reducers/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
