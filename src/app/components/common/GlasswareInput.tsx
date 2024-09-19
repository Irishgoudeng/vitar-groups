"use client";

import React, { useEffect, useState } from "react";

const GlasswareInput = () => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) {
    // Avoid rendering dynamic parts until the component is mounted on the client
    return null;
  }

  return (
    <div className="p-4">
      <form>
        {/* Description text Area */}
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-none"
            placeholder="Enter a description"
            required
          />
        </div>
        <div className="pt-8 mb-6 xl:ml xl:pt-12 ">
          <h1 className="text-md xl:text-3xl font-bold  text-black">
            Delivery Time (Only for Burette, Graduated Pipette & One Mark
            Pipette)
          </h1>
        </div>

        <div className="grid gap-4 mb-6 grid-cols-1 md:grid-cols-4">
          <div>
            <label
              htmlFor="time_1"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Time 1 (S):
            </label>
            <input
              type="text"
              id="time_1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="N/A"
              required
            />
          </div>

          <div>
            <label
              htmlFor="time_2"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Time 2 (S):
            </label>
            <input
              type="text"
              id="time_2"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="N/A"
              required
            />
          </div>

          <div>
            <label
              htmlFor="time_3"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Time 3 (S) :
            </label>
            <input
              type="text"
              id="time_3"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="N/A"
              required
            />
          </div>

          <div>
            <label
              htmlFor="average"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Average (S):
            </label>
            <input
              type="text"
              id="average"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="N/A"
              required
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GlasswareInput;
