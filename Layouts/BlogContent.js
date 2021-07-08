import Link from 'next/link'
import {TiArrowRightThick} from 'react-icons/ti'

const BlogContent = ({title}) => {
    return (
        <>
            <div className="my-5 grid grid-cols-2">
                <div className="w-auto">
                    <Link 
                        href={`/blog/${String(
                            title.split(" ").join("-").toLowerCase()
                        )}`}>
                        <a className="text-green-300 dark:text-green-500">
                            <TiArrowRightThick />
                        </a>
                    </Link>
                </div>
                
                <div>
                    <Link 
                        href={`/blog/${String(
                            title.split(" ").join("-").toLowerCase()
                        )}`}>
                        <a className="font-bold text-green-300 dark:text-green-500">
                            {title}
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BlogContent
