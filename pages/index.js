import Head from "next/head";
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const index = () => {
  return (
    <>
      <Head>
        <title>UnEncrypted</title>

        <meta itemProp="name" content="UnEncrypted" />
      </Head>
      <div className="bg-white dark:bg-gray-900">
        <div className="min-h-screen relative">
          <Navbar />
          <Header />
          <Hero />
          <Footer />
        </div>
      </div>
    </>
    
  )
}

export default index
