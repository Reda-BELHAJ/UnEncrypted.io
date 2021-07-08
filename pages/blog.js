import Head from "next/head";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ListPosts from '../Layouts/ListPosts'
import { getAllBlogPosts } from "../Lib/mdx";

export default function blog({allBlogs}){
    return (
        <>
            <Head>
                <title>UnEncrypted</title>

                <meta itemProp="name" content="UnEncrypted" />
            </Head>
            <div className="bg-white dark:bg-gray-900">
                <div className="min-h-screen relative">
                    <Navbar />
                    <ListPosts blogs={allBlogs}/>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const allBlogs = getAllBlogPosts();
  
    return {
      props: {
        blogs: allBlogs,
      },
    };
  };