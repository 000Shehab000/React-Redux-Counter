import { createStore, createSlice } from '@reduxjs/toolkit'

const initState = { counter: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.counter += action.payload
    },
    decrease: (state, action) => {
      state.counter -= action.payload
    },
  },
})

const store = createStore(counterSlice.reducer)

// exportin action to import and use it in app component
export const { increase, decrease } = counterSlice.actions

export default store
