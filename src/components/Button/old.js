/*import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Button = ({ size, buttonColors, margin, content }) => {

  let buttonSize
  switch (size) {
    case 'small':
      buttonSize = 8
      break
    case 'regular':
      buttonSize = 14
      break
    case 'medium':
      buttonSize = 24
      break
    case 'large':
      buttonSize = 41
      break

    default:
      break
  }

  let buttonColor
  switch (buttonColors) {
    case 'red':
      buttonColor = '#E54A2D'
      break
    case 'white':
      buttonColor = '#FFFFFF'
      break
    case 'dark':
      buttonColor = '#222222'
      break
    case 'grey':
      buttonColor = '#BDBDBD'
      break

    default:
      break
  }

  let buttonMargin
  switch (margin) {
    case '0':
      buttonMargin = '0'
      break

    default:
      break
  }

  return (
    <button
      className="button"
      style={{
        margin: `${buttonMargin}px`,
        fontSize: `${buttonSize}px`,
        height: `${buttonSize}px`,
        width: `${buttonSize}px`,
        color: `${buttonColor}`
      }}
    >
      <p>hello</p>
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Button.defaultProps = {
  size: 'medium'
}

export default Button */
