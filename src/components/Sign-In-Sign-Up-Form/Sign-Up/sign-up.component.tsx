import './sign-up.styles.scss'
import { useState } from 'react'
import FormInput from '../../Form-Input/form-input.component'
import {
  auth,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../../firebase/firebase.utils'
import Button from '../../Button/Button.component'

const defaultInput = {
  email: '',
  password: '',
  username: '',
  confirmPassword: '',
}

const SignUp = () => {
  const [inputValue, setInputValue] = useState(defaultInput)
  const { username, email, password, confirmPassword } = inputValue

  const resetFormFields = () => setInputValue(defaultInput)

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const user = await createAuthUserWithEmailAndPassword(email, password)

      await createUserDocumentFromAuth(user)
      resetFormFields()
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      } else {
        console.log('user creation encountered an error', err)
      }
    }
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target as HTMLInputElement
    setInputValue({ ...inputValue, [name]: value })
  }

  return (
    <div className="sign-up-container fade-in">
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          handleChange={handleChange}
          label="Username"
          name="username"
          required
          type="text"
          value={username}
        />
        <FormInput
          handleChange={handleChange}
          label="Email"
          name="email"
          required
          type="text"
          value={email}
        />
        <FormInput
          handleChange={handleChange}
          label="Password"
          name="password"
          required
          type="password"
          value={password}
        />
        <FormInput
          handleChange={handleChange}
          label="Confirm Password"
          name="confirmPassword"
          required
          type="password"
          value={confirmPassword}
        />
        <Button
          bgColor="light"
          textColor="dark"
          type="submit"
          className="sign-in-sign-up-form-btn"
        >
          Sign Up
        </Button>
      </form>
    </div>
  )
}

export default SignUp
