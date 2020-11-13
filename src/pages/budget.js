import React from 'react'
import Copy from '../components/Copy'
import './style.css'
import Accordion from '../components/Accordion/Accordion'

import Layout from '../components/Layout'
export default function Budget() {
    return (
        <Layout name="budget">
            <div className="App">
            <Copy fontType="H1" weight="bold">Budget</Copy>
            </div>
            <h1>HI</h1>
            <Accordion/>
        </Layout>
    )
}
