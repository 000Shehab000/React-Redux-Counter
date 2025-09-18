import { createStore } from 'redux'

const initState = { counter: 0, showCounter: true }
const counterReducer = (state = initState, action) => {
  if (action.type === 'increase') {
    return { ...state, counter: state.counter + action.payload.addedNum }
  } else if (action.type === 'decrease') {
    return { ...state, counter: state.counter - action.payload.subtractedNum }
  } else if (action.type === 'toggleCounter') {
    return { ...state, showCounter: !state.showCounter }
  }

  return state
}

const store = createStore(counterReducer)

export default store
