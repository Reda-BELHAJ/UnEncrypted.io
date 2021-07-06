import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Tracks from '../components/Tracks'

const about = () => {
    return (
        <body>
            <div className="App min-h-screen relative bg-white dark:bg-gray-900">
                <Navbar />
                <About />
                <Tracks />
                <Footer />
            </div>
        </body>
    )
}

export default about
