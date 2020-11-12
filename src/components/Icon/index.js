import React from 'react'
import PropTypes from 'prop-types'
import {
  InsertChart,
  Paste,
  Person,
  PersonOutline,
  Receipt,
} from '../icons';

const Icon = ({ name, size }) => {
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
    case 'account':
      content = '🧾'
      break
    case 'dashboard':
      content = '📊'
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
