function StatePage (){

    const states = [
        { id: 1, name: "Kerala"},
        { id: 2, name: "Tamil Nadu"},
        { id: 3, name: "Karnataka"},
    ];


    return (
        <>
            <div className="p-6 max-w-4xl mx-auto">

                {/* title */}
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Manage States
                </h2>

                {/* table container */}
                <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
                    <table className="w-full text-left border-collapse text-sm text-gray-600">

                        {/* header */}

                        <thead className="bg-gray-50 text-xs uppercase font-semibold text-gray-500 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3">No.</th>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>

                        {/* Body */}
                        <tbody className="divide-y divide-gray-200">
                            {states.map((state) => (
                                <tr key={state.id} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 font-medium text-gray-900">{state.id}</td>
                                    <td className="px-6 py-4">{state.name}</td>
                                    <td className="px-6 py-4 text-right space-x-2">
                                        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm cursor-pointer">Edit</button>
                                        <button className="text-red-600 hover:text-red-800 font-medium text-sm cursor-pointer">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>
        </>
    )
}

export default StatePage;