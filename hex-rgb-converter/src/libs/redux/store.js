import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/count/countSlice'
import userReducer from './features/user/userSlide'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
})

