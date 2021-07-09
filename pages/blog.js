import Head from "next/head";
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'
import ListPosts from '../Layouts/ListPosts'
import { getAllBlogPosts } from "../Lib/mdx";

export default function blog({blogs}){
    return (
        <>
            <Head>
                <title>UnEncrypted | Blog</title>

                <meta itemProp="name" content="UnEncrypted" />
            </Head>
            <div className="bg-white dark:bg-gray-900">
                <div className="min-h-screen relative">
                    <Navbar />
                    <ListPosts title="All Posts" blogs={blogs}/>
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