import './sign-up.styles.scss'
import { useState } from 'react'
import FormInput from '../../Form-Input/form-input.component'
import {
  auth,
  createUserProfileDocument,
} from '../../../firebase/firebase.utils'
import Button from '../../Button/Button.component'

const SignUp = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    username: '',
    confirmPassword: '',
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const { username, email, password, confirmPassword } = inputValue

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const user = await auth.createUserWithEmailAndPassword(email, password)

      await createUserProfileDocument(user, { username })

      setInputValue({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (err: any) {
      console.log('Authentication Error', err)
    }
  }

  const handleChange = (e: any) => {
    const value = e.target.value
    setInputValue({
      ...inputValue,
      [e.target.name]: value,
    })
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
          value={inputValue.username || ''}
        />
        <FormInput
          handleChange={handleChange}
          label="Email"
          name="email"
          required
          type="text"
          value={inputValue.email || ''}
        />
        <FormInput
          handleChange={handleChange}
          label="Password"
          name="password"
          required
          type="password"
          value={inputValue.password}
        />
        <FormInput
          handleChange={handleChange}
          label="Confirm Password"
          name="confirmPassword"
          required
          type="password"
          value={inputValue.confirmPassword}
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
