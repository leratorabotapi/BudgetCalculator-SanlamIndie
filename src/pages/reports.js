import React from 'react'
import './style.css'
import Copy from '../components/Copy'
import Layout from '../components/Layout'
import './style.css'

export default function Reports() {
    return (
        <Layout name="budget">
            <div className="App">
            <Copy fontType="H1" weight="bold">Reports</Copy>
            </div>
        </Layout>
    )
}
