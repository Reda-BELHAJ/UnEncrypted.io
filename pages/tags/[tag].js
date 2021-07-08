import Head from "next/head";
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import ListPosts from '../../Layouts/ListPosts'
import { getTags } from "../../Lib/tags";
import { getAllBlogPosts } from "../../Lib/mdx";

export default function Tag({ blogs, tag }) {
    const title = tag.charAt(0) + tag.slice(1).toLowerCase()

    blogs = blogs.filter(
        blog => blog.data.tags.includes(title)
    )
    
    return (
      <>
        <Head>
            <title>UnEncrypted | Tag</title>

            <meta itemProp="name" content="UnEncrypted" />
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