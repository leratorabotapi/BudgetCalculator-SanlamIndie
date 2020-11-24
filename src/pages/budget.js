import React from 'react'
import Copy from '../components/Copy'
import './style.css'
import Accordion from '../components/Accordion/Accordion'
import { Row, Collapse } from 'antd'
import 'antd/dist/antd.css'
import Card from '../components/Card'
import Layout from '../components/layout/Layout'
import Content from '../components/Content'

const Budget = () => {
  const { Panel } = Collapse

  return (
        <Layout >
            <Content />
            <div className="App Blue">

            <Row className="title">
            <Copy fontType="H1" weight="bold">Budget</Copy>
            </Row>

            <Row>
                <Card moneyOut={location?.state?.finalTotalMoneyOut} moneyIn={location?.state?.finalTotalMoneyIn} variant="xlarge" />
            </Row>

            <Collapse defaultActiveKey={['1']} >
                <Panel header="Uncatergorised" key="1">
                <p>text</p>
                </Panel>
                <Panel header="Entertainment" key="2">
                <p>text</p>
                </Panel>
                <Panel header="Income" key="3">
                <p>text</p>
                </Panel>
                <Panel header="Food" key="4">
                <p>text</p>
                </Panel>
                <Panel header="Bank" key="5">
                <p>text</p>
                </Panel>
            </Collapse>

            </div>
        </Layout>
  )
}

export default Budget
