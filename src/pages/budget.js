import React from 'react'
import Copy from '../components/Copy'
import './style.css'
import Accordion from '../components/Accordion/Accordion'
import {  Row } from 'antd'
import 'antd/dist/antd.css'
import Card from '../components/Card'

import Layout from '../components/Layout'
export default function Budget() {
    return (
        <Layout name="budget">
            <div className="App">

            <Row className="title">  
            <Copy fontType="H1" weight="bold">Budget</Copy>
            </Row>

            <Row>
                <Card variant="xlarge" />
            </Row>

            <Accordion/>

            </div>    
        </Layout>
    )
}
