import Head from "next/head";
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { getAllBlogPosts } from "../Lib/mdx";

export default function index({blogs}){
  console.log(blogs)
  return (
    <>
      <Head>
        <title>UnEncrypted</title>

        <meta itemProp="name" content="UnEncrypted" />
      </Head>
      <div className="bg-white dark:bg-gray-900">
        <div className="min-h-screen relative">
          <Navbar />
          <Header />
          <Hero/>
          
          <Footer />
        </div>
      </div>
    </>
    
  )
}

export const getStaticProps = () => {
  const allBlogs = getAllBlogPosts();
  return {
    props: {
      blogs: allBlogs,
    },
  };
};