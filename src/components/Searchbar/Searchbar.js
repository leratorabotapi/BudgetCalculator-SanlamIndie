import React from 'react'
import './style.css'


function Searchbar(props) {
  const {variant = "primary", children, ...rest} = props
  return (
      <input placeholder=" Label" className={`input ${variant}`}{...rest}>
        {children}
      </input> 
  )
}

export default Searchbar
