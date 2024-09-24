"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import the Link component
import logo from "../../../../public/assets/vitar-logo.png";
import profilePic from "../../../../public/assets/prof-pic.png"; // Replace with the path to your profile picture

import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const [isDataDropdownOpen, setIsDataDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddJobsDropdownOpen, setIsAddJobsDropdownOpen] = useState(false); // New state for Add Jobs dropdown

  const toggleDataDropdown = () => {
    setIsDataDropdownOpen(!isDataDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleAddJobsDropdown = () => {
    setIsAddJobsDropdownOpen(!isAddJobsDropdownOpen); // Toggle Add Jobs dropdown
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  // Function to stop event propagation
  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click event from closing the sidebar
  };

  return (
    <div className="bg-white">
      {/* Burger Menu Icon for mobile */}
      <div className="block lg:hidden p-4 bg-transparent">
        <button onClick={toggleSidebar} className="text-red-700">
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
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:block lg:translate-x-0`}
      >
        <div className="w-64 h-full bg-white text-gray-700 p-4">
          {/* Logo */}
          <div className="mb-6 pl-6">
            <Image src={logo} alt="Dashboard Logo" width={150} height={50} />
          </div>

          {/* Menu Section */}
          <h2 className="text-lg font-semibold mb-2 text-red-500">Dashboard</h2>
          <ul className="mb-6">
            <li className="mb-2">
              <Link
                href="/dashboard"
                className={`block py-2 px-4 rounded hover:bg-red-400 ${
                  pathname === "/dashboard" ? "bg-red-400 text-white" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="mb-4">
              <button
                onClick={toggleAddJobsDropdown}
                className={`w-full flex justify-between items-center py-2 px-4 rounded hover:bg-red-400 ${
                  pathname.includes("/dashboard/jobs")
                    ? "bg-red-400 text-white"
                    : ""
                }`}
              >
                <span>Jobs</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isAddJobsDropdownOpen ? "rotate-180" : ""
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

              {isAddJobsDropdownOpen && (
                <ul className="ml-4 mt-2" onClick={handleDropdownClick}>
                  <li className="mb-2">
                    <Link
                      href="/dashboard/jobs"
                      className={`block py-2 px-4 text-sm rounded hover:bg-red-400 ${
                        pathname === "/dashboard/jobs"
                          ? "bg-red-400 text-white"
                          : ""
                      }`}
                    >
                      Job List
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/dashboard/jobs/add"
                      className={`block py-2 px-4 text-sm rounded hover:bg-red-400 ${
                        pathname === "/dashboard/jobs/add"
                          ? "bg-red-400 text-white"
                          : ""
                      }`}
                    >
                      Add New Job
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          {/* Data Section */}
          <h2 className="text-lg font-semibold text-red-500 mb-2">Data</h2>
          <ul>
            <li className="mb-4">
              <button
                onClick={toggleDataDropdown}
                className="w-full flex justify-between items-center py-2 px-4 rounded hover:bg-red-400"
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
                <ul className="ml-4 mt-2" onClick={handleDropdownClick}>
                  <li className="mb-2">
                    <Link
                      href="/dashboard/volumetric"
                      className={`block py-2 px-4 text-sm rounded hover:bg-red-400 ${
                        pathname === "/dashboard/volumetric"
                          ? "bg-red-400 text-white"
                          : ""
                      }`}
                    >
                      Calibration Data (Volumetric)
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/dashboard/glassware"
                      className={`block py-2 px-4 text-sm rounded hover:bg-red-400 ${
                        pathname === "/dashboard/glassware"
                          ? "bg-red-400 text-white"
                          : ""
                      }`}
                    >
                      Calibration Data (Volumetric Glassware)
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      href="/dashboard/uncertainty"
                      className={`block py-2 px-4 text-sm rounded hover:bg-red-400 ${
                        pathname === "/dashboard/uncertainty"
                          ? "bg-red-400 text-white"
                          : ""
                      }`}
                    >
                      Uncertainty Calculation (Volumetric Glassware)
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-red-500 mb-2">Settings</h2>
          <ul>
            <li className="mb-2">
              <Link
                href="/dashboard/customers"
                className={`block py-2 px-4 rounded hover:bg-red-400 ${
                  pathname.includes("/dashboard/customers")
                    ? "bg-red-400 text-white"
                    : ""
                }`}
              >
                Customers
              </Link>
            </li>

            <li className="mb-2">
              <Link
                href="/dashboard/users"
                className={`block py-2 px-4 rounded hover:bg-red-400 ${
                  pathname.includes("/dashboard/users")
                    ? "bg-red-400 text-white"
                    : ""
                }`}
              >
                Users
              </Link>
            </li>
          </ul>

          {/* Profile Section */}
          <div className="mt-6">
            <button
              onClick={toggleProfileDropdown}
              className="flex items-center py-2 px-4 rounded hover:bg-red-400"
            >
              <Image
                src={profilePic}
                alt="Profile Picture"
                width={40}
                height={40}
                className="rounded-full mr-2"
              />
              <span>Profile</span>
              <svg
                className={`w-4 h-4 ml-auto transform transition-transform ${
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
              <ul className="ml-4 mt-2" onClick={handleDropdownClick}>
                <li className="mb-2">
                  <Link
                    href="/dashboard/edit-profile"
                    className={`block py-2 px-4 text-sm rounded hover:bg-red-400 ${
                      pathname === "/dashboard/edit-profile"
                        ? "bg-red-400 text-white"
                        : ""
                    }`}
                  >
                    Edit Profile
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/dashboard/logout"
                    className="block py-2 px-4 text-sm rounded hover:bg-red-400"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
