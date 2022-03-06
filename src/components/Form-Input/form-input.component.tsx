import React from 'react'
import './form-input.styles.scss'

interface FormInputProps {
  handleChange: (e: any) => void
  label?: string
  otherFormInputProps?: { [key: string]: any }
  type: string
}

const FormInput: React.FC<
  FormInputProps & React.HTMLProps<HTMLInputElement>
> = (props) => {
  const { handleChange, label, type, ...otherFormInputProps } = props

  return (
    <div className="input-group">
      <input
        className="form-input"
        onChange={handleChange}
        type={type}
        {...otherFormInputProps}
      />
      {label ? (
        <label
          className={`${
            otherFormInputProps?.value ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  )
}

export default FormInput
