"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Sample list of technicians and customers for demonstration
const technicians = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Emily Johnson" },
];

const customers = [
  { id: 1, name: "Customer A" },
  { id: 2, name: "Customer B" },
  { id: 3, name: "Customer C" },
];

const equipmentOptions = [
  { id: 1, name: "Hammer" },
  { id: 2, name: "Screwdriver" },
  { id: 3, name: "Drill" },
];

const AddJobPage: React.FC = () => {
  const [jobId, setJobId] = useState(1000);
  const [customer, setCustomer] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [location, setLocation] = useState({
    city: "",
    province: "",
    street: "",
    locationName: "",
    isGated: false,
    notes: "",
  });
  const [technician, setTechnician] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);
  const [priority, setPriority] = useState("Low");
  const router = useRouter();

  const handleCustomerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCustomer = customers.find(
      (c) => c.id === parseInt(e.target.value)
    );
    setCustomer(selectedCustomer ? selectedCustomer.name : "");
  };

  const handleContactNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContactNumber(e.target.value);
  };

  const handleLocationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLocation((prev) => ({ ...prev, [name]: value }));
  };

  // const handleGatedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setLocation((prev) => ({ ...prev, isGated: e.target.checked }));
  // };

  const handleTechnicianChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTechnician(e.target.value);
  };

  const handleDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  const handleEquipmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const equipmentId = e.target.value;
    if (selectedEquipment.includes(equipmentId)) {
      setSelectedEquipment(
        selectedEquipment.filter((id) => id !== equipmentId)
      );
    } else {
      setSelectedEquipment([...selectedEquipment, equipmentId]);
    }
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      jobId,
      customer,
      contactNumber,
      location,
      technician,
      startDate,
      endDate,
      estimatedTime,
      equipment: selectedEquipment,
      priority,
    });
    setJobId((prev) => prev + 1);
    router.push("/dashboard/jobs");
  };

  return (
    <div className="p-6 lg:p-12 bg-white min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">Add Job</h1>
      <div className="space-y-6 text-black">
        <div>
          <label
            htmlFor="jobId"
            className="block text-sm font-medium text-gray-700"
          >
            Job ID (Auto-incremented)
          </label>
          <input
            type="text"
            id="jobId"
            value={jobId}
            readOnly
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div>
          <label
            htmlFor="customer"
            className="block text-sm font-medium text-gray-700"
          >
            Customer
          </label>
          <select
            id="customer"
            value={customer}
            onChange={handleCustomerChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Customer</option>
            {customers.map((cust) => (
              <option key={cust.id} value={cust.id}>
                {cust.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="contactNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={handleContactNumberChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={location.city}
            onChange={handleLocationChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
          />
          <input
            type="text"
            name="province"
            placeholder="Province"
            value={location.province}
            onChange={handleLocationChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={location.street}
            onChange={handleLocationChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
          />
          <input
            type="text"
            name="locationName"
            placeholder="Location Name"
            value={location.locationName}
            onChange={handleLocationChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
          />
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="isGated"
              checked={location.isGated}
              onChange={(e) =>
                setLocation({ ...location, isGated: e.target.checked })
              }
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="isGated" className="ml-2 text-sm text-gray-700">
              Is this a gated community?
            </label>
          </div>
          <textarea
            name="notes"
            placeholder="Notes"
            value={location.notes}
            onChange={handleLocationChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label
            htmlFor="technician"
            className="block text-sm font-medium text-gray-700"
          >
            Technician
          </label>
          <select
            id="technician"
            value={technician}
            onChange={handleTechnicianChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Technician</option>
            {technicians.map((tech) => (
              <option key={tech.id} value={tech.name}>
                {tech.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-700"
          >
            Start Date
          </label>
          <input
            type="datetime-local"
            id="startDate"
            value={startDate}
            onChange={(e) => handleDateChange(e, setStartDate)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-gray-700"
          >
            End Date
          </label>
          <input
            type="datetime-local"
            id="endDate"
            value={endDate}
            onChange={(e) => handleDateChange(e, setEndDate)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label
            htmlFor="estimatedTime"
            className="block text-sm font-medium text-gray-700"
          >
            Estimated Time
          </label>
          <input
            type="text"
            id="estimatedTime"
            value={estimatedTime}
            onChange={(e) => setEstimatedTime(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Priority
          </label>
          <select
            value={priority}
            onChange={handlePriorityChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="Low">Low</option>
            <option value="High">High</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Equipment Needed (Select multiple)
          </label>
          <div className="mt-1 grid grid-cols-1 gap-4 md:grid-cols-2">
            {equipmentOptions.map((equip) => (
              <div key={equip.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`equipment-${equip.id}`}
                  value={equip.name}
                  onChange={handleEquipmentChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label
                  htmlFor={`equipment-${equip.id}`}
                  className="ml-2 text-sm text-gray-700"
                >
                  {equip.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            onClick={handleSubmit}
          >
            Add Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddJobPage;
