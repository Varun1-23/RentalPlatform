function LoginPage(){
    return(
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
    <div className="max-w-lg w-full p-8 rounded-xl bg-white shadow-md">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
    <form className="space-y-4">

        {/* email id */}
        <label className="block text-md font-medium text-gray-700 mb-1">Email Id: </label>
        <input 
        type="email" 
        name="emailId"
        placeholder="Email Address..."
        className="w-full px-3 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        {/* password */}
        <label className="block text-md font-medium text-gray-700 mb-1">Password: </label>
        <input 
        type="passsword"
        name="password"
        placeholder="*******"
        className="w-full px-3 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
        type="submit"
        className="w-full py-2.5 text-white font-medium cursor-pointer mt-2 bg-blue-500 hover:bg-blue-600 transition duration-200 rounded-lg"
        >Submit</button>
    </form>
    </div>
    </div>
    </>
    )
}

export default LoginPage;