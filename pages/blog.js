import Head from "next/head";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Tags from "../Layouts/Tags";
import { getAllTags } from "../Lib/tags";

export default function blog({tagCount}){
    return (
        <>
            <Head>
                <title>UnEncrypted</title>

                <meta itemProp="name" content="UnEncrypted" />
            </Head>
            <div className="bg-white dark:bg-gray-900">
                <div className="min-h-screen relative">
                    <Navbar />
                    
                    <Footer />
                </div>
            </div>
        </>
    )
}