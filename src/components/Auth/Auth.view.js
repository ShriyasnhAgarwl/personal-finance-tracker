function AuthView(props) {
  return (
    <>
      {props.authMethod === "signup" && (
        <>
          <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <h2 className="text-3xl font-bold mb-8">Sign Up</h2>
            <form
              onSubmit={handleSignUp}
              className="bg-white p-8 rounded-lg shadow-lg w-80"
            >
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
              <p className="mt-4 text-center">
                Already have an account?{" "}
                <button className="cursor-pointer bg-red-500  rounded-md p-2 text-white hover:scale-[1.1] duration-300">
                  Sign In
                </button>
              </p>
            </form>
          </div>
        </>
      )}
      {props.authMethod === "signin" && (
        <>
          <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <h2 className="text-3xl font-bold mb-8">Sign In</h2>
            <form
              onSubmit={handleSignIn}
              className="bg-white p-8 rounded-lg shadow-lg w-80"
            >
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Sign In
              </button>
              <p className="mt-4 text-center">
                Don't have an account?{" "}
                <button className="cursor-pointer bg-red-500  rounded-md p-2 text-white hover:scale-[1.1] duration-300">
                  Sign Up
                </button>
              </p>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default AuthView;
