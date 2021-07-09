import Link from 'next/link'
import {TiArrowRightThick} from 'react-icons/ti'

const BlogContent = ({title}) => {
    return (
        <>
            <div className="my-5 space-x-4">
                <div className="inline-block">
                    <Link 
                        href={`/blog/${String(
                            title.split(" ").join("-").toLowerCase()
                        )}`}>
                        <a className="text-green-300 dark:text-green-500">
                            <TiArrowRightThick />
                        </a>
                    </Link>
                </div>
                
                <div className="inline-block">
                    <Link 
                        href={`/blog/${String(
                            title.split(" ").join("-").toLowerCase()
                        )}`}>
                        <a className="font-bold text-gray-700 dark:text-gray-100">
                            {title}
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BlogContent