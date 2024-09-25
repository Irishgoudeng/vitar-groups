"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "../common/InputField";

const AddCustomer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCustomer({
      ...newCustomer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const { name, email, phone } = newCustomer;

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
      console.log("New customer added:", newCustomer);

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
          Add Customer
        </h1>

        <InputField
          id="customer-name"
          label="Name"
          value={newCustomer.name}
          onChange={handleChange}
          placeholder="Enter customer name"
          required
        />

        <InputField
          id="customer-email"
          label="Email"
          type="email"
          value={newCustomer.email}
          onChange={handleChange}
          placeholder="Enter customer email"
          required
        />

        <InputField
          id="customer-phone"
          label="Phone"
          value={newCustomer.phone}
          onChange={handleChange}
          placeholder="Enter customer phone"
          required
        />

        <InputField
          id="customer-address"
          label="Address"
          value={newCustomer.address}
          onChange={handleChange}
          placeholder="Enter customer address"
        />

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Save Customer
          </button>
        </div>
      </div>
    </>
  );
};

export default AddCustomer;
