"use client";

import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import { User } from "../../types/Users";
import AddUser from "@/app/components/Users/AddUserModal";
import EditUserModal from "@/app/components/Users/EditUserModal";

const initialUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    address: "123 Elm Street",
    username: "johndoe",
    password: "hashedpassword1",
    role: "Technician",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "234-567-8901",
    address: "456 Oak Avenue",
    username: "janesmith",
    password: "hashedpassword2",
    role: "Admin",
  },
  {
    id: "3",
    name: "Emily Johnson",
    email: "emily@example.com",
    phone: "345-678-9012",
    address: "789 Pine Road",
    username: "emilyjohnson",
    password: "hashedpassword3",
    role: "Salesman",
  },
];

const UsersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedRole, setSelectedRole] = useState("all");
  const [users, setUsers] = useState<User[]>(initialUsers);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // const router = useRouter();

  useEffect(() => {
    // You can also fetch users from an API here if needed
    setUsers(initialUsers); // Set users in effect to ensure hydration matches
  }, []);

  const handleEdit = (userId: string) => {
    const userToEdit = users.find((users) => users.id === userId) || null;
    setSelectedUser(userToEdit);
    setIsEditModalOpen(true);
  };

  const handleDelete = (userId: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    }
  };

  const handleSave = (updatedCustomer: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedCustomer.id ? updatedCustomer : user
      )
    );
  };
  const handleAdd = () => {
    setIsModalOpen(true);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.target.value);
  };

  const handleRoleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation =
      selectedFilter === "all" ||
      user.address.toLowerCase().includes(selectedFilter.toLowerCase());
    const matchesRole = selectedRole === "all" || user.role === selectedRole;

    return matchesSearch && matchesLocation && matchesRole;
  });

  return (
    <div className="p-6 lg:p-12 bg-white min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-900 mb-4 py-8 lg:mb-0">
        Users
      </h1>
      <div className="mb-6 flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="flex flex-col lg:flex-row gap-4 mb-4 lg:mb-0">
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
          <select
            value={selectedRole}
            onChange={handleRoleFilter}
            className="px-4 py-2 border border-gray-300 rounded-lg text-black"
          >
            <option value="all">All Roles</option>
            <option value="Technician">Technician</option>
            <option value="Admin">Admin</option>
            <option value="Salesman">Salesman</option>
          </select>
        </div>
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Add User
        </button>
      </div>

      {/* User List */}
      <div className="block lg:hidden ">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="border rounded-lg p-4 mb-4 bg-white shadow"
            >
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">Username: {user.username}</p>
              <p className="text-gray-600">Email: {user.email}</p>
              <p className="text-gray-600">Phone: {user.phone}</p>
              <p className="text-gray-600">Address: {user.address}</p>
              <p className="text-gray-600">Role: {user.role}</p>
              <button
                onClick={() => handleEdit(user.id)}
                className="mt-2 w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Edit
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No users found</div>
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
                Username
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
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-200">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{user.username}</td>
                  <td className="px-6 py-4 text-gray-600">{user.email}</td>
                  <td className="px-6 py-4 text-gray-600">{user.phone}</td>
                  <td className="px-6 py-4 text-gray-600">{user.address}</td>
                  <td className="px-6 py-4 text-gray-600">{user.role}</td>
                  <td className="px-6 py-4 relative">
                    <button
                      className="text-gray-500 hover:underline"
                      onClick={(e) => {
                        const dropdown = e.currentTarget.nextElementSibling;
                        if (dropdown) {
                          dropdown.classList.toggle("hidden");
                        }
                      }}
                    >
                      &#x2022;&#x2022;&#x2022; {/* Three dots */}
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg hidden z-10">
                      <button
                        onClick={() => handleEdit(user.id)}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        Delete User
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <AddUser isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <EditUserModal
        isOpen={isEditModalOpen}
        User={selectedUser}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
};

export default UsersPage;
