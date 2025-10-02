import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/counterSlice'

const store = configureStore({ reducer: counterReducer })

export default store
