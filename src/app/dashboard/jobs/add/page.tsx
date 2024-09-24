"use client";

import { useState } from "react";
import Button from "../../../components/common/Button";

const AddJobPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("summary");

  // Reusable input component
  const InputField: React.FC<{
    id: string;
    label: string;
    placeholder?: string;
  }> = ({ id, label, placeholder }) => (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-bold text-gray-900"
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );

  const DisabledField: React.FC<{
    id: string;
    label: string;
    placeholder?: string;
  }> = ({ id, label, placeholder }) => (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-bold text-gray-900"
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
        disabled
      />
    </div>
  );

  const equipmentOptions = [
    { id: "1", name: "Thermometer" },
    { id: "2", name: "Heat Gun" },
    { id: "3", name: "Thermal Camera" },
    { id: "4", name: "Temperature Sensor" },
  ];

  return (
    <div className="p-6 lg:p-12 bg-white min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">Add Job</h1>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-8">
        {["summary", "scheduling"].map((tab) => (
          <span
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer px-4 py-2 border ${
              activeTab === tab
                ? "border-red-600 text-red-600 font-semibold underline"
                : "border-transparent text-gray-700"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </span>
        ))}
      </div>

      <form className="space-y-6 text-black bg-gray-200 p-8 m-4">
        {activeTab === "summary" && (
          <div>
            <h2 className="text-2xl font-medium mb-6">Job Summary</h2>

            {/* Search Customer Name Input */}
            <InputField
              id="customer_name"
              label="Search Customer Name"
              placeholder="ex. 1001-250"
            />

            <hr className="my-6" />
            <h2 className="text-xl font-medium mt-8 mb-4">Primary Contact</h2>
            <p className="mb-4">Details about the customer</p>

            {/* Contact Details Inputs */}
            <InputField
              id="contact_name"
              label="Contact Name"
              placeholder="Contact Name"
            />

            {/* Map for multiple contact fields */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <InputField
                id="first_name"
                label="First Name"
                placeholder="ex. Contact Details"
              />
              <InputField
                id="middle_name"
                label="Middle Name"
                placeholder="ex. Contact Details"
              />
              <InputField
                id="last_name"
                label="Last Name"
                placeholder="ex. Contact Details"
              />
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
              <InputField
                id="phone_number"
                label="Phone Number"
                placeholder="ex. Contact Details"
              />
              <InputField
                id="mobile_phone"
                label="Mobile Phone"
                placeholder="ex. Contact Details"
              />
              <InputField
                id="email_address"
                label="Email Address"
                placeholder="ex. Contact Details"
              />
            </div>

            <hr className="my-6" />
            <h2 className="text-xl font-medium mt-8 mb-4">Job Location</h2>
            <p className="mb-4">Details about Job Location</p>

            <InputField id="location_id" label="Location ID" placeholder="" />

            <div className="grid grid-cols-3 gap-6 mb-6">
              <DisabledField
                id="location_name"
                label="Location Name"
                placeholder="ex. "
              />
              <DisabledField id="street_no" label="Street No." placeholder="" />
              <DisabledField
                id="street_address"
                label="Street Address"
                placeholder=""
              />
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <DisabledField id="block_no" label="Block" placeholder="ex. " />
              <DisabledField
                id="building_no"
                label="Building No."
                placeholder="ex. "
              />
            </div>

            <div className="grid grid-col-2 xl:grid-cols-4 gap-6 mb-6">
              <DisabledField id="country" label="Country" placeholder="ex. " />
              <DisabledField
                id="state_province"
                label="State/Province"
                placeholder="ex. "
              />
              <DisabledField id="city" label="City" placeholder="ex. " />
              <DisabledField
                id="zip_postal"
                label="Zip/Postal Code"
                placeholder="ex. "
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="equipment"
                className="block mb-2 text-sm font-bold text-gray-900"
              >
                Select Equipment
              </label>
              <select
                id="equipment"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                multiple
                required
              >
                {equipmentOptions.map((equipment) => (
                  <option key={equipment.id} value={equipment.id}>
                    {equipment.name}
                  </option>
                ))}
              </select>
              <p className="text-sm text-gray-500 mt-1">
                Hold down Ctrl (Windows) or Command (Mac) to select multiple
                options.
              </p>
            </div>
          </div>
        )}

        {activeTab === "scheduling" && (
          <div>
            <h2 className="text-2xl font-medium mb-6">Job Scheduling</h2>

            {/* Start Date and Time */}
            <div className="grid grid-cols-2 gap-6 mb-6 w-1/2">
              <div>
                <label
                  htmlFor="start_date"
                  className="block mb-2 text-sm font-bold text-gray-900"
                >
                  Start Date and Time
                </label>
                <input
                  type="datetime-local"
                  id="start_date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>

              {/* End Date and Time */}
              <div>
                <label
                  htmlFor="end_date"
                  className="block mb-2 text-sm font-bold text-gray-900"
                >
                  End Date and Time
                </label>
                <input
                  type="datetime-local"
                  id="end_date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
            </div>

            <div className="w-1/6">
              {/* Estimated Time */}
              <InputField
                id="estimated_time"
                label="Estimated Time (Hours)"
                placeholder="e.g., 3 hours"
              />
            </div>
            {/* Job Priority */}
            <div className="mb-6 w-1/6">
              <label
                htmlFor="job_priority"
                className="block mb-2 text-sm font-bold text-gray-900"
              >
                Job Priority
              </label>
              <select
                id="job_priority"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              >
                <option value="high">High</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        )}
      </form>
      <div className="flex justify-end items-end">
        <Button />
      </div>
    </div>
  );
};

export default AddJobPage;
