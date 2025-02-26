import React from "react";

const Register = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/img2.jpg')" }}
    >
      {/* Header */}
      <div className="w-full bg-red-500 p-5 text-white text-center">
        <h1 className="text-xl font-bold">Young Generation Kapan</h1>
      </div>

      {/* Registration Form */}
      <div className="flex justify-center items-center w-full mt-10">
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-md w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="First Name"
              className="p-2 border rounded w-full"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-2 border rounded w-full"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 border rounded w-full"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="p-2 border rounded w-full"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 border rounded w-full"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white p-3 rounded transition-transform transform hover:scale-105"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-sm">
            Already have an account?{' '}
            <a
              href="login"
              className="text-blue-700 hover:text-white hover:bg-black px-2 py-1 rounded transition-transform transform hover:scale-105"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;