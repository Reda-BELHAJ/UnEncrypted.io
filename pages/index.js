import Head from "next/head";
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import { getAllBlogPosts } from "../Lib/mdx";
import { getAllTags } from "../Lib/tags";

export default function index({blogs, tagCount}){
  var tags = tagCount

  const popBlogs = blogs.slice(0, 5)
  blogs = blogs.slice(0, 2)

  if (tags.length > 5){
    tags = tagCount.slice(0, 5)
  }

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
          <Hero blogs={blogs} popBlogs={popBlogs} tags={tags}/>
          <Footer />
        </div>
      </div>
    </>
    
  )
}

export async function getStaticProps() {
  const allBlogs = getAllBlogPosts();
  const tagCount = await getAllTags();

  return {
    props: {
      blogs: allBlogs,
      tagCount: tagCount,
    },
  };
};