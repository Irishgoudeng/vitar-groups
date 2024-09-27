"use client";

import React, { useState } from "react";
import InputField from "@/app/components/common/InputField";
import Button from "@/app/components/common/Button";
import { SpecificEquipment } from "@/app/types/SpecificEquipment";

interface AddSpecificEquipmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddEquipment: (equipment: SpecificEquipment) => void; // Use SpecificEquipment type
  scopeLabel: string; // New prop to set the scope label
}

const AddSpecificEquipmentModal: React.FC<AddSpecificEquipmentModalProps> = ({
  isOpen,
  onClose,
  onAddEquipment,
  scopeLabel, // Destructure the new prop
}) => {
  const [description, setDescription] = useState("");
  const [tagID, setTagID] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [type, setType] = useState("");
  const [range, setRange] = useState("");
  const [certificateNo, setCertificateNo] = useState("");
  const [traceability, setTraceability] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Since id is auto-incremented, we omit it here
    const newEquipment: Omit<SpecificEquipment, "id"> = {
      description,
      scope: scopeLabel, // Use the passed scope label
      tagID,
      make,
      model,
      serialNumber,
      type,
      range,
      certificateNo,
      traceability,
    };

    onAddEquipment(newEquipment as SpecificEquipment);
    onClose(); // Close modal after adding
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg xl:max-w-5xl relative transform transition-transform duration-300 ease-in-out scale-100 hover:scale-105">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-600 focus:outline-none transition duration-200"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Add {scopeLabel} Equipment
        </h2>
        <form className="grid grid-cols-2 gap-2" onSubmit={handleSubmit}>
          <InputField
            id="description"
            label="Description"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <InputField
            id="scope"
            label={scopeLabel} // Use scopeLabel for the scope input
            placeholder={`Will depend on ${scopeLabel}`}
            value={scopeLabel} // Set the value to scopeLabel
            onChange={() => {}} // No need for onChange since it's static
            // Disable the field if it's static
          />
          <InputField
            id="tag_id"
            label="Tag ID"
            placeholder="Enter Tag ID"
            value={tagID}
            onChange={(e) => setTagID(e.target.value)}
          />
          <InputField
            id="make"
            label="Make"
            placeholder="Enter Make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
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
          <InputField
            id="range"
            label="Range"
            placeholder="Enter Range"
            value={range}
            onChange={(e) => setRange(e.target.value)}
          />
          <InputField
            id="certificate_no"
            label="Certificate No."
            placeholder="Enter Certificate No."
            value={certificateNo}
            onChange={(e) => setCertificateNo(e.target.value)}
          />
          <InputField
            id="traceability"
            label="Traceability"
            placeholder="Enter Traceability"
            value={traceability}
            onChange={(e) => setTraceability(e.target.value)}
          />
          <div></div>
          <div className="flex items-end justify-end">
            <Button label="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSpecificEquipmentModal;
