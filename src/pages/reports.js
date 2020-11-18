import React from 'react'
import './style.css'
import Copy from '../components/Copy'
import Layout from '../components/layout/Layout'
import Content from '../components/Content'
import './style.css'
import {  Row } from 'antd'
import 'antd/dist/antd.css'

export default function Reports() {
    return (
        <Layout>
            <Content />
            <div className="App">
            <Row className="title">
            <Copy fontType="H1" weight="bold">Reports</Copy>
            </Row>
            </div>
            </Layout>
    )
}
