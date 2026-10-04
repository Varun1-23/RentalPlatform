function DistrictPage () {
    const districts = [
        {id: 1, state:"Kerala", name: "Tvm"},
        {id: 2, state:"Kerala", name: "malappuram"},
        {id: 3, state:"Kerala", name: "kochi"}
    ]
    return (
        <>
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
                Manage Districts
            </h2>

            <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
                <table className="w-full text-left border-collapse text-sm text-gray-600">
                    <thead className="bg-gray-50 text-xs uppercase font-semibold text-gray-500 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3">No.</th>
                            <th className="px-6 py-3">State</th>
                            <th className="px-6 py-3">District</th>
                            <th className="px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>

                    {/* body */}
                    <tbody className="divide-y divide-gray-200">
                        {districts.map((district) => (
                            <tr key={district.id} className="hover:bg-gray-50 transition">
                                <td className="px-6 py-4 font-medium text-gray-900">{district.id}</td>
                                <td className="px-6 py-4">{district.state}</td>
                                <td className="px-6 py-4">{district.name}</td>
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

export default DistrictPage;