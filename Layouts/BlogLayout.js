import Markdown from 'markdown-to-jsx';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogShare from '../components/BlogShare';
import Tag from '../components/Tag'
import { BsThreeDots } from "react-icons/bs";
import Back from '../components/BackArrow';
import Head from "next/head";

const BlogLayout = ({source, frontMatter}) => {
    return (
        <>
            <Head>
                <title>UnEncrypted</title>

                <meta itemProp="name" content="UnEncrypted" />
            </Head>
            <div className="bg-white dark:bg-gray-900">
                <div className="min-h-screen relative">
                    <Navbar />
                    <div className="py-24">
                        <div className="py-5 max-w-4xl mx-auto rounded-lg shadow-lg bg-white dark:bg-gray-900 px-12">
                            <Back />
                            
                            <img
                                className="object-cover w-full h-72"
                                src={frontMatter.image}
                                alt="Article Image"
                            />

                            <div className="my-4 flex flex-col items-center">
                                <div className="flex justify-around">
                                    {
                                        frontMatter.tags.map((item, id)=> (
                                            <Tag key={id} link="/" tag={item}/>
                                        ))
                                    }
                                </div>
                            </div>

                            <p className="text-5xl flex flex-col items-center">
                                <BsThreeDots />
                            </p>

                            <div className="prose prose-green md:prose-lg lg:prose-xl text-gray-900 dark:text-gray-50">
                                <h1 className="text-gray-900 dark:text-gray-50">
                                    {frontMatter.title}
                                </h1>
                                <div>
                                    <Markdown children={source} />
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <p className="text-5xl pb-2">
                                    <BsThreeDots />
                                </p>
                                <p className="text-2xl pb-2">Thanks for reading!!!</p>
                                <p className="mx-2 font-semibold text-gray-700 dark:text-gray-100">
                                    {frontMatter.author}
                                </p>
                            </div>
                        </div>
                        
                        <BlogShare />
                    </div>
                    
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default BlogLayout
