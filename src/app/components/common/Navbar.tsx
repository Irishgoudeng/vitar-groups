// app/dashboard/Navbar.tsx
import React from "react";
import Image from "next/image";
import profilePic from "../../../../public/assets/prof-pic.png"; // Replace with the path to your profile picture

const Navbar: React.FC = () => {
  return (
    <nav className="bg-red-500 p-4 justify-end items-center hidden lg:flex">
      <div className="relative">
        <Image
          src={profilePic}
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
