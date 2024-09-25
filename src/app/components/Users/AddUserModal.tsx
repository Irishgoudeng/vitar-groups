"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "../common/InputField";
import Button from "../common/Button";

const AddUser: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    role: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const { name, email, phone } = newUser;

    // Simple validation
    if (!name || !email || !phone) {
      alert("Please fill in all required fields.");
      return;
    }

    // Regex for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate an API call
    try {
      // Here you would typically send the newCustomer data to your backend or API
      console.log("New customer added:", newUser);

      // Redirect to customers list after saving
      router.push("/dashboard/customers");
      onClose(); // Close modal after saving
    } catch (error) {
      console.error("Failed to save customer:", error);
      alert("An error occurred while saving the customer. Please try again.");
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={onClose}
        ></div>
      )}

      {/* Modal */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white p-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 1000 }}
      >
        <button className="absolute top-2 right-2" onClick={onClose}>
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <h1 className="text-3xl font-semibold text-gray-900 mb-8">
          Add New User
        </h1>

        <InputField
          id="user-name"
          label="Full Name"
          value={newUser.name}
          onChange={handleChange}
          placeholder="Enter User Full Name"
          required
        />

        <InputField
          id="user-username"
          label="Username"
          value={newUser.name}
          onChange={handleChange}
          placeholder="Enter Username"
          required
        />

        <InputField
          id="user-email"
          label="Email"
          type="email"
          value={newUser.email}
          onChange={handleChange}
          placeholder="Enter User Email"
          required
        />

        <InputField
          id="user-phone"
          label="Phone"
          value={newUser.phone}
          onChange={handleChange}
          placeholder="Enter User Phone"
          required
        />

        <InputField
          id="user-address"
          label="Address:"
          value={newUser.address}
          onChange={handleChange}
          placeholder="Enter User Address"
        />

        <InputField
          id="user-role"
          label="Role:"
          value={newUser.role}
          onChange={handleChange}
          placeholder="Enter User Role"
        />

        <div className="flex justify-end">
          <Button type="button" label="Create User" onClick={handleSave} />
        </div>
      </div>
    </>
  );
};

export default AddUser;
