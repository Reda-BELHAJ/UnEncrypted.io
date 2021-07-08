import Head from "next/head";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Tags from "../Layouts/Tags";
import { getAllTags } from "../Lib/tags";

export default function tags({tagCount}){

    return (
        <>
            <Head>
                <title>UnEncrypted | Tags</title>

                <meta itemProp="name" content="UnEncrypted" />
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