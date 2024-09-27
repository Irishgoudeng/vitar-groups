"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
// import AddCustomer from "@/app/components/Customers/AddCustomerModal";
import EditCustomerModal from "@/app/components/Customers/EditCustomerModal";
import { Customer } from "@/app/types/Customer"; // Make sure to import the Customer type

const initialCustomers: Customer[] = [
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
];

const CustomersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>(
    {}
  );
  const router = useRouter();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleEdit = (customerId: string) => {
    const customerToEdit =
      customers.find((customer) => customer.id === customerId) || null;
    setSelectedCustomer(customerToEdit);
    setIsEditModalOpen(true);
  };

  const handleDelete = (customerId: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this customer?"
    );
    if (confirmDelete) {
      setCustomers(customers.filter((customer) => customer.id !== customerId));
      console.log(`Customer with ID ${customerId} deleted`);
      router.push(`/dashboard/customers`);
    }
  };

  const handleAdd = () => {
    router.push("/dashboard/customers/add");
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

  const handleSave = (updatedCustomer: Customer) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === updatedCustomer.id ? updatedCustomer : customer
      )
    );
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      for (const id in dropdownRefs.current) {
        if (
          dropdownRefs.current[id] &&
          dropdownOpen[id] &&
          !dropdownRefs.current[id]?.contains(event.target as Node)
        ) {
          setDropdownOpen((prev) => ({ ...prev, [id]: false }));
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="p-8 lg:p-12 bg-white h-screen overflow-x-hidden overflow-y-hidden">
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
          onClick={handleAdd}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Add Customer
        </button>
      </div>

      {/* Customer List as Cards */}
      <div className="block lg:hidden">
        {filteredCustomers.length > 0 ? (
          filteredCustomers.map((customer) => (
            <div
              key={customer.id}
              className="border rounded-lg p-4 mb-4 bg-white shadow"
            >
              <h2 className="text-xl font-semibold">{customer.name}</h2>
              <p className="text-gray-600">Email: {customer.email}</p>
              <p className="text-gray-600">Phone: {customer.phone}</p>
              <p className="text-gray-600">Address: {customer.address}</p>
              <button
                onClick={() => handleEdit(customer.id)}
                className="mt-2 w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Edit
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No customers found</div>
        )}
      </div>

      {/* Table for larger screens */}
      <div className="hidden lg:block overflow-x-auto h-screen">
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
                  <td className="px-6 py-4 absolute">
                    {/* Three-dot menu button */}
                    <button
                      onClick={() =>
                        setDropdownOpen((prev) => ({
                          ...prev,
                          [customer.name]: !prev[customer.name],
                        }))
                      }
                      className="text-gray-600 hover:text-gray-800 focus:outline-none"
                    >
                      ⋮
                    </button>
                    {/* Dropdown Menu */}
                    {dropdownOpen[customer.name] && (
                      <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                        {/* <button
                          onClick={() => {
                            handleEdit(site);
                            setDropdownOpen((prev) => ({
                              ...prev,
                              [site.siteID]: false,
                            }));
                          }}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                        >
                          Edit
                        </button> */}
                        <button
                          onClick={() => {
                            handleDelete(customer.name);
                            setDropdownOpen((prev) => ({
                              ...prev,
                              [customer.name]: false,
                            }));
                          }}
                          className="block px-4 py-2 text-red-600 hover:bg-gray-100 w-full text-left"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center text-gray-500">
                  No customers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* <AddCustomer isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
      <EditCustomerModal
        isOpen={isEditModalOpen}
        customer={selectedCustomer}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
};

export default CustomersPage;
