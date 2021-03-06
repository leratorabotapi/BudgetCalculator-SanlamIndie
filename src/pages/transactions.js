import React, { useContext } from 'react'
import Copy from '../components/Copy'
import Date from '../components/Date'
import Balance from '../components/Balance'
import Card from '../components/Card'
import Layout from '../components/layout/Layout'
import Content from '../components/Content'

import { Table, Space, Row, Col, Tabs } from 'antd'
import 'antd/dist/antd.css'

const Transactions = ({location}) => {

  const { TabPane } = Tabs;

  const columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (text) =>
      <Copy color="wealthGrey300" fontType="Body2">{text}</Copy>
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (text) => (
        <Space size="middle">
          <Copy color="wealthGrey300" fontType="Body2">{text}</Copy>
          
        </Space>
      )
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
      render: (text) =>
      <Copy color="wealthGrey300" fontType="Body2"><Date date={text} /></Copy>
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text) =>
      <Copy fontType="Body2"><Balance color="wealthGrey300"  amount={text}/></Copy>
    }
  ]

  return (
    <Layout >
      <Content />
      <div className="App Blue">
            <Row>
            <Tabs defaultActiveKey="1"
            tabBarGutter={58}
            style={{ width: "100%" }}>
              <TabPane tab="All" key="1">
                <Row className="title">
            <Copy fontType="H1" weight="bold">Transactions</Copy>
            </Row>
                <Row>
            <Card moneyOut={location?.state?.finalTotalMoneyOut} moneyIn={location?.state?.finalTotalMoneyIn} variant="medium" />
            </Row>
                <Row> 
              <Col span={24}>
            <div className="table">
            <Table
              dataSource={location?.state?.transactions}
              pagination={{
                total: location?.state?.transactions.length,
                pageSize: 30,
                hideOnSinglePage: false
              }}
            columns={columns}

            />
            </div>
            </Col> 
            </Row>
              </TabPane>
              <TabPane tab="Money In" key="2">
              <Row className="title">
            <Copy fontType="H1" weight="bold">Transactions</Copy>
            </Row>
               
                <Table
              dataSource={location?.state?.moneyIn}
              pagination={{
                total: location?.state?.moneyIn.length,
                pageSize: 30,
                hideOnSinglePage: false
              }}
            columns={columns}

            />
              </TabPane>
              <TabPane tab="Money Out" key="3">
              <Row className="title">
            <Copy fontType="H1" weight="bold">Transactions</Copy>
            </Row>
                
                <Table
              dataSource={location?.state?.moneyOut}
              pagination={{
                total: location?.state?.moneyOut.length,
                pageSize: 30,
                hideOnSinglePage: false
              }}
            columns={columns}

            />
              </TabPane>
            </Tabs>
            </Row>
 
          </div>
      </Layout>
  )
}

export default Transactions