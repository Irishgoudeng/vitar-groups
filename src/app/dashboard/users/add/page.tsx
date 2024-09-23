"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddUserPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Hash the password before sending it to the server (here it's just a dummy example)
    const hashedPassword = `hashed_${password}`;

    // New user data
    const newUser = {
      name,
      email,
      phone,
      address,
      username,
      password: hashedPassword, // In practice, hash the password in the backend
    };

    // Submit user data (Replace with actual API call)
    console.log("New user submitted:", newUser);

    // Redirect to users list
    router.push("/dashboard/users");
  };

  return (
    <div className="p-6 lg:p-12 bg-white min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">
        Add New User
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6 text-black">
        <div className="">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
