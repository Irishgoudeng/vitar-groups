// app/dashboard/CalibrationCards.tsx
import React from "react";

const CalibrationCards: React.FC = () => {
  return (
    <div className="flex flex-4 gap-6 xl:ml-4 xl:mt-16 mx-8">
      {/* Card 1 */}
      <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <h1 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
          Total Calibrations Completed
        </h1>
        <h2 className="mb-2 text-4xl font-bold tracking-tight text-gray-900">
          125
        </h2>
        <p className="font-normal text-green-500">+ 5.2%</p>
      </div>

      {/* Card 2 */}
      <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <h1 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
          Equipment Pending Calibration
        </h1>
        <h2 className="mb-2 text-4xl font-bold tracking-tight text-gray-900">
          45
        </h2>
        <p className="font-normal text-red-500">- 2.3%</p>
      </div>

      {/* Card 3 */}
      <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <h1 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
          Upcoming Calibration Schedules
        </h1>
        <h2 className="mb-2 text-4xl font-bold tracking-tight text-gray-900">
          30
        </h2>
        <p className="font-normal text-blue-500">+ 1.5%</p>
      </div>

      {/* Card 4 */}
      <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <h1 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
          Equipment Out of Service
        </h1>
        <h2 className="mb-2 text-4xl font-bold tracking-tight text-gray-900">
          10
        </h2>
        <p className="font-normal text-yellow-500">- 0.8%</p>
      </div>
    </div>
  );
};

export default CalibrationCards;
