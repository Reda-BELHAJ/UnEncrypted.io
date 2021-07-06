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

        <meta itemprop="name" content="UnEncrypted" />
      </Head>
      <body>
        <div className="App min-h-screen relative bg-white dark:bg-gray-900">
          <Navbar />
          <Header />
          <Hero />
          <Footer />
        </div>
      </body>
    </>
    
  )
}

export default index
