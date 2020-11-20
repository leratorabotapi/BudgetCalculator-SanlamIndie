import React, { useState } from 'react'
import './style.css'
import Copy from '../components/Copy'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import Layout from '../components/layout/Layout'
import Content from '../components/Content'
import { Modal } from '@indiefin/galaxy-modal'
import { Button } from '@indiefin/galaxy-button'

export default function Settings () {
  const [isOpen, openCloseModal] = useState(false)

  const handleModalOpenClick = () => {
    openCloseModal(!isOpen)
  }

  const handleClose = () => {
    console.info('handleClose in Story')
    openCloseModal(false)
  }

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
              <Copy
                fontType="H4"
                weight="bold"
                style={{ paddingBottom: '10px' }}
              >
                Notifications
              </Copy>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <input
                    type="checkbox"
                    id="unseen"
                    name="unseen"
                    value="Unseen"
                  />
                  <label htmlFor="unseen"> Unseen Transactions</label>
                  <br />
                  <input
                    type="checkbox"
                    id="updates"
                    name="updates"
                    value="updates"
                  />
                  <label htmlFor="updates"> Account Updates</label>
                </Col>
                <Col span={8}>
                  <input
                    type="checkbox"
                    id="unseen"
                    name="unseen"
                    value="Unseen"
                    checked
                  />
                  <label htmlFor="unseen"> Tips and Advice</label>
                  <br />
                  <input
                    type="checkbox"
                    id="updates"
                    name="updates"
                    value="updates"
                  />
                  <label htmlFor="updates"> Uncategorised Transactions</label>
                </Col>
                <Col span={8}>
                  <input
                    type="checkbox"
                    id="unseen"
                    name="unseen"
                    value="Unseen"
                    checked
                  />
                  <label htmlFor="unseen"> General</label>
                  <br />
                  <input
                    type="checkbox"
                    id="updates"
                    name="updates"
                    value="updates"
                  />
                  <label htmlFor="updates"> Report Updates</label>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24} className="settings-block">
            <div className="settings-block-content">
              <Copy fontType="H4" weight="bold">
                Security
              </Copy>
              <Row>
                <Col span={4}>
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
                    ID Verification
                  </Copy>
                </Col>
                <Col span={18}>
                  <Copy fontType="body3" weight="light">
                    *******************
                  </Copy>
                  <Copy fontType="body3" weight="light">
                    Yes
                  </Copy>
                  <Copy fontType="body3" weight="light">
                    Yes
                  </Copy>
                  <Copy fontType="body3" weight="light">
                    Yes
                  </Copy>
                </Col>
                <Col
                  span={2}
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    top: '70px'
                  }}
                >
                  <Button
                    data-qa-opened={isOpen}
                    data-qa="base-modal--opener"
                    handleClick={handleModalOpenClick}
                  >
                    Change
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24} className="settings-block">
            <div className="settings-block-content">
              <Copy fontType="H4" weight="bold" style={{ padding: '10px' }}>
                Profile
              </Copy>
              <Row>
                <Col span={4}>
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
                </Col>
                <Col span={18}>
                  <Copy fontType="body3" weight="light">
                    lethabo.M@gmail.com
                  </Copy>
                  <Copy fontType="body3" weight="light">
                    Lethabo
                  </Copy>
                  <Copy fontType="body3" weight="light">
                    Moeketsi
                  </Copy>
                  <Copy fontType="body3" weight="light">
                    123 Street Name, City, Province, Country
                  </Copy>
                </Col>
                <Col
                  span={2}
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    top: '70px'
                  }}
                >
                  <a>Change</a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <div>
          {/* <Modal isOpen={isOpen} handleClose={handleClose} shouldTransitionOut>
            <Copy fontType="h4" weight="bold">
              Are you sure?
            </Copy>
            <Copy fontType="body4">
              This will remove this person and their funeral cover from your
              policy
            </Copy>
            <hr />
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <Button handleClick={handleClose}>Save Changes</Button>
            <Button handleClick={handleClose} kind="outline">
              Cancel
            </Button>
          </Modal> */}
        </div>
      </div>
    </Layout>
  )
}
