import React from 'react'
import Copy from '../components/Copy'
import './style.css'
import Layout from '../components/Layout'
import { Row, Col } from 'antd'
import Accordion from '../components/Accordion/Accordion'

export default function Budget() {
    return (
        <Layout name="budget">
            <div className="App">
            <Copy fontType="H1" weight="bold">Budget</Copy>
            </div>
            <Accordion/>
        </Layout>
    )
}

