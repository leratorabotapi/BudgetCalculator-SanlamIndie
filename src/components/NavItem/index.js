import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import './style.css'
import Copy from '../Copy'
import Icon from '../Icon'

const linkStyles = {
  color: '#D5DAE1'

}

const activeStyles = {
  color: '#0151A3'
}

const NavItem = ({ children, icon, to }) => {
  return (
    <Link to={to} style={linkStyles} activeStyle={activeStyles}>
      <Icon name={icon}></Icon>
      <Copy fontType="Body2" weight="regular" style>{children}</Copy>
    </Link>
  )
}

NavItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default NavItem
