import { configureStore } from '@reduxjs/toolkit'
import productReducer from '@/slices/productSlice.js'
import authReducer from '@/slices/authSlice.js'

export default configureStore({
  reducer: {
    productReducer,
    authReducer,
  },
})