import React, { useState, useEffect } from 'react'
import './style.css'
import Copy from '../components/Copy'
import Balance from '../components/Balance'
import 'antd/dist/antd.css'

// import { Button } from '../components/Button/Button'
import { Table, Space, Row, Col } from 'antd'

import Modal from '../components/Modal'
import Icon from '../components/Icon'
import { Button } from '@indiefin/galaxy-button'
import { Pill } from '@indiefin/galaxy-pill'
import social from '../components/images/social.png'
import { Line } from 'react-chartjs-2'
import Layout from '../components/layout/Layout'
import Content from '../components/Content'
import Visacard from '../components/VisaCard/VisaCard'

export default function Home ({ location }) {

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  const columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: text => <Copy fontType="Body2">{text}</Copy>
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: text => (
        <Space size="middle">
          <Copy fontType="Body2">{text}</Copy>
          <a>Edit</a>
        </Space>
      )
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: text => (
        <Copy fontType="Body2">
          <Balance amount={text} />
        </Copy>
      )
    }
  ]

  return (
    <div>
      <Layout>

          <Content />
          <div className="App">
            <Row>
              <Col span={23}>
                <Copy fontType="Body1">Lethabo Moeketsi</Copy>
              </Col>
              <Col span={1}>
                <Icon name="search" size="large" />
              </Col>

              <Col span={24} align="middle">
                <Copy fontType="H3" variant="light">
                  Your current budget
                </Copy>
                <Visacard/>
               
              </Col>
            </Row>

            <Row>
              <Col span={24}>
              {/*
              {!location?.state?.showModal && (
                  <Button
                    kind="filled"
                    color="blue"
                    size="regular"
                    handleClick={openModal}
                  >
                    Open Modal
                  </Button>
                )}
                <Modal
                  closeModal={closeModal}
                  showModal={location?.state?.showModal}
                  title="Modal Example"
                >
                   <input type="text" id="category" name="" placeholder="e.g Category" /><br/>
                    <hr />
                  <Balance amount={location?.state?.balance} />
                </Modal>

                <Button
                  kind="filled"
                  color="blue"
                  size="regular"
                  handleClick={() => {
                    localStorage.removeItem("transactions")
                    location?.target?.setTransactions([])
                  }}
                >
                  clear localStorage
                </Button>


                <Button
                  color="blue"
                  disabled={location?.state?.isFetching}
                  handleClick={() => fetchData()}
                  kind="filled"
                  size="regular"
                  type="button"
                >
                  fetch new data
                </Button>

                <Balance amount={location?.state?.balance} /> */}

                <div>
            <pre>{JSON.stringify(location?.state?.transactions, null, 2)}</pre>
          </div>
              </Col>
            </Row>

            <Row>
              <Col span={12}>
                <div className="dashbordDiv2">
                  <Copy fontType="H4" weight="bold">
                    Recent Transactions
                  </Copy>
                  <div className="dashboardTable">
                    <Table
                      pagination={{
                        total: 5,
                        pageSize: 5,
                        hideOnSinglePage: true
                      }}
                      columns={columns}
                      dataSource={location?.state?.transactions}
                      showHeader={false}
                      size="small"
                    />
                  </div>
                </div>
              </Col>

              <Col span={12}>
                <div className="dashbordDiv3">
                  <Copy fontType="H4" weight="bold">
                    Tips & Advice
                  </Copy>
                  <Copy fontType="Body2">
                    Well done! you managed to save {} from last months budget.
                    You can save up to 15% more if you target your spending on
                    best value shopping deals :)
                  </Copy>
                  <img
                    className="homepageImg"
                    src={social}
                    alt="socialsetting"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <div className="dashbordDiv4">
                <Col span={24}>
                  {' '}
                  <Copy fontType="H4" weight="bold">
                    Expenditure
                  </Copy>
                </Col>
                <Line
                  width={100}
                  height={30}
                  data={{
                    labels: [
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                      'Saturday',
                      'Sunday'
                    ],
                    datasets: [
                      {
                        label: 'Amount in Rands',
                        data: [120, 190, 300, 50, 20, 30, 200],
                        backgroundColor: 'rgba(230, 233, 250, 0.3)',
                        borderColor: 'rgba(70,78,88,1)',
                        pointBackgroundColor: 'rgba(0,25,77,1)',

                        borderWidth: 1
                      }
                    ]
                  }}
                />
              </div>
            </Row>
          </div>

      </Layout>
    </div>
  )
}
