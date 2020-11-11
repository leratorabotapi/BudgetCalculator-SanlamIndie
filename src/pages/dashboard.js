import React from 'react'
import Copy from '../components/Copy'
import Navbar from '../components/Navbar';

export default function Dashboard() {
    return (
        <div className="dashboard">
            <Navbar />
            <Copy fontType="H1">Dashboard</Copy>
        </div>
    )
}
