import React from 'react'
import Copy from '../components/Copy'
import './style.css'
import Balance from '../components/Balance'
import Date from '../components/Date'
import { Table, Row, Space, Collapse } from 'antd'
import 'antd/dist/antd.css'
import Card from '../components/Card'
import Layout from '../components/layout/Layout'
import Content from '../components/Content'

const Budget = ({location}) => {
  const { Panel } = Collapse

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

            <Row className="title">
            <Copy fontType="H1" weight="bold">Budget</Copy>
            </Row>

            <Row>
                <Card moneyOut={location?.state?.finalTotalMoneyOut} moneyIn={location?.state?.finalTotalMoneyIn} variant="xlarge" />
            </Row>

            <Collapse defaultActiveKey={['1']} style={{ marginTop: '45px' }}>
                <Panel header="Income" key="1">
                <Table
              dataSource={location?.state?.moneyIn}
              pagination={{
                total: location?.state?.moneyIn.length,
                pageSize: 5,
                hideOnSinglePage: false
              }}
            columns={columns}
            showHeader={false}

            />
                </Panel>

            </Collapse>


  {location?.state?.categories.map((category) => (
    <>
    <Collapse>
    <Panel header={category.name}>
      <ul>
        {location?.state?.transactions
          .filter((transaction) => {
            return transaction.description
              .toLowerCase()
              .includes(category.pattern);
          })
          .map((transaction) => (
            <li>{transaction.description}</li>
          ))}
      </ul>
      </Panel>
      </Collapse>
    </>
  ))}

            </div>
        </Layout>
  )
}

export default Budget
