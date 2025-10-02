import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: true },
  reducers: {
    toggle: (state, action) => {
      state.isLoggedIn = !state.isLoggedIn
    },
  },
})

export default authSlice.reducer

export const { toggle } = authSlice.actions
