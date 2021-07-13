import Link from 'next/link'
import {TiArrowRightThick} from 'react-icons/ti'

const BlogContent = ({title}) => {
    return (
        <>
            <div className="mb-5 space-x-4">
                <div className="inline-block">
                    <Link 
                        href={`/blog/${String(
                            title.split(" ").join("-").toLowerCase()
                        )}`}>
                        <a aria-label={title} className="text-green-300 dark:text-green-500">
                            <TiArrowRightThick />
                        </a>
                    </Link>
                </div>
                
                <div className="inline-block">
                    <Link 
                        href={`/blog/${String(
                            title.split(" ").join("-").toLowerCase()
                        )}`}>
                        <a aria-label={title} className="font-bold text-gray-700 dark:text-gray-100">
                            {title}
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BlogContent
