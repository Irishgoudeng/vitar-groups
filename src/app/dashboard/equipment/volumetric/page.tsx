"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SpecificEquipment } from "@/app/types/SpecificEquipment";
import AddSpecificEquipmentModal from "@/app/components/Equipment/AddSpecificEquipmentModal";
import EditSpecificEquipmentModal from "@/app/components/Equipment/EditSpecificEquipmentModal";

// Initial list of equipment data
const initialSpecificEquipments: SpecificEquipment[] = [
  {
    id: "1",
    scope: "Volumetric",
    description: "Temperature Block Calibrator",
    tagID: "ST-DB1",
    make: "ISOTECH",
    model: "GEMINI 4857/550 BASIC",
    serialNumber: "40169/1",
    type: "-",
    range: "50 °C ~ 500 °C",
    certificateNo: "-",
    traceability: "-",
  },
  // Add more equipment items as needed
];

const SpecificEquipmentPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [specificequipments, setEquipments] = useState<SpecificEquipment[]>(
    initialSpecificEquipments
  );
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const router = useRouter();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [selectedEquipment, setSelectedEquipment] =
    useState<SpecificEquipment | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Modal state
  const handleEdit = (equipment: SpecificEquipment) => {
    setSelectedEquipment(equipment);
    setIsEditModalOpen(true);
  };
  const handleUpdateEquipment = (updatedEquipment: SpecificEquipment) => {
    setEquipments((prev) =>
      prev.map((equipment) =>
        equipment.tagID === updatedEquipment.tagID
          ? updatedEquipment
          : equipment
      )
    );
  };

  const handleDelete = (tagID: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this equipment?"
    );
    if (confirmDelete) {
      setEquipments(
        specificequipments.filter(
          (specificequipments) => specificequipments.tagID !== tagID
        )
      );
      console.log(`Equipment with ID ${tagID} deleted`);
      router.push(`/dashboard/equipment/volumetric`);
    }
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

  const handleAddEquipment = (newEquipment: SpecificEquipment) => {
    setEquipments((prev) => [...prev, newEquipment]);
  };

  const filteredEquipments = specificequipments.filter((specificequipments) => {
    const matchesSearch = specificequipments.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" ||
      specificequipments.description
        .toLowerCase()
        .includes(selectedFilter.toLowerCase());
    return matchesSearch && matchesFilter;
  });

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
        Volumetric Equipment
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
          Add Volumetric Equipment
        </button>
      </div>

      {/* Table for larger screens */}
      <div className="hidden lg:block overflow-x-auto h-screen">
        <table className="w-full text-sm text-left text-gray-600 bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                TagID
              </th>
              <th scope="col" className="px-6 py-3">
                Type of Scope
              </th>
              <th scope="col" className="px-6 py-3">
                Model
              </th>
              <th scope="col" className="px-6 py-3">
                Serial Number
              </th>
              <th scope="col" className="px-6 py-3">
                Range Type
              </th>
              <th scope="col" className="px-6 py-3">
                Range
              </th>
              <th scope="col" className="px-6 py-3">
                Certificate No.
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
              filteredEquipments.map((specificequipments) => (
                <tr
                  key={specificequipments.tagID}
                  className="border-b border-gray-200 relative"
                >
                  <td className="px-6 py-4">
                    {specificequipments.description}
                  </td>
                  <td className="px-6 py-4">{specificequipments.tagID}</td>
                  <td className="px-6 py-4">{specificequipments.scope}</td>
                  <td className="px-6 py-4">{specificequipments.model}</td>
                  <td className="px-6 py-4">
                    {specificequipments.serialNumber}
                  </td>
                  <td className="px-6 py-4">{specificequipments.type}</td>
                  <td className="px-6 py-4">{specificequipments.range}</td>
                  <td className="px-6 py-4">
                    {specificequipments.certificateNo}
                  </td>
                  <td className="px-6 py-4">
                    {specificequipments.traceability}
                  </td>
                  <td className="px-6 py-4 absolute">
                    {/* Three-dot menu button */}
                    <button
                      onClick={() =>
                        setDropdownOpen((prev) => ({
                          ...prev,
                          [specificequipments.tagID]:
                            !prev[specificequipments.tagID],
                        }))
                      }
                      className="text-gray-600 hover:text-gray-800 focus:outline-none"
                    >
                      ⋮
                    </button>
                    {/* Dropdown Menu */}
                    {dropdownOpen[specificequipments.tagID] && (
                      <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                        <button
                          onClick={() => {
                            handleEdit(specificequipments);
                            setDropdownOpen((prev) => ({
                              ...prev,
                              [specificequipments.tagID]: false,
                            }));
                          }}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            handleDelete(specificequipments.tagID);
                            setDropdownOpen((prev) => ({
                              ...prev,
                              [specificequipments.tagID]: false,
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
                <td colSpan={10} className="text-center py-4 text-gray-500">
                  No equipment found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for adding new equipment */}
      <AddSpecificEquipmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddEquipment={handleAddEquipment}
        scopeLabel="Volumetric"
      />
      <EditSpecificEquipmentModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onUpdateEquipment={handleUpdateEquipment}
        equipment={selectedEquipment}
        scopeLabel="Volumetric"
      />
    </div>
  );
};

export default SpecificEquipmentPage;
