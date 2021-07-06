import Link from 'next/link';

const Tag = ({tag, link}) => {
    return (
        <>
            <Link href={link}>
                <a 
                    className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-300 dark:bg-green-500 text-grey-300 rounded-full m-1">
                    {tag}
                </a>
            </Link>
        </>
    )
}

export default Tag