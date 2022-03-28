import React, { useEffect } from 'react'
import './App.css'
import Home from './pages/Home/home.page'
import { Routes, Route, Navigate } from 'react-router-dom'
import SignInSignUp from './pages/Sign-In-Page/sign-in.page'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { setCurrentUser } from './redux/features/auth/auth-slice'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { useSelector } from 'react-redux'

const App = () => {
  const dispatch = useAppDispatch()
  const auth = getAuth()
  const user = useAppSelector((state) => state.auth.currentUser)
  console.log(user)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setCurrentUser(user.refreshToken))
      } else {
        dispatch(setCurrentUser(''))
      }
    })
  }, [auth, dispatch])

  return (
    <div className="App">
      <Routes>
        {/* Configure Routes next */}

        <Route
          path="/"
          element={user ? <Home /> : <Navigate replace to="/sign-in" />}
        />
        <Route
          path="/sign-in"
          element={user ? <Navigate replace to="/" /> : <SignInSignUp />}
        />
      </Routes>
    </div>
  )
}

export default App
