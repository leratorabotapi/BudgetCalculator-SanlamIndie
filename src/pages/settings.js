import React, { useState, useRef } from 'react'
import './style.css'
import Copy from '../components/Copy'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import Layout from '../components/layout/Layout'
import Content from '../components/Content'
import { Checkbox } from '@indiefin/galaxy-checkbox'
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
      <div className="App Blue">
        <Row className="title">
          <Copy fontType="H1" weight="bold">
            Settings
          </Copy>
        </Row>
        <Row>
          <Col span={24} className="settings-block">
            <div className="settings-block-content">
              <div style={{ marginBottom: '25px' }}>
              <Copy fontType="H4" weight="bold">
                Notifications
              </Copy>
              </div>
              <Row>
                <Col span={8}>
                <Checkbox
                  checked={false}
                  disabled={false}
                  label={<Copy fontType="Body1">Unseen Transactions</Copy>}
                />
                </Col>
                <Col span={8}>
                <Checkbox
                  checked={false}
                  disabled={false}
                  label={<Copy fontType="Body1">Tips and Advise</Copy>}
                />
                </Col>
                <Col span={8}>
                <Checkbox
                  checked={false}
                  disabled={false}
                  label={<Copy fontType="Body1">General</Copy>}
                />
                </Col>
                <Col span={8}>
                <Checkbox
                  checked={false}
                  disabled={false}
                  label={<Copy fontType="Body1">Account Updates</Copy>}
                />
                </Col>
                <Col span={8}>
                <Checkbox
                  checked={false}
                  disabled={false}
                  label={<Copy fontType="Body1">Uncategorised Transactions</Copy>}
                />
                </Col>
                <Col span={8}>
                <Checkbox
                  checked={false}
                  disabled={false}
                  label={<Copy fontType="Body1">Report Updates</Copy>}
                />
                </Col>
                </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24} className="settings-block">
            <div className="settings-block-content">
              <div style={{ marginBottom: '25px' }}>
              <Copy fontType="H4" weight="bold">
                Security
              </Copy>
              </div>

              <Row>
              <Col span={6}>
              <Copy fontType="body3" weight="light">
                Password
              </Copy>
              </Col>
              <Col span={16}><Copy>*******************</Copy></Col>
              <Col span={2}><Button kind="icon" icon="create" /></Col>

              <Col span={6}>
              <Copy fontType="body3" weight="light">
              FICA Documents
              </Copy>
              </Col>
              <Col span={16}><Copy>None</Copy></Col>
              <Col span={2}><Button kind="icon" icon="create" /></Col>
              
              <Col span={6}>
              <Copy fontType="body3" weight="light">
              Lock App
              </Copy>
              </Col>
              <Col span={16}><Copy>Yes</Copy></Col>
              <Col span={2}><Button kind="icon" icon="create" /></Col>
              <Col span={6}>
              <Copy fontType="body3" weight="light">
              ID Verification
              </Copy>
              </Col>
              <Col span={16}><Copy>Yes</Copy></Col>
              <Col span={2}><Button kind="icon" icon="create" /></Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24} className="settings-block">
            <div className="settings-block-content">
            <div style={{ marginBottom: '25px' }}>
              <Copy fontType="H4" weight="bold">
                Profile
              </Copy>
              </div>
              <Row>
              <Col span={6}>
              <Copy fontType="body3" weight="light">
              Email
              </Copy>
              </Col>
              <Col span={16}><Copy>lethabo.M@gmail.com</Copy></Col>
              <Col span={2}><Button kind="icon" icon="create" /></Col>

              <Col span={6}>
              <Copy fontType="body3" weight="light">
              Name              </Copy>
              </Col>
              <Col span={16}><Copy>Lethabo</Copy></Col>
              <Col span={2}><Button kind="icon" icon="create" /></Col>
              
              <Col span={6}>
              <Copy fontType="body3" weight="light">
              Surname
              </Copy>
              </Col>
              <Col span={16}><Copy>Moeketsi</Copy></Col>
              <Col span={2}><Button kind="icon" icon="create" /></Col>
              <Col span={6}>
              <Copy fontType="body3" weight="light">
              Address
              </Copy>
              </Col>
              <Col span={16}><Copy>123 Street Name, City, Province, Country</Copy></Col>
              <Col span={2}><Button kind="icon" icon="create" /></Col>
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
