import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import About from '../components/About'

const about = () => {
    return (
        <body>
            <div className="App min-h-screen relative bg-white dark:bg-gray-900">
                <Navbar />
                <About />
                <Footer />
            </div>
        </body>
    )
}

export default about
