import Head from "next/head";
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import Helmet from "../components/Helmet";
import { getAllBlogPosts } from "../Lib/mdx";
import { getAllTags } from "../Lib/tags";
import useSWR from 'swr';
import fetcher from "../Lib/fetcher";

export default function index({blogs, tagCount}){
  var tags = tagCount

  const slugViews = []

  blogs.map((item) => {
    const slug = item.data.title.split(" ").join("-").toLowerCase()
    const { data } = useSWR(`/api/views/${slug}`, fetcher);
    const views = data?.total;
    slugViews.push({ item, views });
  });

  slugViews.sort(function (a, b) {
    return b.views - a.views;
  });

  const blogsPop = []

  slugViews.map((item) => {
    blogsPop.push(item.item)
  })

  const popBlogs = blogsPop.slice(0, 7)

  blogs = blogs.slice(0, 2)

  if (tags.length > 5){
    tags = tagCount.slice(0, 5)
  }

  return (
    <>
      <Head>
        <html lang="en" />
        <title>UnEncrypted</title>
        <meta itemProp="name" content="UnEncrypted" />
        <meta name="description" content="UnEncrypted is a personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Helmet 
          title= "UnEncrypted" 
          description= "UnEncrypted is a personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js." 
          imageURL= "/images/Meta/UnEncrypted.jpg"
          imageALT= "/images/Meta/UnEncrypted.jpg" />
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