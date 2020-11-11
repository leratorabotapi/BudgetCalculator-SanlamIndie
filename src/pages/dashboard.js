import React from 'react'
import Copy from '../components/Copy'

import Layout from '../components/Layout'
export default function Dashboard(dashboard) {
    return (
        <Layout name={dashboard}>
            <Copy fontType="H1">Dashboard</Copy>
        </Layout>
    )
}
