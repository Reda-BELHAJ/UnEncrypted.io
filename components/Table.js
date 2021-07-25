import {FaSlackHash} from 'react-icons/fa'

const Table = ({information, dir}) => {
    return (
        <>
            <div className="overflow-x-auto mt-6 mb-20">
                <table className="table-auto border-collapse w-full">
                    <thead>
                    <tr className="rounded-lg text-sm font-medium text-left" >
                        <th className="px-4 py-2 text-green-300 dark:text-green-500" ><FaSlackHash /></th>
                        <th className="px-4 py-2 text-gray-900 dark:text-gray-50" >Title</th>
                        <th className="px-4 py-2 text-gray-900 dark:text-gray-50" >{dir}</th>
                    </tr>
                    </thead>
                    <tbody className="text-sm font-normal text-gray-900 dark:text-gray-50">
                        {information.name.map((item, id)=> (
                            <tr key={id} className="hover:bg-gray-100 dark:hover:bg-gray-600 border-b border-gray-200 py-10">
                                <td className="px-4 py-4 " >{id + 1}</td>
                                <td className="px-4 py-4">{item}</td>
                                <td className="px-4 py-4">{information.artist[id]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table