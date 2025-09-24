import { useEffect, useCallback } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'

export default function App() {
  const dispatch = useDispatch()
  const counterState = useSelector((state) => state.counter)
  const showCounterState = useSelector((state) => state.showCounter)

  const counterOperation = useCallback(
    (type, payload) => {
      dispatch({ type, payload })
    },
    [dispatch]
  )

  useEffect(() => {
    counterOperation('increase', { addedNum: 5 })
  }, [counterOperation])

  // const increase = () => {
  //   const action = { type: 'increase', payload: { addedNum: 5 } }
  //   dispatch(action)
  // }
  // const decrease = () => {
  //   const action = { type: 'decrease', payload: { subtractedNum: 1 } }
  //   dispatch(action)
  // }

  const showOrHideCounter = () => {
    const action = { type: 'toggleCounter' }
    dispatch(action)
  }

  return (
    <div className="app-container">
      <h1>React Redux Counter</h1>
      {showCounterState && (
        <>
          <div className="counter">Counter : {counterState}</div>
          <div>
            <button
              className="btn"
              onClick={() => counterOperation('increase', { addedNum: 5 })}
            >
              Increase +
            </button>
            <button
              className="btn"
              onClick={() => counterOperation('decrease', { subtractedNum: 5 })}
            >
              Decrease -
            </button>
          </div>
        </>
      )}

      <div>
        <button className="btn" onClick={showOrHideCounter}>
          Hide/Show Counter Number
        </button>
      </div>
    </div>
  )
}
