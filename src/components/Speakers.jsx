const Speakers = (props) => {
    return (
        <div id="speakers" className="Speakers">
            <h2 className="text-4xl font-extrabold dark:text-white">
                Contributors
            </h2>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.speakers &&
                            props.speakers.map((val, key) => {
                                return (
                                    <tr
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                        key={key}
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {val}
                                        </th>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Speakers
