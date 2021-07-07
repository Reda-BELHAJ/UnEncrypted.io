import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

function BlogCard({ blog }) {
    return (
        <>
            <div className="py-3 md:mr-10 flex flex-col items-start rounded">
                <h2 className="sm:text-2xl text-xl title-font font-bold text-gray-700 mt-4 mb-4 dark:text-gray-100 ">
                    {blog.data.title}
                </h2>
                <p className="text-justify leading-relaxed mb-3 text-gray-800 dark:text-gray-200">
                    {blog.data.summary}..
                </p>
                <div className="flex items-center flex-wrap pb-2 border-b-2 border-green-300 mt-auto w-full justify-between dark:border-green-500">
                    <Link
                        href={`/blog/${String(
                            blog.data.title.split(" ").join("-").toLowerCase()
                        )}`}
                    >
                    <a className="text-green-300 dark:text-green-500 inline-flex items-center">
                        Learn More{" "}
                        <span className="pl-1">
                            <AiOutlineArrowRight />
                        </span>
                    </a>
                    </Link>
                    <a className="inline-flex items-center">
                        <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-sm text-green-300 dark:text-green-500">
                                {blog.data.author}
                            </span>
                            <span className="text-gray-900 text-xs tracking-widest mt-0.5 dark:text-green-500">
                                {blog.readTime.text}
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default BlogCard;