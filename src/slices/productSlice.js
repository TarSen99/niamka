import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        value: []
    },
    reducers: {
        addProduct(state, action) {
            state.value.push(action.payload)
        },
        removeProduct(state, action) {
            state.value.splice(action.payload, 1)
        }
    }
})

export const { addProduct, removeProduct } = productSlice.actions

export default productSlice.reducer