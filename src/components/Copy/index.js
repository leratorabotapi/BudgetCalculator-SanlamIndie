import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Copy = ({ children, fontType, color, weight }) => {
  let copyColor
  switch (color) {
    case 'black':
      copyColor = '#000000'
      break
    case 'white':
      copyColor = '#ffffff'
      break
    case 'blue':
      copyColor = '#0075C9'
      break
    case 'blue700':
      copyColor = '#0151A3'
      break
    case 'wealthGrey':
      copyColor = '#333E48'
      break
    case 'wealthGrey300':
      copyColor = '#737B81'
      break
    case 'error':
      copyColor = '#E61C01'
      break
    case 'success':
      copyColor = '#018F01'
      break
    case 'alert':
      copyColor = '#F26901'
      break

    default:
      break
  }

  let fontStyle
  switch (fontType) {
    case 'Hero':
      fontStyle = '52'
      break
    case 'H1':
      fontStyle = '40'
      break
    case 'H2':
      fontStyle = '28'
      break
    case 'H3':
      fontStyle = '24'
      break
    case 'H4':
      fontStyle = '20'
      break
    case 'Body1':
      fontStyle = '16'
      break
    case 'Body2':
      fontStyle = '14'
      break
    case 'Body3':
      fontStyle = '12'
      break
    case 'Body4':
      fontStyle = '9'
      break

    default:
      break
  }

  return (
    <div
      className={`copy-${fontType} ${weight}` }
      style={{
        color: `${copyColor}`,
        fontSize: `${fontStyle}px`
      }}
    >
      {children}
    </div>
  )
}

Copy.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,

  size: PropTypes.oneOf(['Body1', 'Hero', 'H1', 'H2', 'H3', 'H4', 'Body2', 'Body3', 'Body4'])
}

Copy.defaultProps = {
  size: 'medium',
  color: 'wealthGrey',
  style: 'Body1'
}

export default Copy
