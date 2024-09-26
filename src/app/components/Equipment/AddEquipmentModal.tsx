/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useState } from "react";
import InputField from "@/app/components/common/InputField";
import Button from "@/app/components/common/Button";

interface AddEquipmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddEquipment: (equipment: any) => void; // Update type as needed
}

// Define a type for the range options keys
type RangeType = "typeA" | "typeB" | "typeC"; // Extend this as needed

const rangeOptions: Record<RangeType, { min: number; max: number }> = {
  typeA: { min: 0, max: 100 },
  typeB: { min: 50, max: 200 },
  typeC: { min: 100, max: 300 },
  // Add more types and their ranges as needed
};

const AddEquipmentModal: React.FC<AddEquipmentModalProps> = ({
  isOpen,
  onClose,
  onAddEquipment,
}) => {
  const [equipmentID, setEquipmentID] = useState("");
  const [equipmentName, setEquipmentName] = useState("");
  const [typeOfScope, setTypeOfScope] = useState("");
  const [description, setDescription] = useState("");
  const [tagID, setTagID] = useState("");
  const [model, setModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [type, setType] = useState("");
  const [rangeType, setRangeType] = useState<RangeType | "">(""); // Allow empty string as well
  const [rangeMin, setRangeMin] = useState("");
  const [rangeMax, setRangeMax] = useState("");
  const [traceability, setTraceability] = useState("");

  const handleRangeTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = e.target.value as RangeType; // Cast the selected value
    setRangeType(selectedType);

    // Autofill min and max based on selected range type
    if (rangeOptions[selectedType]) {
      setRangeMin(rangeOptions[selectedType].min.toString());
      setRangeMax(rangeOptions[selectedType].max.toString());
    } else {
      setRangeMin("");
      setRangeMax("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEquipment = {
      equipmentID,
      equipmentName,
      typeOfScope,
      description,
      tagID,
      model,
      serialNumber,
      type,
      rangeType,
      rangeMin,
      rangeMax,
      traceability,
    };
    onAddEquipment(newEquipment);
    onClose(); // Close modal after adding
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 ease-in-out ">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg xl:max-w-5xl relative transform transition-transform duration-300 ease-in-out scale-100 hover:scale-105">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-600 focus:outline-none transition duration-200"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Add Equipment
        </h2>
        <form className="grid grid-cols-2 gap-2" onSubmit={handleSubmit}>
          <InputField
            id="equipment_id"
            label="Equipment ID"
            placeholder="Enter Equipment ID"
            value={equipmentID}
            onChange={(e) => setEquipmentID(e.target.value)}
          />
          <InputField
            id="equipment_name"
            label="Equipment Name"
            placeholder="Enter Equipment Name"
            value={equipmentName}
            onChange={(e) => setEquipmentName(e.target.value)}
          />
          <InputField
            id="type_of_scope"
            label="Type of Scope"
            placeholder="Enter Type of Scope"
            value={typeOfScope}
            onChange={(e) => setTypeOfScope(e.target.value)}
          />
          <InputField
            id="description"
            label="Description"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <InputField
            id="tag_id"
            label="Tag ID"
            placeholder="Enter Tag ID"
            value={tagID}
            onChange={(e) => setTagID(e.target.value)}
          />
          <InputField
            id="model"
            label="Model"
            placeholder="Enter Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <InputField
            id="serial_number"
            label="Serial Number"
            placeholder="Enter Serial Number"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
          />
          <InputField
            id="type"
            label="Type"
            placeholder="Enter Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <div className="col-span-2">
            <label
              htmlFor="range_type"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Range Type
            </label>
            <select
              id="range_type"
              value={rangeType}
              onChange={handleRangeTypeChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
            >
              <option value="">Select Range Type</option>
              {Object.keys(rangeOptions).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>
          <InputField
            id="range_min"
            label="Range (Min)"
            placeholder="Min Range"
            value={rangeMin}
            onChange={(e) => setRangeMin(e.target.value)}
          />
          <InputField
            id="range_max"
            label="Range (Max)"
            placeholder="Max Range"
            value={rangeMax}
            onChange={(e) => setRangeMax(e.target.value)}
          />
          <InputField
            id="traceability"
            label="Traceability"
            placeholder="Enter Traceability"
            value={traceability}
            onChange={(e) => setTraceability(e.target.value)}
          />
          <div></div>
          <div></div>
          <div className="flex items-end justify-end">
            <Button label="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipmentModal;
