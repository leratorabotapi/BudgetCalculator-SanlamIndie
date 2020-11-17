import React from 'react'
import { Collapse, Row, Col } from 'antd';
import './style.css'

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const contentStyle = {
    textAlign: 'center',
  };

function Accordion() {
    return (
        <div className="container">
            <Collapse accordion>
                <Panel header="Food" key="1" style={contentStyle}>
                    <Row>
                        <Col span={12}>KFC Cape Town(Card 6006)</Col> 
                        <Col span={6}>03 Nov 2020</Col> 
                        <Col span={6}>R50</Col>
                    </Row>
                    <hr className="unerline"/>
                    <Row>
                        <Col span={12}>Roccomamas(Card 6006)</Col> 
                        <Col span={6}>01 Nov 2020</Col> 
                        <Col span={6}>R100</Col>
                    </Row>
                    <hr className="unerline"/>
                    <Row>
                        <Col span={12}>Roccomamas(Card 6006)</Col> 
                        <Col span={6}>01 Nov 2020</Col> 
                        <Col span={6}>R100</Col>
                    </Row> 
                    <hr className="unerline"/>  
                    <Row>
                        <Col span={12}>KFC Cape Town(Card 6006)</Col> 
                        <Col span={6}>01 Nov 2020</Col> 
                        <Col span={6}>R50</Col>
                    </Row> 
                </Panel>
                <Panel header="Communication" key="2">
                    <Row>
                        <Col span={12}>Telkom(Card 6006)</Col> 
                        <Col span={6}>03 Nov 2020</Col> 
                        <Col span={6}>R350</Col>
                    </Row>
                    <hr className="unerline"/>
                    <Row>
                        <Col span={12}>Vodacom(Card 6006)</Col> 
                        <Col span={6}>01 Nov 2020</Col> 
                        <Col span={6}>R100</Col>
                    </Row>
                </Panel>
                <Panel header="Medical" key="3">
                    <Row>
                        <Col span={12}>Mellomed Hospital Bellville(Card 6006)</Col> 
                        <Col span={6}>03 Nov 2020</Col> 
                        <Col span={6}>R450</Col>
                    </Row>
                </Panel>
            </Collapse>
        </div>
    )
}

export default Accordion
