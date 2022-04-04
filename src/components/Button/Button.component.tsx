import React from 'react'
import './button.styles.scss'

const colors = {
  dark: '#1d1f20',
  light: '#e6e4e1',
  accent: '#1affff',
}

interface ButtonProps {
  bgColor?: 'dark' | 'light' | 'accent'
  textColor?: 'dark' | 'light' | 'accent'
  customBGColor?: string
  customTextColor?: string
  className?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = (
  props
) => {
  const getBGColor = () => {
    if (props.customBGColor !== undefined) return props.customBGColor
    if (props.bgColor === undefined) {
      return undefined
    }
    return colors[props.bgColor]
  }

  const getTextColor = () => {
    if (props.customTextColor !== undefined) return props.customTextColor
    if (props.textColor === undefined) {
      return undefined
    }
    return colors[props.textColor]
  }

  return (
    <button
      className={`${props.className} custom-btn`}
      style={{
        backgroundColor: getBGColor(),
        color: getTextColor(),
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
