import { createStore } from 'redux'

const initState = { counter: 0 }
const counterReducer = (state = initState, action) => {
  return state
}

const store = createStore(counterReducer)

export default store
