import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: true },
  reducers: {
    loggIn: (state, action) => {
      state.isLoggedIn = true
    },
    logOut: (state, action) => {
      state.isLoggedIn = false
    },
  },
})

export default authSlice.reducer

export const { loggIn, logOut } = authSlice.actions
