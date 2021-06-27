import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
    },
    reducers: {
            login: (state) => {
              state.isAuthenticated = true
            },
            logout: (state) => {
              state.isAuthenticated = false
            },
          }
})

export const { logout, login } = authSlice.actions

export default authSlice.reducer;
