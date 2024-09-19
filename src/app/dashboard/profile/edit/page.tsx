"use client";

import React, { useState } from "react";

import Breadcrumb from "@/app/components/common/Breadcrumb";
import Image from "next/image";
import profPic from "../../../../../public/assets/prof-pic.png";

// Define a TypeScript interface for user profile data
interface UserProfile {
  name: string;
  role: string;
  about: string;
  twitter: string;
  facebook: string;
  instagram: string;
}

interface EditProfileProps {
  userProfile: UserProfile;
}

const EditProfile: React.FC<EditProfileProps> = ({ userProfile }) => {
  // Initialize form data with the provided user profile data
  const [formData, setFormData] = useState<UserProfile>({
    name: userProfile?.name || "Vince PXC",
    role: userProfile?.role || "Technician",
    about: userProfile?.about || "",
    twitter: userProfile?.twitter || "",
    facebook: userProfile?.facebook || "",
    instagram: userProfile?.instagram || "",
  });

  // Function to handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, you can add logic to update the user profile in the database
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto py-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-black">Edit Profile</h1>
            <Breadcrumb
              titles={[
                { name: "Dashboard", href: "/dashboard" },
                { name: "Profile", href: "/dashboard/profile" },
                { name: "Edit Profile" },
              ]}
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center space-y-6">
              <Image
                src={profPic}
                alt="Profile Picture"
                width={160}
                height={160}
                className="rounded-full cursor-pointer"
              />
              <div className="text-center">
                <label
                  htmlFor="name"
                  className="block text-xl font-medium text-black"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 bg-gray-100 border rounded-lg w-full text-center text-black"
                />
              </div>

              <div className="text-center">
                <label
                  htmlFor="role"
                  className="block text-xl font-medium text-black"
                >
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 bg-gray-100 border rounded-lg w-full text-center text-red-500"
                />
              </div>

              <div className="mt-6 w-full">
                <label
                  htmlFor="about"
                  className="block text-lg font-medium text-black"
                >
                  About Me
                </label>
                <textarea
                  id="about"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 px-3 py-2 bg-gray-100 border rounded-lg w-full text-black"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-6 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
