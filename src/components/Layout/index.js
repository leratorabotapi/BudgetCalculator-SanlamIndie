import React from 'react'
import Navbar from '../Navbar'
import ApplicationContext from '../ApplicationContext/Application';

const Layout = ({children, name}) => {
    return (
        <div className={name}>
            <ApplicationContext.Provider>
            <Navbar />
            {children} 

            </ApplicationContext.Provider>
        </div>
    )
}

export default Layout
