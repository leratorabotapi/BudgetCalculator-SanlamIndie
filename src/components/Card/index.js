import React from 'react'
import './style.css'
import Copy from '../Copy'
import Balance from '../Balance'
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
            </Row>

            <Row>
            <Col style={{ marginTop: '10px'}} span={12}>
            <Copy color="wealthGrey300" fontType='Body1'>
            Money Out
            </Copy>
            </Col>
            <Col style={{ marginTop: '10px'}} span ={12}>
              <Copy color="wealthGrey300" fontType='Body1'>
            <Balance amount={moneyOut} />
            </Copy>
            </Col>
            </Row>

            <Row align="bottom">
            <Col style={{ marginTop: '10px'}} span={12}>
            <Copy color="wealthGrey300" fontType='Body1'>
            Money In
            </Copy>
            </Col>
            <br ></br>
            <Col style={{ marginTop: '10px'}} spane={12}>
              <Copy color="wealthGrey300" fontType='Body1'>
            <Balance amount={moneyIn} />
            </Copy>
            </Col>
            </Row>
        </div>
  )
}

export default Card
