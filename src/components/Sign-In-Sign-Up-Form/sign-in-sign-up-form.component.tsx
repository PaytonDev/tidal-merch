import './sign-in-sign-up-form.styles.scss'
import SignIn from './Sign-In/sign-in.component'
import SignUp from './Sign-Up/sign-up.component'
import React, { useState } from 'react'
import Button from '../Button/Button.component'

const SignInSignUpForm = () => {
  const [signInActive, setSignInActive] = useState(true)
  const [signUpActive, setSignUpActive] = useState(false)

  const handleSILinkClick = () => {
    setSignInActive(true)
    setSignUpActive(false)
  }
  const handleSULinkClick = () => {
    setSignUpActive(true)
    setSignInActive(false)
  }

  return (
    <div className="sign-in-sign-up-form-container fade-in">
      <div className="form-links">
        <div
          id="sign-in-link"
          className={`form-link ${signInActive ? 'underlined' : null}`}
          onClick={handleSILinkClick}
        >
          SIGN IN
        </div>
        <div
          id="sign-up-link"
          className={`form-link ${signUpActive ? 'underlined' : null}`}
          onClick={handleSULinkClick}
        >
          SIGN UP
        </div>
      </div>
      {signInActive ? <SignIn /> : <SignUp />}
      <Button
        bgColor="light"
        textColor="dark"
        type="submit"
        className="sign-in-sign-up-form-btn"
      >
        {signInActive ? 'Sign In' : 'Sign Up'}
      </Button>
    </div>
  )
}

export default SignInSignUpForm
