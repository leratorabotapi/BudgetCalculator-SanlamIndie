import React from 'react'
import './style.css'
import Copy from '../components/Copy'
import Layout from '../components/Layout'
import './style.css'
import {  Row } from 'antd'
import 'antd/dist/antd.css'

export default function Reports() {
    return (
        <Layout name="budget">
            <div className="App">
            <Row className="title">
            <Copy fontType="H1" weight="bold">Reports</Copy>
            </Row>
            </div>
        </Layout>
    )
}
