import './sign-in.styles.scss'
import React, { useState } from 'react'
import FormInput from '../../Form-Input/form-input.component'

const SignIn: React.FC<React.HTMLProps<HTMLDivElement>> = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = () => {}

  const handleChange = (e: any) => {
    const value = e.target.value
    setInputValue({
      ...inputValue,
      [e.target.name]: value,
    })
  }

  return (
    <div className="sign-in-container fade-in">
      <form onSubmit={handleSubmit} className="sign-in-form">
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
      </form>
    </div>
  )
}

export default SignIn
