"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Equipment } from "@/app/types/Equipment";
import AddEquipmentModal from "@/app/components/Equipment/AddEquipmentModal";

// Initial list of equipment data
const initialEquipments: Equipment[] = [
  {
    id: "1",
    customerID: "C001",
    customerName: "John Doe",
    siteID: "S001",
    siteName: "Site A",
    equipmentID: "E001",
    equipmentName: "Equipment 1",
    typeOfScope: "Scope A",
    description: "First equipment description",
    tagID: "T001",
    model: "Model A",
    serialNumber: "SN001",
    type: "Type A",
    rangeType: "Type 1",
    rangeMin: "10",
    rangeMax: "100",
    traceability: "Traceability A",
  },
  // Add more equipment items as needed
];

const EquipmentPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [equipments, setEquipments] = useState<Equipment[]>(initialEquipments);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const router = useRouter();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleDelete = (equipmentId: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this equipment?"
    );
    if (confirmDelete) {
      setEquipments(
        equipments.filter((equipment) => equipment.equipmentID !== equipmentId)
      );
      console.log(`Equipment with ID ${equipmentId} deleted`);
      router.push(`/dashboard/equipment`);
    }
  };

  const handleAdd = () => {
    setIsModalOpen(true); // Open modal for adding new equipment
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.target.value);
  };

  const handleAddEquipment = (newEquipment: Equipment) => {
    setEquipments((prev) => [...prev, newEquipment]); // Add new equipment to the list
  };

  const filteredEquipments = equipments.filter((equipment) => {
    const matchesSearch = equipment.equipmentName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" ||
      equipment.siteName.toLowerCase().includes(selectedFilter.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  // const toggleDropdown = (equipmentId: string) => {
  //   setDropdownOpen((prev) => ({
  //     ...prev,
  //     [equipmentId]: !prev[equipmentId],
  //   }));
  // };

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
        Equipments
      </h1>
      <div className="mb-6 flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="flex gap-4 mb-4 lg:mb-0">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by equipment name..."
            className="px-4 py-2 border border-gray-300 rounded-lg text-black"
          />
          <select
            value={selectedFilter}
            onChange={handleFilter}
            className="px-4 py-2 border border-gray-300 rounded-lg text-black"
          >
            <option value="all">All Locations</option>
            <option value="Site A">Site A</option>
            <option value="Site B">Site B</option>
            <option value="Site C">Site C</option>
          </select>
        </div>
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Add Equipment
        </button>
      </div>

      {/* Equipment List as Cards for smaller screens */}
      <div className="block lg:hidden text-black">
        {filteredEquipments.length > 0 ? (
          filteredEquipments.map((equipment) => (
            <div
              key={equipment.equipmentID}
              className="border rounded-lg p-4 mb-4 bg-white shadow"
            >
              <h2 className="text-xl font-semibold">
                {equipment.equipmentName}
              </h2>
              <p className="text-gray-600">
                Type of Scope: {equipment.typeOfScope}
              </p>
              <p className="text-gray-600">
                Description: {equipment.description}
              </p>
              <p className="text-gray-600">Model: {equipment.model}</p>
              <p className="text-gray-600">
                Serial Number: {equipment.serialNumber}
              </p>
              <div className="mt-2">
                <button
                  onClick={() => handleDelete(equipment.equipmentID)}
                  className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No equipment found</div>
        )}
      </div>

      {/* Table for larger screens */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-600 bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                Equipment ID
              </th>
              <th scope="col" className="px-6 py-3">
                Equipment Name
              </th>
              <th scope="col" className="px-6 py-3">
                Type of Scope
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Tag ID
              </th>
              <th scope="col" className="px-6 py-3">
                Model
              </th>
              <th scope="col" className="px-6 py-3">
                Serial Number
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Range Type
              </th>
              <th scope="col" className="px-6 py-3">
                Range (Min)
              </th>
              <th scope="col" className="px-6 py-3">
                Range (Max)
              </th>
              <th scope="col" className="px-6 py-3">
                Traceability
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredEquipments.length > 0 ? (
              filteredEquipments.map((equipment) => (
                <tr
                  key={equipment.equipmentID}
                  className="border-b border-gray-200"
                >
                  <td className="px-6 py-4">{equipment.equipmentID}</td>
                  <td className="px-6 py-4">{equipment.equipmentName}</td>
                  <td className="px-6 py-4">{equipment.typeOfScope}</td>
                  <td className="px-6 py-4">{equipment.description}</td>
                  <td className="px-6 py-4">{equipment.tagID}</td>
                  <td className="px-6 py-4">{equipment.model}</td>
                  <td className="px-6 py-4">{equipment.serialNumber}</td>
                  <td className="px-6 py-4">{equipment.type}</td>
                  <td className="px-6 py-4">{equipment.rangeType}</td>
                  <td className="px-6 py-4">{equipment.rangeMin}</td>
                  <td className="px-6 py-4">{equipment.rangeMax}</td>
                  <td className="px-6 py-4">{equipment.traceability}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(equipment.equipmentID)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={13} className="text-center py-4 text-gray-500">
                  No equipment found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for adding new equipment */}
      <AddEquipmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddEquipment={handleAddEquipment}
      />
    </div>
  );
};

export default EquipmentPage;
