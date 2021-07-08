import Head from "next/head";
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { getAllBlogPosts } from "../Lib/mdx";

export default function index({blogs}){
  let tagCount = {}
  blogs.forEach(
    (blog) => blog.data.tags.forEach(
        (tag) => {
            const tagUpp = tag.toUpperCase()
            if (tagUpp in tagCount){
              tagCount[tagUpp] += 1
            }
            else {
              tagCount[tagUpp] = 1
            }
        }
    )
  )
  console.log(tagCount)
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
          <Hero blogs={blogs}/>
          <Footer />
        </div>
      </div>
    </>
    
  )
}

export const getStaticProps = () => {
  const allBlogs = getAllBlogPosts();

  const catBlogs = allBlogs.filter(
    blog => blog.data.tags.includes("TailwindCss")
  )

  return {
    props: {
      blogs: allBlogs,
    },
  };
};