import {useState} from 'react'
import BlogCard from './BlogCard'

const ListPosts = ({title, blogs}) => {
    const [searchValue, setSearchValue] = useState('')
    const filteredBlogPosts = blogs.filter((frontMatter) => {
        const searchContent = frontMatter.data.title + frontMatter.data.summary + frontMatter.data.tags.join(' ')
        return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })
    
    return (
        <div className="py-24 px-12 m-auto max-w-4xl space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                {title}
            </h1>
            
            <div className="relative max-w-lg">
                <input
                    aria-label="Search articles"
                    type="text"
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search articles"
                    className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500 dark:bg-gray-800 dark:text-gray-100"
                />
                <svg
                    className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
            
            {filteredBlogPosts.map((item, id) => (
                <div key={id}>
                    <BlogCard blog={item}/>
                </div>
            ))}

            <div className="sm:text-2xl text-xl title-font font-bold text-xl py-3 md:mr-10 flex flex-col items-start rounded text-gray-900 dark:text-gray-50">
                {!filteredBlogPosts.length && 'No posts found.'}
            </div>

            
            <div className="w-full text-right">
                {filteredBlogPosts.length} Articles
            </div>

        </div>
    )
}

export default ListPosts
