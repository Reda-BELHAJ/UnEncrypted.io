import Link from 'next/link'
import {TiArrowRightThick} from 'react-icons/ti'
import { motion } from 'framer-motion';

const BlogContent = ({title}) => {

    return (
        <>
            <motion.div 
                whileHover={{scale:1.2, originX:0}}
                transition={{type: 'spring', stiffness:300}} 
                className="mb-5 grid grid-cols-7">
                    
                <div 
                    className="inline-block leading-relaxed">
                    <Link 
                        href={`/blog/${String(
                            title.split(" ").join("-").toLowerCase()
                        )}`}>
                        <a 
                            aria-label={title} 
                            className="text-green-300 dark:text-green-500">
                            <TiArrowRightThick className="inline-block align-middle" />
                        </a>
                    </Link>
                </div>
                
                <div className="col-span-6 inline-block">
                    <Link 
                        href={`/blog/${String(
                            title.split(" ").join("-").toLowerCase()
                        )}`}>
                        <a 
                            aria-label={title} 
                            className="font-semibold text-gray-700 dark:text-gray-100">
                            {title}
                        </a>
                    </Link>
                </div>
            </motion.div>
        </>
    )
}

export default BlogContent
