import React, { useState } from 'react'
import TransactionContext from '../../context/transations'

const Layout = ({ children, initialData }) => {

  const [object, setObject] = useState(initialData || localStorage.getItem('state'))

  const storeObject = (newValue) => {
    setObject(newValue)
    localStorage.setItem('state', object)
  }

  return (
        <TransactionContext.Provider value={{ hello: object, storeObject }}>
            {children}
        </TransactionContext.Provider>
  )
}
export default Layout
