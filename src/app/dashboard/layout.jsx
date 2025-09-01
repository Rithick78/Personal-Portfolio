import React from 'react'
import DashboardProvider from './provider'
import Footer from './components/Footer'


function DashboardLayout({ children }) {
    return (
        <DashboardProvider>
            <div>
                {children}
            </div>
            <Footer/>
        </DashboardProvider>

    )
}

export default DashboardLayout