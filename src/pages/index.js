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
import ProfileIcon from '../components/ProfileIcon/ProfileIcon'

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
              <Col span={24}>
                <ProfileIcon/>
              </Col>

              <Col span={24} align="middle">
                <Copy fontType="H3" variant="light">
                  Your current budget
                </Copy>
                <Visacard />
               
              </Col>
            </Row>

            <Row>
              <Col span={24}>

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
                  Look through your budget and all your receipts. Can you find an expense that can be cut? Maybe you could bring your lunch to work twice a week, or set up a carpool with a friend 😀.
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
                  options={{
                    plugins: {
                      datalabels: {
                        display: false,
                      },
                    },
                  }}
                />
              </div>
            </Row>
          </div>

      </Layout>
    </div>
  )
}
