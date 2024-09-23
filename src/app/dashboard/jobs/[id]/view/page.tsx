"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const JobDetailsPage: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("summary");

  // Sample data for demonstration purposes
  const job = {
    id: "1",
    technician: "John Doe",
    customer: "Jane Smith",
    jobID: "#JOB-001",
    equipmentUsed: "Pressure Gauge",
    dateTime: "2024-09-23T10:30:00",
    status: "Completed",
    notes: "Job completed successfully. All checks passed.",
    images: ["image1.jpg", "image2.jpg"], // Add image paths
    location: { lat: 34.0522, lng: -118.2437 }, // Sample coordinates
    schedule: {
      startTime: "2024-09-23T10:00:00",
      endTime: "2024-09-23T11:00:00",
    },
  };

  const renderContent = () => {
    switch (activeTab) {
      case "summary":
        return (
          <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
            <h2 className="text-xl font-semibold mb-2">Job Summary</h2>
            <p className="text-gray-600">
              <strong>Technician:</strong> {job.technician}
            </p>
            <p className="text-gray-600">
              <strong>Customer:</strong> {job.customer}
            </p>
            <p className="text-gray-600">
              <strong>Date & Time:</strong>{" "}
              {new Date(job.dateTime).toLocaleString()}
            </p>
            <p className="text-gray-600">
              <strong>Status:</strong>{" "}
              <span className="text-green-500">{job.status}</span>
            </p>
            <p className="text-gray-600">
              <strong>Equipment Used:</strong> {job.equipmentUsed}
            </p>
            <p className="text-gray-600">
              <strong>Technician Notes:</strong> {job.notes}
            </p>
          </div>
        );

      case "scheduling":
        return (
          <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
            <h2 className="text-xl font-semibold mb-2">Job Scheduling</h2>
            <p className="text-gray-600">
              <strong>Start Time:</strong>{" "}
              {new Date(job.schedule.startTime).toLocaleString()}
            </p>
            <p className="text-gray-600">
              <strong>End Time:</strong>{" "}
              {new Date(job.schedule.endTime).toLocaleString()}
            </p>
          </div>
        );

      case "location":
        return (
          <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
            <h2 className="text-xl font-semibold mb-2">Job Location</h2>
            <div className="h-64 w-full bg-gray-300">
              {" "}
              {/* Replace with map component */}
              {/* Integrate a map here using a library like react-leaflet or Google Maps */}
              <p className="text-gray-600">
                Map showing location: Latitude {job.location.lat}, Longitude{" "}
                {job.location.lng}
              </p>
            </div>
          </div>
        );

      case "images":
        return (
          <div className="bg-gray-100 p-4 rounded-lg shadow mb-4">
            <h2 className="text-xl font-semibold mb-2">Job Images</h2>
            <div className="grid grid-cols-2 gap-4">
              {job.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Job Image ${index + 1}`}
                  className="h-32 object-cover rounded"
                />
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 lg:p-12 bg-white min-h-screen text-black">
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">Job Details</h1>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab("summary")}
          className={`px-4 py-2 rounded ${
            activeTab === "summary" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Job Summary
        </button>
        <button
          onClick={() => setActiveTab("scheduling")}
          className={`px-4 py-2 rounded ${
            activeTab === "scheduling"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Job Scheduling
        </button>
        <button
          onClick={() => setActiveTab("location")}
          className={`px-4 py-2 rounded ${
            activeTab === "location" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Job Location
        </button>
        <button
          onClick={() => setActiveTab("images")}
          className={`px-4 py-2 rounded ${
            activeTab === "images" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Job Images
        </button>
      </div>

      {/* Render active tab content */}
      {renderContent()}

      <div className="mt-6">
        <button
          onClick={() => router.push("/dashboard/jobs")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Jobs
        </button>
      </div>
    </div>
  );
};

export default JobDetailsPage;
