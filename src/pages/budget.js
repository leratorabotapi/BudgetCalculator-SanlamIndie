import React from 'react'
import Copy from '../components/Copy'
import Navbar from '../components/Navbar';

export default function Budget() {
    return (
        <div className="budget">
            <Navbar />
            <Copy fontType="H1">Budget</Copy>
        </div>
    )
}
