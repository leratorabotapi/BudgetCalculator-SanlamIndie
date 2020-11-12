import React from 'react'
import './style.css'
import Copy from "../Copy/index"

function Card(props) {
    const {variant = "primary", children, ...rest} = props
    return (
        <div className={`card ${variant}`}{...rest}>
            <Copy fontType='Body1'>Cash Flow</Copy> 
            <Copy fontType='Body4'>
            <div className="right">
            Money Out <br/>
            Money In
            </div>    
            <div className="left">
            R1500 <br/>
            R6000 
            </div>
            </Copy>      
        </div>
    )
}

export default Card
