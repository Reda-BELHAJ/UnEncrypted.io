import Tag from './Tag'
import BlogCard from '../Layouts/BlogCard'
import BlogContent from '../Layouts/BlogContent'

const Hero = ({blogs, popBlogs, tags}) => {
    
    return (
        <>
            <div className="p-12 pb-24 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-5">

                    <div className="md:row-span-2 md:col-span-2 lg:row-span-2 lg:col-span-3">
                        <h2 className="font-bold text-green-300 dark:text-green-500">RECENTLY PUBLISHED</h2><br/>
                        {blogs.map((item, id) => (
                            <div key={id}>
                                <BlogCard blog={item}/>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-rows-1 md:grid-rows-3">
                        <div className="mb-5 h-auto">
                            <h2 className="font-bold text-green-300 dark:text-green-500">TOP CATEGORIES</h2><br/>
                            {tags.map((item, id) => (
                                <Tag key={id} link={`/tags/${item[0].toUpperCase()}`} tag={item[0]}/>
                            ))}     
                        </div>
                        <div className="md:row-span-2 mb-5">
                            <h2 className="font-bold text-green-300 dark:text-green-500">POPULAR CONTENT</h2><br/>
                            {popBlogs.map((item, id) => (
                                <BlogContent key={id} title={item.data.title} />
                            ))} 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero