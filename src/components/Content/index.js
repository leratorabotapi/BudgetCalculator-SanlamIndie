import React, { useContext } from 'react'
import TransactionContext from '../../context/transations'
import { Link } from 'gatsby'
import './style.css'
import Icon from '../Icon'
import Copy from '../Copy'
import Topbar from '../Topbar'

const Content = () => {
  const { transactions } = useContext(TransactionContext)
  // <input type="text" onChange={(e) => storeObject(e.target.value)}/>

  return <div>      
    <Topbar />
    <div className="navbar">
   
      <Link to="/"  state={{ transactions }}>
        <Icon color="blue700" name="home"></Icon>
        <Copy color="blue700">Dashboard</Copy>
      </Link>
      <Link to="/transactions" state={{ transactions }}>
        <Icon name="transaction"></Icon>
        <Copy>Transactions</Copy>
      </Link>
      <Link to="/budget" state={{ transactions }}>
        <Icon name="budget"></Icon>
        <Copy>Budget</Copy>
      </Link>
      <Link to="/reports">
        <Icon name="report"></Icon>
        <Copy>Reports</Copy>
      </Link>
      <Link to="/settings" disabled={true}>
        <Icon name=""></Icon>
        <Copy>Settings</Copy>
      </Link>
    </div>

    </div>
}

export default Content
