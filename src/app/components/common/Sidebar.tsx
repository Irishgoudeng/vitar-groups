"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/assets/vitar-logo.png"; // Replace with the path to your logo image

const Sidebar: React.FC = () => {
  // State to toggle the dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-64 min-h-screen bg-white text-gray-700 p-4">
      {/* Logo */}
      <div className="mb-6 pl-6">
        <Image src={logo} alt="Dashboard Logo" width={150} height={50} />
      </div>

      {/* Menu Section */}
      <h2 className="text-lg font-semibold text-gray-500 mb-2">Menu</h2>
      <ul className="mb-6">
        <li>
          <a
            href="/dashboard"
            className="block py-2 px-4 rounded hover:bg-gray-200"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a href="" className="block py-2 px-4 rounded hover:bg-gray-200">
            Calendar
          </a>
        </li>
      </ul>

      {/* Data Section */}
      <h2 className="text-lg font-semibold text-gray-500 mb-2">Data</h2>
      <ul>
        <li className="mb-4">
          {/* Dropdown trigger */}
          <button
            onClick={toggleDropdown}
            className="w-full flex justify-between items-center py-2 px-4 rounded hover:bg-gray-200"
          >
            <span>Calibration Data</span>
            {/* Dropdown arrow */}
            <svg
              className={`w-4 h-4 transform transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
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

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <ul className="ml-4 mt-2">
              <li>
                <a
                  href="/dashboard/volumetric"
                  className="block py-2 px-4 text-sm rounded hover:bg-gray-200"
                >
                  Calibration Data (Volumetric)
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/glassware"
                  className="block py-2 px-4 text-sm rounded hover:bg-gray-200"
                >
                  Calibration Data (Volumetric Glassware)
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/statistics"
                  className="block py-2 px-4 text-sm rounded hover:bg-gray-200"
                >
                  Uncertainty Calculation (Volumetric Glassware)
                </a>
              </li>
              <li>
                <a
                  href="/dashboard/statistics"
                  className="block py-2 px-4 text-sm rounded hover:bg-gray-200"
                >
                  CERTIFICATE OF CALIBRATION
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
