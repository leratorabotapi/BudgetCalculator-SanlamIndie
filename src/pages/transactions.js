import React from 'react'
import Copy from '../components/Copy'
import Layout from '../components/Layout'
import Date from '../components/Date'
import Balance from '../components/Balance'
import Card from '../components/Card'

import { Table, Space, Row, Col } from 'antd'
import 'antd/dist/antd.css'

export default function Transactions (transactionspage) {
  const transactions = JSON.parse(localStorage.getItem('transactions'))

  const columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (text) =>
      <Copy fontType="Body2">{text}</Copy>
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (text) => (
        <Space size="middle">
          <Copy fontType="Body2">{text}</Copy>
          <a>Edit</a>
        </Space>
      )
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text) =>
      <Copy fontType="Body2"><Date date={text} /></Copy>
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text) =>
      <Copy fontType="Body2"><Balance amount={text}/></Copy>
    }
  ]

  return (
    <Layout name={transactionspage}>
      <div className="App">
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
                pageSize: 10,
                hideOnSinglePage: false
              }}
            columns={columns}

            />
            </div>
            </Col> 
            </Row>
          </div>
      </Layout>
  )
}
