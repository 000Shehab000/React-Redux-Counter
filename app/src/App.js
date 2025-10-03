import './App.css'
import { useSelector, useDispatch } from 'react-redux'

//actions
import { increase, decrease } from './store/counterSlice'
import { loggIn, logOut } from './store/authSlice'

export default function App() {
  const dispatch = useDispatch()
  const counterState = useSelector((state) => state.counter.value)
  const authState = useSelector((state) => state.auth.isLoggedIn)

  const counterHandler = (type, value) => {
    if (type === 'increase') {
      dispatch(increase(value))
    } else {
      dispatch(decrease(value))
    }
  }

  const logInHandler = (status) => {
    if (status) {
      dispatch(logOut())
    } else {
      dispatch(loggIn())
    }
  }

  return (
    <div className="app-container">
      <h1>React Redux Counter</h1>

      {authState && (
        <>
          <div className="counter">Counter : {counterState}</div>
          <div>
            <button
              className="btn"
              onClick={() => counterHandler('increase', 5)}
            >
              Increase +
            </button>
            <button
              className="btn"
              onClick={() => counterHandler('decrease', 5)}
            >
              Decrease -
            </button>
          </div>
        </>
      )}

      <div>
        <button className="btn" onClick={() => logInHandler(authState)}>
          {authState ? 'Sign Out' : 'Login'}
        </button>
      </div>
    </div>
  )
}
