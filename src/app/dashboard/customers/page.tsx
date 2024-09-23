"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const initialCustomers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    address: "123 Elm Street",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "234-567-8901",
    address: "456 Oak Avenue",
  },
  {
    id: "3",
    name: "Emily Johnson",
    email: "emily@example.com",
    phone: "345-678-9012",
    address: "789 Pine Road",
  },
  // Add more customers here
];

const CustomersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [customers] = useState(initialCustomers); // Using static initialCustomers

  const router = useRouter();

  const handleEdit = (customerId: string) => {
    router.push(`/dashboard/customers/${customerId}/edit`);
  };

  const handleAdd = () => {
    router.push(`/dashboard/customers/add`);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.target.value);
  };

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch = customer.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" ||
      customer.address.toLowerCase().includes(selectedFilter.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 lg:p-12 bg-white min-h-screen">
      {/* Page Header */}
      <h1 className="text-3xl font-semibold text-gray-900 mb-4 py-8 lg:mb-0">
        Customers
      </h1>
      <div className="mb-6 flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="flex gap-4 mb-4 lg:mb-0">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by name..."
            className="px-4 py-2 border border-gray-300 rounded-lg text-black"
          />
          <select
            value={selectedFilter}
            onChange={handleFilter}
            className="px-4 py-2 border border-gray-300 rounded-lg text-black"
          >
            <option value="all">All Locations</option>
            <option value="Elm Street">Elm Street</option>
            <option value="Oak Avenue">Oak Avenue</option>
            <option value="Pine Road">Pine Road</option>
          </select>
        </div>
        <button
          onClick={() => handleAdd()}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Add Customer
        </button>
      </div>

      {/* Customer List */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-600 bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {customer.name}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{customer.email}</td>
                  <td className="px-6 py-4 text-gray-600">{customer.phone}</td>
                  <td className="px-6 py-4 text-gray-600">
                    {customer.address}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleEdit(customer.id)}
                      className="text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                  No customers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersPage;
