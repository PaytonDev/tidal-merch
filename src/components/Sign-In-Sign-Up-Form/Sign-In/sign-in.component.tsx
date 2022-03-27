import './sign-in.styles.scss'
import React, { useState } from 'react'
import { signInAuthUserWithEmailAndPassword } from '../../../firebase/firebase.utils'
import FormInput from '../../Form-Input/form-input.component'
import Button from '../../Button/Button.component'

const defaultInput = { email: '', password: '' }
const SignIn: React.FC<React.HTMLProps<HTMLDivElement>> = () => {
  const [inputValue, setInputValue] = useState(defaultInput)

  const { email, password } = inputValue

  const resetFormFields = () => setInputValue(defaultInput)

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(response)
      resetFormFields()
    } catch (err: any) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('incorrect password')
          break
        case 'auth/user-not-found':
          alert('np iser associated with this email')
          break
        default:
          console.warn(err)
      }
    }
  }

  const handleChange = (e: Event) => {
    const { value, name } = e.target as HTMLInputElement
    setInputValue({ ...inputValue, [name]: value })
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
