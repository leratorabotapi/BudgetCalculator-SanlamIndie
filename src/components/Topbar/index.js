import React, { useContext } from "react"
import "./style.css"
import logo from "../images/Sanlam.svg"
import { Row } from 'antd'
import Icon from '../Icon'
import 'antd/dist/antd.css'

const Navbar = () => {
  return (
    <div className="topbar">
      <Row>
      <img src={logo} alt="sanlamlogo" />
      </Row>
    </div>
  )
}

export default Navbar
