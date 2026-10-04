function RegisterPage () {
    return (
        <>  

            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
            <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-md"> 
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Create an Account</h2>
                <form className="space-y-4">
                
                {/* name */}
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name: </label>
                <input 
                type="text" 
                name="fullName"
                placeholder="Your Full name here...."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                <div>
                {/* phone number */}
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone number: </label>
                <input type="number" 
                name="phoneNumber"
                placeholder="Your Phone Number here...."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>

                {/* email */}
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Id: </label>
                <input type="email" 
                name="email"
                placeholder="Your Email here...."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>

                {/* password */}
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password: </label>
                <input type="password" 
                name="password"
                placeholder="*******"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>                
                </div>

                <div className="grid grid-cols-3 gap-2">
                {/* state */}
                <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">State:</label>
                <select name="State" id="" className="w-full px-2 py-1 border border-gray-300 rounded-lg text-sm bg-white">
                    <option value="Kerala">Kerala</option>
                    <option value="TamilNadu">TamilNadu</option>
                    <option value="Karnataka">Karnataka</option>
                </select>
                </div>

                {/* district */}
                <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">District:</label>
                <select name="District" id="" className="w-full px-2 py-1 border border-gray-300 rounded-lg text-sm bg-white">
                    <option value="Tvm">Tvm</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Madurai">Madurai</option>
                </select>
                </div>

                {/* city */}
                <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">City:</label>
                <select name="City" id="" className="w-full px-2 py-1 border border-gray-300 rounded-lg text-sm bg-white">
                    <option value="Thampanoor">Thampanoor</option>
                    <option value="EastFort">EastFort</option>
                    <option value="Karamana">Karamana</option>
                </select>
                </div>
                </div>

                {/* role */}
                <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">I am :</label>
                <select name="Role" id="" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white">
                    <option value="Renter">Renter</option>
                    <option value="Buyer">Buyer</option>
                    <option value="Rider">Rider</option>
                </select>
                </div>

                {/* submit */}
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 font-medium text-white py-2.5 rounded-lg transition duration-200 mt-2 cursor-pointer">
                    Submit
                </button>
                </form>
            </div>
            </div>
            
        </>
    )
}

export default RegisterPage;