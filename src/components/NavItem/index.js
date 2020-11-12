import React from 'react'
import './style.css'
import Copy from '../Copy'
import Icon from '../Icon'

const NavItem = ({ children, icon }) => {
  return (
    <div className='navItem'>
      <button type='button'>
        <Icon name={icon}></Icon>
        <Copy className='copy'>{children}</Copy>
      </button>
    </div>
  )
}

export default NavItem
