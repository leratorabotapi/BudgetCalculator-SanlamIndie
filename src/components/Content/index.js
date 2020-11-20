import React, { useContext } from 'react'
import TransactionContext from '../../context/transations'
import { Link } from 'gatsby'
import './style.css'
import Icon from '../Icon'
import Copy from '../Copy'
import Topbar from '../Topbar'
import Navbar from '../Navbar'

const Content = () => {
  const { transactions, setTransactions, showModal, setShowModal, balance, setBalance, isFetching, setIsFetching, moneyIn, moneyOut, finalTotalMoneyIn, finalTotalMoneyOut } = useContext(TransactionContext)
  // <input type="text" onChange={(e) => storeObject(e.target.value)}/>

  return <div>
    <Topbar />
    <Navbar />

    </div>
}

export default Content
