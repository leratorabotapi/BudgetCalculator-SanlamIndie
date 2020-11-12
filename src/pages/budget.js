import React from 'react'
import Copy from '../components/Copy'
import './style.css'

import Layout from '../components/Layout'
export default function Budget() {
    return (
        <Layout name="budget">
            <div className="App">
            <Copy fontType="H1">Budget</Copy>
            </div>
        </Layout>
    )
}
