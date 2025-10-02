import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from './store/counterSlice'
import { toggle } from './store/authSlice'

export default function App() {
  const dispatch = useDispatch()
  const counterState = useSelector((state) => state.counter.value)
  const authState = useSelector((state) => state.auth.isLoggedIn)

  return (
    <div className="app-container">
      <h1>React Redux Counter</h1>

      {authState && (
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
      )}

      <div>
        <button className="btn" onClick={() => dispatch(toggle())}>
          {authState ? 'Sign Out' : 'Login'}
        </button>
      </div>
    </div>
  )
}
