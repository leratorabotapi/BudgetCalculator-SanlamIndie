import React from 'react'
import './style.css'
import Copy from '../components/Copy'
import './style.css'
import {  Row } from 'antd'
import 'antd/dist/antd.css'
import Layout from '../components/layout/Layout'
import Content from '../components/Content'

export default function Settings() {
    return (
        <Layout>
            <Content/>
            <div className="App">
            <Row className="title">
            <Copy fontType="H1" weight="bold">Settings</Copy>
            </Row>
            </div>
        </Layout>
    )
}
