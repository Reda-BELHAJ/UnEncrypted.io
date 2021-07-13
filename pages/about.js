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
                <Helmet 
                    title= "UnEncrypted | About me" 
                    description= "UnEncrypted is a personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js." 
                    imageURL= "/images/Meta/UnEncrypted.jpg"
                    imageALT="/images/Meta/UnEncrypted.jpg" />
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
