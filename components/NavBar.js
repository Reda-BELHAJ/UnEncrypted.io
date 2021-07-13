import Link from 'next/link';
import { GiGreatPyramid } from "react-icons/gi";
import { SiAboutDotMe, SiTwitter, SiGithub } from "react-icons/si";
import { AiFillTags } from 'react-icons/ai'
import { ImSearch } from 'react-icons/im'
import Toggle from './Toggle'

const Navbar = () => {
    return (
        <header className="fixed w-full border-t-4 bg-gray-100 dark:bg-gray-900 border-green-500 dark:border-green-600 shadow dark:shadow-2 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div>
                    <Link href="/" aria-label="Home">
                        <a className="flex items-center hover:text-green-500 dark:hover:text-green-500 text-gray-800 dark:text-gray-50">
                            <span className="text-xl font-semibold">
                                <GiGreatPyramid />
                            </span>
                            <span className="mx-3 font-semibold text-base md:text-base">
                                UnEncrypted
                            </span>
                        </a>
                    </Link>
                    </div>
                    <div className="flex items-center -mx-2">
                        <Toggle />

                        <Link href="/blog">
                            <a aria-label="Blog" className="flex items-center mx-2 text-gray-800 dark:hover:text-green-500 hover:text-green-500 dark:text-gray-50">
                                <span className="">
                                <ImSearch />
                                </span>
                            </a>
                        </Link>

                        <Link href="/tags">
                            <a aria-label="Tags" className="flex items-center mx-2 text-gray-800 dark:hover:text-green-500 hover:text-green-500 dark:text-gray-50">
                                <span className="text-xl ">
                                <AiFillTags />
                                </span>
                            </a>
                        </Link>


                        <Link href="/about">
                            <a aria-label="About Me" className="flex items-center mx-2 text-base text-gray-800 dark:hover:text-green-500 hover:text-green-500 dark:text-gray-50">
                                <span className="text-xl ">
                                <SiAboutDotMe />
                                </span>
                            </a>
                        </Link>

                        <a 
                            aria-label="Twitter"
                            className="flex items-center mx-2 text-gray-900 dark:hover:text-green-500 hover:text-green-500 dark:text-gray-50"
                            href="https://twitter.com/RedatoB"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="text-lg"><SiTwitter /></span>
                        </a>

                        <a
                            aria-label="Github"
                            className="flex items-center mx-2 text-gray-900 dark:hover:text-green-500 hover:text-green-500 dark:text-gray-50"
                            href="https://github.com/Reda-BELHAJ"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="text-lg"><SiGithub /></span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar