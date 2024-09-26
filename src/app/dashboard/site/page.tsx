"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Site } from "@/app/types/Site"; // Define the Site type
import AddSiteModal from "@/app/components/Site/AddSiteModal";

// Define the initial site data
const initialSites: Site[] = [
  {
    id: "1",
    customerID: "C001",
    customerName: "John Doe",
    siteID: "S001",
    siteName: "Site A",
    street1: "123 Main St",
    street2: "",
    street3: "",
    city: "New York",
    postcode: "10001",
    country: "USA",
    latitude: "40.7128",
    longitude: "-74.0060",
  },
  {
    id: "2",
    customerID: "C002",
    customerName: "Jane Smith",
    siteID: "S002",
    siteName: "Site B",
    street1: "456 Elm St",
    street2: "",
    street3: "",
    city: "Los Angeles",
    postcode: "90001",
    country: "USA",
    latitude: "34.0522",
    longitude: "-118.2437",
  },
  {
    id: "3",
    customerID: "C003",
    customerName: "Emily Johnson",
    siteID: "S003",
    siteName: "Site C",
    street1: "789 Pine St",
    street2: "",
    street3: "",
    city: "Chicago",
    postcode: "60601",
    country: "USA",
    latitude: "41.8781",
    longitude: "-87.6298",
  },
];

const SitePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [sites, setSites] = useState<Site[]>(initialSites);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>(
    {}
  );

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const router = useRouter();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleDelete = (siteId: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this site?");
    if (confirmDelete) {
      setSites(sites.filter((site) => site.siteID !== siteId));
      console.log(`Site with ID ${siteId} deleted`);
      router.push(`/dashboard/sites`);
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

  const handleAddSite = (newSite: Site) => {
    setSites((prev) => [...prev, newSite]); // Add new site to the list
  };

  const filteredSites = sites.filter((site) => {
    const matchesSearch = site.siteName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" ||
      site.city.toLowerCase().includes(selectedFilter.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  const toggleDropdown = (siteId: string) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [siteId]: !prev[siteId],
    }));
  };

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
        Sites
      </h1>
      <div className="mb-6 flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="flex gap-4 mb-4 lg:mb-0">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by site name..."
            className="px-4 py-2 border border-gray-300 rounded-lg text-black"
          />
          <select
            value={selectedFilter}
            onChange={handleFilter}
            className="px-4 py-2 border border-gray-300 rounded-lg text-black"
          >
            <option value="all">All Cities</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
          </select>
        </div>
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Add Site
        </button>
      </div>

      {/* Table for larger screens */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-600 bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                Site ID
              </th>
              <th scope="col" className="px-6 py-3">
                Site Name
              </th>
              <th scope="col" className="px-6 py-3">
                Street 1
              </th>
              <th scope="col" className="px-6 py-3">
                Street 2
              </th>
              <th scope="col" className="px-6 py-3">
                Street 3
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                Postcode
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
              <th scope="col" className="px-6 py-3">
                Latitude
              </th>
              <th scope="col" className="px-6 py-3">
                Longitude
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredSites.length > 0 ? (
              filteredSites.map((site) => (
                <tr key={site.siteID} className="border-b border-gray-200">
                  <td className="px-6 py-4">{site.siteID}</td>
                  <td className="px-6 py-4">{site.siteName}</td>
                  <td className="px-6 py-4">{site.street1}</td>
                  <td className="px-6 py-4">{site.street2}</td>
                  <td className="px-6 py-4">{site.street3}</td>
                  <td className="px-6 py-4">{site.city}</td>
                  <td className="px-6 py-4">{site.postcode}</td>
                  <td className="px-6 py-4">{site.country}</td>
                  <td className="px-6 py-4">{site.latitude}</td>
                  <td className="px-6 py-4">{site.longitude}</td>
                  <td className="px-6 py-4 relative">
                    <button
                      className="text-gray-500 hover:underline"
                      onClick={() => toggleDropdown(site.siteID)}
                    >
                      &#x2022;&#x2022;&#x2022; {/* Three dots */}
                    </button>
                    <div
                      ref={(el) => {
                        if (el) {
                          dropdownRefs.current[site.siteID] = el;
                        } else {
                          delete dropdownRefs.current[site.siteID];
                        }
                      }}
                      className={`absolute right-0 w-48 bg-white border border-gray-200 rounded shadow-lg ${
                        dropdownOpen[site.siteID] ? "block" : "hidden"
                      } z-10`}
                      style={{
                        top: "100%", // Position it directly below the button
                        marginTop: "0.25rem", // Add a small gap from the button
                      }}
                    >
                      <button
                        onClick={() => handleDelete(site.siteID)}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={11} className="text-center text-gray-500">
                  No site found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <AddSiteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddSite={handleAddSite}
      />
    </div>
  );
};

export default SitePage;
