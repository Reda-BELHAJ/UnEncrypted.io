import Table from './Table'
import {books} from '../Data/informationAboutMe'

const Books = () => {
    return (
        <>
            <div>
                <div className="pb-20 px-10 mx-auto max-w-7xl">
                    <div className="pt-6 pb-8 space-y-2 md:space-y-5">
                            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                                My Favorite Movies
                            </h1>
                    </div>
                    <div className="border-t border-green-300 dark:border-green-500">
                        <div className="pt-8 text-gray-900 dark:text-gray-50 max-w-none xl:col-span-2 text-justify">
                            Curious what my 10 favorite movies all time.
                            <Table information={books} dir="Director"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Books