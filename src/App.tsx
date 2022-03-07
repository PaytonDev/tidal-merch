import React from 'react'
import './App.css'
import Home from './pages/Home/home.page'
import { Routes, Route } from 'react-router-dom'
import SignInSignUp from './pages/Sign-In-Page/sign-in.page'

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignInSignUp />} />
    </Routes>
  </div>
)

export default App
