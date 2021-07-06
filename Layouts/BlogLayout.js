import Markdown from 'markdown-to-jsx';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BlogLayout = ({source, frontMatter}) => {
    return (
        <>
            <div className="bg-white dark:bg-gray-900">
                <div className="App min-h-screen relative">
                    <Navbar />
                    <div className="px-12 py-24 mx-auto max-w-5xl prose prose-green md:prose-lg lg:prose-xl text-gray-900 dark:text-gray-50">
                        <h1>
                            {frontMatter.title}
                        </h1>
                        <div>
                            <Markdown children={source} />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default BlogLayout
