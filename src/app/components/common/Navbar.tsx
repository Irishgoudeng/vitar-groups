"use client";

import React, { useState } from "react";
import Image from "next/image";
import profilePic from "../../../../public/assets/prof-pic.png"; // Replace with the path to your profile picture
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Close the dropdown if the user clicks outside
  const handleClickOutside = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <nav className="bg-red-500 p-4 justify-end items-center hidden lg:flex relative">
      {/* Profile Picture */}
      <div className="relative text-black">
        <Image
          src={profilePic}
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
          onClick={toggleProfileDropdown}
        />

        {/* Dropdown Menu */}
        {isProfileDropdownOpen && (
          <div
            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg"
            onClick={handleClickOutside}
          >
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/dashboard/profile" className="block">
                  Profile Settings
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/dashboard/logout" className="block">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
