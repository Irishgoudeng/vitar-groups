"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/assets/vitar-logo.png";
import { usePathname } from "next/navigation";
const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const [isDataDropdownOpen, setIsDataDropdownOpen] = useState(false);

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDataDropdown = () => {
    setIsDataDropdownOpen(!isDataDropdownOpen);
  };

  // Function to toggle Profile dropdown
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-white">
      {/* Burger Menu Icon for mobile */}
      <div className="lg:hidden p-4 bg-white">
        <button onClick={toggleSidebar} className="text-gray-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`lg:block ${isSidebarOpen ? "block" : "hidden"}`}>
        <div className="w-64 min-h-screen bg-white text-gray-700 p-4">
          {/* Logo */}
          <div className="mb-6 pl-6">
            <Image src={logo} alt="Dashboard Logo" width={150} height={50} />
          </div>

          {/* Menu Section */}
          <h2 className="text-lg font-semibold mb-2 text-red-500">Menu</h2>
          <ul className="mb-6">
            <li>
              <a
                href="/dashboard"
                className={`block py-2 px-4 rounded hover:bg-red-400 ${
                  pathname === "/dashboard" ? "bg-red-400 text-white" : ""
                }`}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/dashboard/calendar"
                className={`block py-2 px-4 rounded hover:bg-red-400 ${
                  pathname === "/dashboard/calendar"
                    ? "bg-red-400 text-white"
                    : ""
                }`}
              >
                Calendar
              </a>
            </li>
            <li>
              <a
                href="/dashboard/users"
                className={`block py-2 px-4 rounded hover:bg-red-400 ${
                  pathname.includes("/dashboard/users")
                    ? "bg-red-400 text-white"
                    : ""
                }`}
              >
                Users
              </a>
            </li>
            <li>
              <a
                href="/dashboard/customers"
                className={`block py-2 px-4 rounded hover:bg-red-400 ${
                  pathname.includes("/dashboard/customers")
                    ? "bg-red-400 text-white"
                    : ""
                }`}
              >
                Customers
              </a>
            </li>
            <li>
              <a
                href="/jobs"
                className={`block py-2 px-4 rounded hover:bg-red-400 ${
                  pathname === "/jobs" ? "bg-red-400 text-white" : ""
                }`}
              >
                Jobs
              </a>
            </li>
          </ul>

          {/* Data Section */}
          <h2 className="text-lg font-semibold text-red-500 mb-2">Data</h2>
          <ul>
            <li className="mb-4">
              <button
                onClick={toggleDataDropdown}
                className="w-full flex justify-between items-center py-2 px-4 rounded hover:bg-gray-200"
              >
                <span>Calibration Data</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isDataDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {isDataDropdownOpen && (
                <ul className="ml-4 mt-2">
                  <li>
                    <a
                      href="/dashboard/volumetric"
                      className={`block py-2 px-4 text-sm rounded hover:bg-red-400 ${
                        pathname === "/dashboard/volumetric"
                          ? "bg-red-400 text-white"
                          : ""
                      }`}
                    >
                      Calibration Data (Volumetric)
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dashboard/glassware"
                      className={`block py-2 px-4 text-sm rounded hover:bg-red-400 ${
                        pathname === "/dashboard/glassware"
                          ? "bg-red-400 text-white"
                          : ""
                      }`}
                    >
                      Calibration Data (Volumetric Glassware)
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dashboard/uncertainty"
                      className={`block py-2 px-4 text-sm rounded hover:bg-red-400 ${
                        pathname === "/dashboard/uncertainty"
                          ? "bg-red-400 text-white"
                          : ""
                      }`}
                    >
                      Uncertainty Calculation (Volumetric Glassware)
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dashboard/statistics"
                      className={`block py-2 px-4 text-sm rounded hover:bg-red-400 ${
                        pathname === "/dashboard/statistics"
                          ? "bg-red-400 text-white"
                          : ""
                      }`}
                    >
                      CERTIFICATE OF CALIBRATION
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          {/* Profile Section */}
          <h2 className="text-lg font-semibold text-red-500 mb-2">Profile</h2>
          <ul>
            <li className="mb-4">
              <button
                onClick={toggleProfileDropdown}
                className="w-full flex justify-between items-center py-2 px-4 rounded hover:bg-gray-200"
              >
                <span>Profile Options</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isProfileDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {isProfileDropdownOpen && (
                <ul className="ml-4 mt-2">
                  <li>
                    <a
                      href="/dashboard/profile"
                      className={`block py-2 px-4 text-sm rounded hover:bg-red-400 ${
                        pathname === "/dashboard/profile"
                          ? "bg-red-400 text-white"
                          : ""
                      }`}
                    >
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dashboard/settings"
                      className={`block py-2 px-4 text-sm rounded hover:bg-red-400 ${
                        pathname === "/dashboard/settings"
                          ? "bg-red-400 text-white"
                          : ""
                      }`}
                    >
                      Account Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="/login"
                      className={`block py-2 px-4 text-sm rounded hover:bg-red-400 ${
                        pathname === "/login" ? "bg-red-400 text-white" : ""
                      }`}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
