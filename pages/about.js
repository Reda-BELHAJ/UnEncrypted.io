import Footer from '../components/Footer'
import Navbar from '../components/NavBar'
import About from '../components/About'
import Tracks from '../components/Tracks'
import Head from "next/head";

const about = () => {
    return (
        <>
            <Head>
                <title>UnEncrypted | About me</title>
                <meta itemProp="name" content="UnEncrypted" />
            </Head>
            <div className="min-h-screen relative bg-white dark:bg-gray-900">
                <Navbar />
                <About />
                <Tracks />
                <Footer />
            </div>
        </>
    )
}

export default about
