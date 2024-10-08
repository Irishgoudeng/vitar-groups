"use client";

import React, { useState } from "react";
import { User } from "../../types/Users";
import InputField from "../common/InputField";
import Button from "../common/Button";

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  User: User | null;
  onSave: (updatedUser: User) => void;
}

const EditUserModal: React.FC<EditUserModalProps> = ({
  isOpen,
  onClose,
  User,
  onSave,
}) => {
  const [formData, setFormData] = useState<User>(
    User || {
      id: "",
      name: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      address: "",
      role: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

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

        <h2 className="text-xl font-semibold mb-4 text-gray-900">Edit User</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            id="full-name"
            label="Full Name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Full Name"
            required
          />

          <InputField
            id="user-username"
            label="Username"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Username"
            required
          />
          <InputField
            id="user-email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter User email"
            type="email"
            required
          />
          <InputField
            id="user-phone"
            label="Phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter User phone"
            required
          />
          <InputField
            id="user-address"
            label="Address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter User address"
            required
          />
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <Button type="button" label="Submit" onClick={onClose} />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditUserModal;
