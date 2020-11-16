import React, { useContext } from "react"
import { Link } from "gatsby"
import "./style.css"
import Icon from "../Icon"
import Copy from "../Copy"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <Icon color="blue700" name="home"></Icon>
        <Copy color="blue700">Dashboard</Copy>
      </Link>   
      <Link to="/transactions">
        <Icon name="transaction"></Icon>
        <Copy>Transactions</Copy>
      </Link>
      <Link to="/budget">
        <Icon name="budget"></Icon>
        <Copy>Budget</Copy> 
      </Link>
      <Link to="/reports">
        <Icon name="report"></Icon>
        <Copy>Reports</Copy>
      </Link>
    </div>
  )
}

export default Navbar
