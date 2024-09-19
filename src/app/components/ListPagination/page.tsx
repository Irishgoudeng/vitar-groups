/* eslint-disable react/no-unescaped-entities */
import React from "react";

const ListPagination: React.FC = () => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-xl xl:mx-4 xl:py-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-600 dark:text-gray-300">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-800 bg-gray-200">
          Latest Calibrations
        </caption>
        <thead className="text-xs text-black uppercase bg-gray-100 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Calibration ID
            </th>
            <th scope="col" className="px-6 py-3">
              Equipment Name
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Technician
            </th>
            <th scope="col" className="px-6 py-3">
              Next Due
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap text-black"
            >
              #CAL-1234
            </th>
            <td className="px-6 py-4 text-black">Pressure Gauge</td>
            <td className="px-6 py-4 text-gray-400">24th June, 2024</td>
            <td className="px-6 py-4 text-black">John Doe</td>
            <td className="px-6 py-4 text-gray-400">24th June, 2024</td>
            <td className="px-6 py-4 text-black rounded-sm">
              {" "}
              <span className="rounded-lg bg-green-300 xl:p-1">Completed</span>
            </td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-500 dark:text-blue-400 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListPagination;
