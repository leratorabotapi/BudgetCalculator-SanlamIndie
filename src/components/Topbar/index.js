import React, { useContext } from "react"
import "./style.css"
import { Row } from 'antd'
import Icon from '../Icon'
import 'antd/dist/antd.css'
import { LogoFull } from '@indiefin/galaxy-base'

const Navbar = () => {
  return (
    <div className="topbar">
      <Row>
        <div className="LogoFull">
     <LogoFull/>
     </div>
      </Row>
    </div>
  )
}

export default Navbar
