import { useEffect, useCallback } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from './store/counterSlice'

export default function App() {
  const dispatch = useDispatch()
  const counterState = useSelector((state) => state.counter)

  return (
    <div className="app-container">
      <h1>React Redux Counter</h1>

      <>
        <div className="counter">Counter : {counterState}</div>
        <div>
          <button className="btn" onClick={() => dispatch(increase(5))}>
            Increase +
          </button>
          <button className="btn" onClick={() => dispatch(decrease(2))}>
            Decrease -
          </button>
        </div>
      </>

      <div>
        <button className="btn">Hide/Show Counter Number</button>
      </div>
    </div>
  )
}
