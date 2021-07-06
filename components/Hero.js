import Tag from './Tag'

const Hero = () => {
    return (
        <>
            <div className="p-12 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-5">

                    <div className="md:row-span-2 md:col-span-2 lg:row-span-2 lg:col-span-3 rounded">
                        <h2 className="font-bold text-green-300 dark:text-green-500">RECENTLY PUBLISHED</h2><br/>
                        
                    </div>
                    <div className="rounded">
                        <h2 className="font-bold text-green-300 dark:text-green-500">TOP CATEGORIES</h2><br/>
                        <Tag link="/" tag="TryHackMe"/><Tag link="/" tag="Writeup"/>
                    </div>
                    <div className="rounded">
                        <h2 className="font-bold text-green-300 dark:text-green-500">POPULAR CONTENT</h2><br/>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero