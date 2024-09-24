/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Login() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image/Video Section, completely hidden on mobile */}
      <div className="hidden lg:block w-1/2 h-full relative">
        <Image
          src="/assets/login-banner.jpg" // Ensure the image path is correct
          alt="Vitar Logo"
          layout="fill" // This ensures the image covers the entire container
          objectFit="cover" // Ensures the image covers the area without being distorted
          priority
        />
      </div>

      {/* Right Side - Login Form */}
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

          {/* Login Form */}
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Login to Your Account
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="companyCode"
              >
                Company Code
              </label>
              <input
                type="text"
                id="companyCode"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-red-500"
                placeholder="Enter your company code"
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
            <div className="mb-6">
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
            <div className="flex items-center justify-between">
              <a
                href="/dashboard"
                className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Login
              </a>
              <a href="#" className="text-sm text-red-600 hover:underline">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
