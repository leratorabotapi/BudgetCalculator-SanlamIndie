import React from 'react'
import Navbar from '../Navbar'
import Topbar from '../Topbar'
import ApplicationContext from '../ApplicationContext/Application';

const Layout = ({children, name}) => {
    return (
        <div className={name}>
            <ApplicationContext.Provider>
            <Navbar />
            <Topbar />
            {children}          
            </ApplicationContext.Provider>
        </div>
    )
}

export default Layout
