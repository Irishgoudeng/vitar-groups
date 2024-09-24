"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/assets/vitar-logo.png";
import profilePic from "../../../../public/assets/prof-pic.png";

import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const [isDataDropdownOpen, setIsDataDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddJobsDropdownOpen, setIsAddJobsDropdownOpen] = useState(false);

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
    setIsAddJobsDropdownOpen(!isAddJobsDropdownOpen);
  };

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

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="bg-transparent fixed">
      <div className="block lg:hidden p-4 bg-transparent   ">
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

      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-transparent transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:block lg:translate-x-0`}
      >
        <div className="w-64 h-full bg-white text-gray-700 p-4">
          <div className="mb-6 pl-6">
            <Image src={logo} alt="Dashboard Logo" width={150} height={50} />
          </div>

          <h2 className="text-lg font-semibold mb-2 text-red-500">Dashboard</h2>
          <ul className="mb-6">
            <li className="mb-2">
              <Link
                href="/dashboard"
                className={`block py-2 px-4 rounded hover:bg-red-400 ${
                  pathname === "/dashboard" ? "bg-red-400 text-white" : ""
                }`}
              >
                <i className="bx bx-home mr-2"></i> Home
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
                <span>
                  <i className="bx bx-briefcase mr-2"></i> Jobs
                </span>
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
                      <i className="bx bx-list-ol mr-2"></i> Job List
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
                      <i className="bx bx-plus-circle mr-2"></i> Add New Job
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-red-500 mb-2">Data</h2>
          <ul>
            <li className="mb-4">
              <button
                onClick={toggleDataDropdown}
                className="w-full flex justify-between items-center py-2 px-4 rounded hover:bg-red-400"
              >
                <span>
                  <i className="bx bx-data mr-2"></i> Calibration Data
                </span>
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
                      <i className="bx bx-calculator mr-2"></i> Calibration Data
                      (Volumetric)
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
                      <i className="bx bx-calculator mr-2"></i> Calibration Data
                      (Volumetric Glassware)
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
                      <i className="bx bx-calculator mr-2"></i> Uncertainty
                      Calculation (Volumetric Glassware)
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
                  pathname === "/dashboard/customers"
                    ? "bg-red-400 text-white"
                    : ""
                }`}
              >
                <i className="bx bx-user mr-2"></i> Customers
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/dashboard/users"
                className={`block py-2 px-4 rounded hover:bg-red-400 ${
                  pathname === "/dashboard/users" ? "bg-red-400 text-white" : ""
                }`}
              >
                <i className="bx bx-group mr-2"></i> Users
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/dashboard/settings"
                className={`block py-2 px-4 rounded hover:bg-red-400 ${
                  pathname === "/dashboard/settings"
                    ? "bg-red-400 text-white"
                    : ""
                }`}
              >
                <i className="bx bx-cog mr-2"></i> Settings
              </Link>
            </li>
          </ul>

          <div className="absolute bottom-4 left-4 flex items-center xl:hidden">
            <Image
              src={profilePic}
              alt="Profile Picture"
              width={40}
              height={40}
              className="rounded-full mr-2"
            />
            <button
              onClick={toggleProfileDropdown}
              className="text-red-500 flex items-center"
            >
              <span className="mr-2">Profile</span>
              <i
                className={`bx ${
                  isProfileDropdownOpen ? "bx-chevron-up" : "bx-chevron-down"
                } text-lg`}
              ></i>
            </button>

            {isProfileDropdownOpen && (
              <div className="absolute left-0 mt-2 w-32 bg-white shadow-lg rounded">
                <Link
                  href="/dashboard/profile"
                  className="block py-2 px-4 hover:bg-red-400"
                >
                  Profile Settings
                </Link>
                <Link
                  href="/logout"
                  className="block py-2 px-4 hover:bg-red-400"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
