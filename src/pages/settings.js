import React from 'react'
import './style.css'
import Copy from '../components/Copy'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import Layout from '../components/layout/Layout'
import Content from '../components/Content'

export default function Settings () {
  return (
    <Layout>
      <Content />
      <div className="App">
        <Row className="title">
          <Copy fontType="H1" weight="bold">
            Settings
          </Copy>
        </Row>
        <Row>
          <Col span={24} className="settings-block">
            <div className="settings-block-content">
              <Copy fontType="H4" weight="bold" style={{ paddingBottom: '10px' }}>
                Notifications
              </Copy>
                <input type="checkbox" id="unseen" name="unseen" value="Unseen" />
                <label htmlFor="unseen"> Unseen Transactions</label>
                <br />
                <input type="checkbox" id="updates" name="updates" value="updates" />
                <label htmlFor="updates"> Account Updates</label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24} className="settings-block">
            <div className="settings-block-content">
              <Copy fontType="H4" weight="bold">
                Security
              </Copy>
              <Copy fontType="body3" weight="light">
                Password
              </Copy>
              <Copy fontType="body3" weight="light">
                FICA Documents
              </Copy>
              <Copy fontType="body3" weight="light">
                Lock App
              </Copy>
              <Copy fontType="body3" weight="light">
                ID Verify
              </Copy>
              <a >Change</a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24} className="settings-block">
            <div className="settings-block-content">
              <Copy fontType="H4" weight="bold">
                Profile
              </Copy>
              <Copy fontType="body3" weight="light">
                Email
              </Copy>
              <Copy fontType="body3" weight="light">
                Name
              </Copy>
              <Copy fontType="body3" weight="light">
                Surname
              </Copy>
              <Copy fontType="body3" weight="light">
                Address
              </Copy>
              <a>Change</a>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}
