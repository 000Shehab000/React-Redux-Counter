import { configureStore, createSlice } from '@reduxjs/toolkit'

const initState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.counter += 1
    },
    decrease: (state, action) => {
      state.counter -= 1
    },
  },
})

// original rudex reducer
// const counterReducer = (state = initState, action) => {
//   if (action.type === 'increase') {
//     return { ...state, counter: state.counter + action.payload.addedNum }
//   } else if (action.type === 'decrease') {
//     return { ...state, counter: state.counter - action.payload.subtractedNum }
//   } else if (action.type === 'toggleCounter') {
//     return { ...state, showCounter: !state.showCounter }
//   }

//   return state
// }

const store = configureStore(counterSlice.reducer)

export default store
