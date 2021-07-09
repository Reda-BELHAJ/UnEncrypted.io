import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
    const variants = {
        hidden: {
            scale: .8,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: .4
            }
        },
    }
    return (
        <>
            <div className="pt-24 px-12 mx-auto max-w-7xl">
                <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                    <h1 className="mb-8 text-4xl font-bold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight dark:text-gray-50">
                    <motion.div initial="hidden" animate="visible" variants={variants}>
                        <span>Decide</span>{" "}
                        <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-300 to-green-600 lg:inline">
                            Learn
                        </span>{" "}
                        <span>Share 🔗</span>
                    </motion.div>
                    

                    </h1>

                    <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24 dark:text-gray-400">
                        👋 Hey There, I&apos;m 
                        <Link href="/about">
                            <a className="font-bold hover:text-green-500">
                                {" "}Reda BELHAJ {" "}
                            </a>
                        </Link>
                        a third year Computer Science Student at the International University of Rabat. 
                        Welcome to my corner of the internet. I&apos;m glad you&apos;re here!
                    </p>
                </div>
                <div className="border-t border-green-300 dark:border-green-500 mb-1" />
            </div>
            
        </>
    )
}

export default Header
