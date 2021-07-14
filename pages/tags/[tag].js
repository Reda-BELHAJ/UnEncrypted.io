import Head from "next/head";
import Footer from '../../components/Footer'
import Navbar from '../../components/NavBar'
import ListPosts from '../../Layouts/ListPosts'
import { getTags } from "../../Lib/tags";
import { getAllBlogPosts } from "../../Lib/mdx";
import Helmet from "../../components/Helmet";

export default function Tag({ blogs, tag }) {
    const title = tag.charAt(0) + tag.slice(1).toLowerCase()

    blogs = blogs.filter(
        blog => blog.data.tags.includes(title)
    )
    
    return (
      <>
        <Head>
            <title>UnEncrypted | {title}</title>
            <meta itemProp="name" content="UnEncrypted" />
            <meta name="description" content="UnEncrypted is a personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Helmet 
                title= {`UnEncrypted | ${title}`}
                description= "UnEncrypted is a personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js." 
                imageURL= "https://unencrypted.vercel.app/images/Meta/UnEncrypted.jpg"
                imageALT= "https://unencrypted.vercel.app/images/Meta/UnEncrypted.jpg"
                url ={`https://unencrypted.vercel.app/${tag}`} />
        </Head>
        <div className="bg-white dark:bg-gray-900">
            <div className="min-h-screen relative">
                <Navbar />
                <ListPosts title={title} blogs={blogs} />
                <Footer />
            </div>
        </div>
      </>
    )
}

export async function getStaticPaths() {
    const tags = await getTags();
  
    return {
      paths: Object.keys(tags).map((tag) => ({
        params: {
          tag,
        },
      })),
      fallback: false,
    }
}
  
export async function getStaticProps({params}) {
    const allBlogs = getAllBlogPosts();
  
    return {
      props: {
        blogs: allBlogs,
        tag: params.tag,
      },
    };
};