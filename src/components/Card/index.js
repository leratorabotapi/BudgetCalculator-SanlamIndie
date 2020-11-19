import React from 'react'
import './style.css'
import Copy from '../Copy'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'

function Card (props) {
  const { moneyIn, moneyOut, variant = 'primary', children, ...rest } = props
  return (
        <div className={`card ${variant}`}{...rest}>
            <Row>
            <Col span={24}>
            <Copy fontType='H3' weight="bold">Cash Flow</Copy>
            </Col>
            <Col span={12}>
            <Copy color="wealthGrey300" fontType='Body1'>
            Money Out
            <br/> 
            Money In
            </Copy>
            </Col>
           
            <Col span={12}>
            <Copy color="wealthGrey300" fontType='Body1'>
            {moneyOut}
            <br/> 
           {moneyIn}
            </Copy>
            </Col>
            </Row>
        </div>
  )
}

export default Card
