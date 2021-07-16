import Link from 'next/link'
import {TiArrowRightThick} from 'react-icons/ti'
import { motion } from 'framer-motion';

const BlogContent = ({title}) => {

    return (
        <>
            <motion.div 
                whileHover={{scale:1.2, originX:0}}
                transition={{type: 'spring', stiffness:300}} 
                className="mb-5 space-x-3">
                    
                <div 
                    className="inline-block leading-relaxed">
                    <Link 
                        href={`/blog/${String(
                            title.split(" ").join("-").toLowerCase()
                        )}`}>
                        <a 
                            aria-label={title} 
                            className="text-green-300 dark:text-green-500">
                            <TiArrowRightThick />
                        </a>
                    </Link>
                </div>
                
                <div className="inline-block">
                    <Link 
                        href={`/blog/${String(
                            title.split(" ").join("-").toLowerCase()
                        )}`}>
                        <a 
                            aria-label={title} 
                            className="font-bold text-gray-700 dark:text-gray-100">
                            {title}
                        </a>
                    </Link>
                </div>
            </motion.div>
        </>
    )
}

export default BlogContent
