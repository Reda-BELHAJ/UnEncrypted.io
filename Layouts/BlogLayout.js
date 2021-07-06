import Markdown from 'markdown-to-jsx';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogShare from '../components/BlogShare';

const BlogLayout = ({source, frontMatter}) => {
    return (
        <>
            <div className="bg-white dark:bg-gray-900">
                <div className="min-h-screen relative">
                    <Navbar />
                    <div className="py-24">
                        <div className="py-5 max-w-4xl mx-auto rounded-lg shadow-lg bg-white dark:bg-gray-900 px-12 prose prose-green md:prose-lg lg:prose-xl text-gray-900 dark:text-gray-50">
                            <h1>
                                {frontMatter.title}
                            </h1>
                            <div>
                                <Markdown children={source} />
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
