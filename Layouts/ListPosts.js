import {useState} from 'react'

const ListPosts = ({blogs}) => {
    const [searchValue, setSearchValue] = useState('')
    
    return (
        <div className="pt-24 px-12 mx-auto">
            <div className="relative max-w-lg">
                <input
                    aria-label="Search articles"
                    type="text"
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search articles"
                    className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
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
        </div>
    )
}

export default ListPosts
