import Link from 'next/link';

const NotFound = () => {
    return (
        <>
            <div>
                <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg pb-8">
                        <div className="border-t border-gray-200 dark:border-gray-700 text-center pt-8">
                            <h1 className="text-9xl font-bold text-green-300 dark:text-green-500">404</h1>
                            <h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
                            <p className="text-2xl pb-8 px-12 font-medium">
                                Oops! The page you are looking for does not exist. It might have been moved or deleted.
                            </p>
                            <Link href="/">
                                <a className="bg-gradient-to-r from-green-300 to-green-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                                    HOME
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound
