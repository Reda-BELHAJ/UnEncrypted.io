import Head from "next/head";
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'
import NotFound from '../components/NotFound'

const FourOFour = () => {
    return (
        <>
            <Head>
                <title>UnEncrypted | 404</title>
                <meta itemProp="name" content="UnEncrypted" />
            </Head>
            <div className="min-h-screen relative bg-white dark:bg-gray-900">
                <Navbar />
                <NotFound />
                <Footer />
            </div>
        </>
    )
}

export default FourOFour