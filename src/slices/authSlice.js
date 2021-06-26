import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { authAPI } from '../api/api.js';

export const login = createAsyncThunk(
    'users/login',
    async ( { email, password }, thunkAPI) => {
      const response = await authAPI.login(email, password)
      return response
    }
)

  export const logout = createAsyncThunk(
    'users/logout',
    async ( { email, password }, thunkAPI) => {
      const response = await authAPI.logout()
      return response
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userLogin: {},
        isAuthenticated: false,
        error: '',
    },
    reducers: {
            logoutSuccess: (state) => {
              state.isAuthenticated = false
              state.currentUser = {}
              state.error = ''
              state.loading = false
            },
          },
          extraReducers: (builder) => {
            
            builder.addCase(login.fulfilled, (state, action) => {
                state.isAuthenticated = true
            })

            builder.addCase(logout.fulfilled, (state, action) => {
                state.isAuthenticated = false
            })
          },
})

export const { logoutSuccess } = authSlice.actions

export default authSlice.reducer;
