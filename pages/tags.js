import Head from "next/head";
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'
import Tags from "../Layouts/Tags";
import { getAllTags } from "../Lib/tags";
import Helmet from "../components/Helmet";

export default function tags({tagCount}){

    return (
        <>
            <Head>
                <title>UnEncrypted | Tags</title>
                <meta itemProp="name" content="UnEncrypted" />
                <meta name="description" content="UnEncrypted is a personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js." />
                <Helmet 
                    title= "UnEncrypted | Tags" 
                    description= "UnEncrypted is a personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js." 
                    imageURL= "/images/Meta/UnEncrypted.jpg"
                    imageALT= "/images/Meta/UnEncrypted.jpg" />
            </Head>
            <div className="bg-white dark:bg-gray-900">
                <div className="min-h-screen relative">
                    <Navbar />
                    <Tags tags={tagCount} />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const tagCount = await getAllTags();

    return {
      props: {
        tagCount: tagCount,
      },
    };
};