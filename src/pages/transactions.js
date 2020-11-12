import React from 'react'
import Copy from '../components/Copy'
import Layout from '../components/Layout'
import Date from '../components/Date'
import Balance from '../components/Balance'

import { Table, Space } from 'antd'
import 'antd/dist/antd.css'

export default function Transactions (transactionspage) {
  const transactions = JSON.parse(localStorage.getItem('transactions'))

  console.log(transactions)

  const columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (text) => 
      <Copy>{text}</Copy>,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (text) => (
        <Space size="middle">
          <Copy>{text}</Copy>
          <a>Edit</a>
        </Space>
      )
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    render: (text) => 
      <Copy><Date date={text} /></Copy>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text) => 
      <Copy><Balance amount={text}/></Copy>,
    }
  ]

  return (
    <Layout name={transactionspage}>
            <Copy fontType="H1">Transactions</Copy>

            <div className="table">
            <Table pagination={{
              total: transactions.length,
              pageSize: transactions.length,
              hideOnSinglePage: true
            }}
            columns={columns} dataSource={transactions}
            />
            </div>
      </Layout>
  )
}
