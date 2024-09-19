/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Signup() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image/Video Section, completely hidden on mobile */}
      <div className="hidden lg:block w-1/2 h-full bg-red-500">
        {/* Optional: Add an image or video here */}
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/assets/vitar-logo.png" // Ensure the logo path is correct
              alt="Vitar Logo"
              width={200}
              height={80}
              priority
            />
          </div>

          {/* Signup Form */}
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Create Your Account
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-red-500"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-red-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-red-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-red-500"
                placeholder="Confirm your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="text-center text-gray-600 text-sm mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-red-600 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
