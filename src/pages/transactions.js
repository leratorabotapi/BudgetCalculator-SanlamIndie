import React, { useContext } from 'react'
import ApplicationContext from '../ApplicationContext/Application'
import Copy from '../components/Copy'
import Navbar from '../components/Navbar'

export default function Transactions () {
  return (
        <div className="transactions">
            <Navbar />
            <Copy fontType="H1">Transactions</Copy>
        </div>
  )
}
