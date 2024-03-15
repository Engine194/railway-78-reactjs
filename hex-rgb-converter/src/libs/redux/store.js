import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/count/countSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
