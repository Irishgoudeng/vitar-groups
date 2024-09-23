"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddCustomer: React.FC = () => {
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
    // Here you would typically send the newCustomer data to your backend or API
    console.log("New customer added:", newCustomer);

    // Redirect to customers list after saving
    router.push("/dashboard/customers");
  };

  return (
    <div className="p-6 lg:p-12 bg-white min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">
        Add Customer
      </h1>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={newCustomer.name}
          onChange={handleChange}
          className="mt-1 px-4 py-2 border border-gray-300 rounded-lg text-black w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={newCustomer.email}
          onChange={handleChange}
          className="mt-1 px-4 py-2 border border-gray-300 rounded-lg text-black w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="text"
          name="phone"
          value={newCustomer.phone}
          onChange={handleChange}
          className="mt-1 px-4 py-2 border border-gray-300 rounded-lg text-black w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          type="text"
          name="address"
          value={newCustomer.address}
          onChange={handleChange}
          className="mt-1 px-4 py-2 border border-gray-300 rounded-lg text-black w-full"
        />
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Save Customer
        </button>
      </div>
    </div>
  );
};

export default AddCustomer;
