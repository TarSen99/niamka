import { configureStore } from '@reduxjs/toolkit'
import productReducer from '@/slices/productSlice.js'

export default configureStore({
  reducer: {
    productReducer
  },
})