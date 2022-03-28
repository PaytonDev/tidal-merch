import React from 'react'
import './button.styles.scss'

const colors = {
  dark: '#1d1f20',
  light: '#e6e4e1',
  accent: '#1affff',
}

interface ButtonProps {
  bgColor: 'dark' | 'light' | 'accent'
  textColor: 'dark' | 'light' | 'accent'
  className?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = (
  props
) => (
  <button
    className={`${props.className} custom-btn`}
    style={{
      backgroundColor: colors[props.bgColor],
      color: colors[props.textColor],
    }}
    onClick={props.onClick}
  >
    {props.children}
  </button>
)

export default Button
