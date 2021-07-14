import Head from "next/head";
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'
import ListPosts from '../Layouts/ListPosts'
import { getAllBlogPosts } from "../Lib/mdx";
import Helmet from "../components/Helmet";

export default function blog({blogs}){
    return (
        <>
            <Head>
                <title>UnEncrypted | Blog</title>
                <meta itemProp="name" content="UnEncrypted" />
                <meta name="description" content="UnEncrypted is a personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Helmet 
                    title= "UnEncrypted | Blog" 
                    description= "UnEncrypted is a personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js." 
                    imageURL= "/images/Meta/UnEncrypted.jpg"
                    imageALT= "/images/Meta/UnEncrypted.jpg"
                    url ="https://unencrypted.vercel.app/blog" />
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