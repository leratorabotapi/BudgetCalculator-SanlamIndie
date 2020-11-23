import React from 'react'
import './style.css'
import NavItem from '../NavItem'

const Navbar = () => {
  return (
    <div className="navbar">
      <NavItem to="/" icon="home">Dashboard</NavItem>
      <NavItem to="/transactions" icon="transactions">Transactions</NavItem>
      <NavItem to="/budget" icon="budget">Budget</NavItem>
      <NavItem to="/reports" icon="reports">Reports</NavItem>
      <NavItem to="/settings" icon="settings">Settings</NavItem>
    </div>
  )
}

export default Navbar
