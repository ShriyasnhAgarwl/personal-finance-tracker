import React from "react";

function AuthView(props) {
  return (
    <>
      {props.authMethod === "signup" && (
        <div
          className=" relative flex flex-col justify-center items-center h-screen"
          style={{ backgroundImage: "url('../images/authBackground.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <h2 className="text-3xl text-white font-bold mb-8 z-10">Sign Up</h2>
          <form
            onSubmit={props.handleSignUp}
            className="bg-white p-8 rounded-lg shadow-lg z-10"
          >
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                value={props.name}
                onChange={(e) => props.setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-md"
                value={props.email}
                onChange={(e) => props.setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                value={props.phoneNumber}
                onChange={(e) => props.setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Country
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                value={props.country}
                onChange={(e) => props.setCountry(e.target.value)}
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
                value={props.password}
                onChange={(e) => props.setPassword(e.target.value)}
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
              <button
                type="button"
                className="cursor-pointer underline text-black hover:scale-[1.0.5] duration-300"
                onClick={props.toggleAuthMethod}
              >
                Sign In
              </button>
            </p>
          </form>
        </div>
      )}
      {props.authMethod === "signin" && (
        <div
          className="relative flex flex-col justify-center items-center h-screen"
          style={{ backgroundImage: "url('../images/authBackground.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <h2 className="text-3xl text-white font-bold mb-8 z-10">Sign In</h2>
          <form
            onSubmit={props.handleSignIn}
            className="bg-white p-8 rounded-lg shadow-lg z-10"
          >
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-md"
                value={props.email}
                onChange={(e) => props.setEmail(e.target.value)}
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
                value={props.password}
                onChange={(e) => props.setPassword(e.target.value)}
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
              <button
                type="button"
                className="cursor-pointer underline text-black hover:scale-[1.0.5] duration-300"
                onClick={props.toggleAuthMethod}
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>
      )}
    </>
  );
}

export default AuthView;
