import React from 'react'
import Copy from '../components/Copy'
import Layout from '../components/Layout'
import Date from '../components/Date'
import Balance from '../components/Balance'
import Card from '../components/Card'

import { Table, Space, Row, Col, Tabs } from 'antd'
import 'antd/dist/antd.css'

export default function Transactions (transactionspage) {
  const transactions = JSON.parse(localStorage.getItem('transactions'))

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
          <a>Edit</a>
        </Space>
      )
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
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
    <Layout name={transactionspage}>
      <div className="App">
            <Row>
            <Tabs defaultActiveKey="1"
            tabBarGutter={58}
            style={{ width: "100%" }}>
              <TabPane tab="All" key="1">
                <Row className="title">
            <Copy fontType="H1" weight="bold">Transactions</Copy>
            </Row>
                <Row>
            <Card variant="medium" />
            </Row>
                <Row> 
              <Col span={24}>
            <div className="table">
            <Table
              dataSource={transactions}
              pagination={{
                total: transactions.length,
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
                Money In
              </TabPane>
              <TabPane tab="Money Out" key="3">
              <Row className="title">
            <Copy fontType="H1" weight="bold">Transactions</Copy>
            </Row>
                Money Out
              </TabPane>
              <TabPane tab="Pending" key="4" disabled>
                Pending Tab
              </TabPane>
            </Tabs>
            </Row>
 
          </div>
      </Layout>
  )
}
