import React from 'react'
import PropTypes from 'prop-types'
import {
  InsertChart,
  Paste,
  Person,
  PersonOutline,
  Receipt,
  Sanlam,
  Search,
} from '../icons';

const Icon = ({ name, size, color }) => {

  let content
  switch (name) {
    case 'home':
      content = <Person />
      break
    case 'report':
      content = <InsertChart />
      break
    case 'transaction':
      content = <Paste />
      break
    case 'budget':
      content = <Receipt />
      break
    case 'sanlam':
      content = <Sanlam />
      break
    case 'search':
      content = <Search />
      break
    case 'account':
      content = '🧾'
      break
    case 'dashboard':
      content = '📊'
      break

    default:
      break
  }

  let iconColor
  switch (color) {
    case 'black':
      iconColor = '#000000'
      break
    case 'white':
      iconColor = '#ffffff'
      break
    case 'blue':
      iconColor = '#0075C9'
      break
      case 'blue700':
      iconColor = '#0151A3'
      break
    case 'wealthGrey':
      iconColor = '#333E48'
      break
    case 'wealthGrey300':
      iconColor = '#737B81'
      break
    case 'error':
      iconColor = '#E61C01'
      break
    case 'success':
      iconColor = '#018F01'
      break
    case 'alert':
      iconColor = '#F26901'
      break

    default:
      break
  }

  let iconSize
  switch (size) {
    case 'small':
      iconSize = 10
      break
    case 'medium':
      iconSize = 16
      break
    case 'large':
      iconSize = 24
      break

    default:
      break
  }



  return (
    <div
      style={{
        fontSize: `${iconSize}px`,
        height: `${iconSize}px`,
        width: `${iconSize}px`,
        margin: `15px 15px`,
        color: `${color}`,
      }}
    >
      {content}
    </div>
  )
}

Icon.propTypes = {
  /**
   * name of the icon
   */
  name: PropTypes.string.isRequired,
  /**
   * size of the icon to display
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Icon.defaultProps = {
  size: 'medium',
}

export default Icon
