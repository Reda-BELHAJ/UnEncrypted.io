const BlogLayout = ({children}) => {
    return (
        <>
            <div className="p-12 mx-auto max-w-5xl prose prose-green md:prose-lg lg:prose-xl text-gray-900 dark:text-gray-50">
                {children}
            </div>
        </>
    )
}

export default BlogLayout
