import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const index = () => {
  return (
    <body>
      <div className="App min-h-screen relative bg-white dark:bg-gray-900">
        <Navbar />
        <Header />
        {/* <Hero /> */}
        <Footer />
      </div>
    </body>
  )
}

export default index
