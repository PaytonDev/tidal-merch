import './sign-in.styles.scss'
import React, { useState } from 'react'
import FormInput from '../../Form-Input/form-input.component'
import { auth } from '../../../firebase/firebase.utils'
import Button from '../../Button/Button.component'

const SignIn: React.FC<React.HTMLProps<HTMLDivElement>> = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const { email, password } = inputValue

    setInputValue({ email: '', password: '' })

    try {
      await auth.signInWithEmailAndPassword(email, password)

      setInputValue({ email: '', password: '' })
    } catch (err: any) {
      console.error('Something went wrong with Sign In', err)
    }
  }

  const handleChange = (e: any) => {
    const value = e.target.value
    setInputValue({
      [e.target.name]: value,
      ...inputValue,
    })
  }

  return (
    <div className="sign-in-container fade-in">
      <form onSubmit={handleSubmit} className="sign-in-form">
        <div className="inputs-container">
          <div className="inputs">
            <FormInput
              handleChange={handleChange}
              label="Email"
              name="email"
              required
              type="text"
              value={inputValue.email}
            />
            <FormInput
              handleChange={handleChange}
              label="Password"
              name="password"
              required
              type="password"
              value={inputValue.password}
            />
          </div>
        </div>
        <Button
          bgColor="light"
          textColor="dark"
          type="submit"
          className="sign-in-sign-up-form-btn"
        >
          Sign In
        </Button>
      </form>
    </div>
  )
}

export default SignIn
