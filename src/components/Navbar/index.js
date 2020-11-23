import React, { useContext } from 'react'
import TransactionContext from '../../context/transations'
import './style.css'
import NavItem from '../NavItem'

const Navbar = () => {
  const { transactions, setTransactions, showModal, setShowModal, balance, setBalance, isFetching, setIsFetching, moneyIn, moneyOut, finalTotalMoneyIn, finalTotalMoneyOut } = useContext(TransactionContext)
  return (
    <div className="navbar">
      <NavItem to="/" icon="home">Dashboard</NavItem>
      <NavItem to="/transactions" icon="transactions" state={{ transactions, setTransactions, showModal, setShowModal, balance, setBalance, isFetching, setIsFetching, moneyIn, moneyOut, finalTotalMoneyIn, finalTotalMoneyOut }}>Transactions</NavItem>
      <NavItem to="/budget" icon="budget">Budget</NavItem>
      <NavItem to="/reports" icon="reports">Reports</NavItem>
      <NavItem to="/settings" icon="settings">Settings</NavItem>
    </div>
  )
}

export default Navbar
