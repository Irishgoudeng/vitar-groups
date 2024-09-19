"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/assets/vitar-logo.png"; // Replace with the path to your logo image
import { usePathname } from "next/navigation"; // Import usePathname

const Sidebar: React.FC = () => {
  const pathname = usePathname(); // Get the current pathname

  // State to toggle the dropdown visibility for Data
  const [isDataDropdownOpen, setIsDataDropdownOpen] = useState(false);

  // State to toggle the dropdown visibility for Profile
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Function to toggle Data dropdown
  const toggleDataDropdown = () => {
    setIsDataDropdownOpen(!isDataDropdownOpen);
  };

  // Function to toggle Profile dropdown
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
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
            href="/calendar"
            className={`block py-2 px-4 rounded hover:bg-red-400 ${
              pathname === "/calendar" ? "bg-red-400 text-white" : ""
            }`}
          >
            Calendar
          </a>
        </li>

        <li>
          <a
            href="/users"
            className={`block py-2 px-4 rounded hover:bg-red-400 ${
              pathname === "/users" ? "bg-red-400 text-white" : ""
            }`}
          >
            Users
          </a>
        </li>

        <li>
          <a
            href="/customers"
            className={`block py-2 px-4 rounded hover:bg-red-400 ${
              pathname === "/customers" ? "bg-red-400 text-white" : ""
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
          {/* Dropdown trigger for Data */}
          <button
            onClick={toggleDataDropdown}
            className="w-full flex justify-between items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <span>Calibration Data</span>
            {/* Dropdown arrow */}
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

          {/* Dropdown menu for Data */}
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
          {/* Dropdown trigger for Profile */}
          <button
            onClick={toggleProfileDropdown}
            className="w-full flex justify-between items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <span>Profile Options</span>
            {/* Dropdown arrow */}
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

          {/* Dropdown menu for Profile */}
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
  );
};

export default Sidebar;
