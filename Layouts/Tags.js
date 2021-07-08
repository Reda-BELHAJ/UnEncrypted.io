import Link from 'next/link';

const Tags = ({tags}) => {
    return (
        <div className="pt-24 px-12 mx-auto max-w-7xl">
            <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6">
                <div className="pt-6 pb-8 space-x-2 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:border-r-2 md:px-6">
                        Tags
                    </h1>
                </div>
                <div className="flex flex-wrap max-w-lg">
                    {tags.length === 0 && 'No tags found.'}
                    {tags.map((item, id) => {
                        return (
                        <div key={id} className="mt-2 mb-2 mr-5">
                            <Link href={`/tags/${item[0]}`}>
                                <a className="mr-3 text-sm font-medium text-green-300 dark:text-green-500 uppercase hover:text-green-500 dark:hover:text-green-300">
                                    {item[0]}
                                </a>
                            </Link>

                            <Link href={`/tags/${item[0]}`}>
                                <a className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300">
                                    {`(${item[1]})`}
                                </a>
                            </Link>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className="border-t border-green-300 dark:border-green-500 mb-1" />
        </div>
    )
}

export default Tags
