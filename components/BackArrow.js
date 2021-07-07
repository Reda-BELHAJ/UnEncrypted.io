import Link from 'next/link'

const Back = () => {
    return (
        <>
            <p className="my-5 text-base md:text-sm text-green-300 dark:text-green-500 font-bold">&lt;
                <Link href="/">
                    <a className="text-base md:text-sm font-bold no-underline hover:underline">
                        BACK TO BLOG
                    </a>
                </Link> 
            </p>
        </>
    )
}

export default Back
