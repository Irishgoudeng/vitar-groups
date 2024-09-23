"use client";

import React, { useState } from "react";
import dayjs from "dayjs";
import CalendarModal from "../../components/CalendarModal/page"; // Import your Modal component

const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type Activity = {
  time: string;
  description: string;
};

type Activities = {
  [key: string]: Activity[];
};

const generateCalendar = (year: number, month: number) => {
  const startOfMonth = dayjs(new Date(year, month, 1));
  const endOfMonth = startOfMonth.endOf("month");
  const startDate = startOfMonth.startOf("week");
  const endDate = endOfMonth.endOf("week");

  const calendar = [];
  let currentDate = startDate;

  while (currentDate.isBefore(endDate)) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(currentDate);
      currentDate = currentDate.add(1, "day");
    }
    calendar.push(week);
  }

  return calendar;
};

const CalendarActivitiesPage: React.FC = () => {
  const today = dayjs();
  const [currentYear, setCurrentYear] = useState(today.year());
  const [currentMonth, setCurrentMonth] = useState(today.month());
  const [activities, setActivities] = useState<Activities>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const calendar = generateCalendar(currentYear, currentMonth);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateClick = (date: dayjs.Dayjs) => {
    setSelectedDate(date.format("YYYY-MM-DD"));
    setIsModalOpen(true);
  };

  const handleModalSubmit = (time: string, description: string) => {
    const newActivities = {
      ...activities,
      [selectedDate]: [
        ...(activities[selectedDate] || []),
        { time, description },
      ],
    };
    setActivities(newActivities);
  };

  return (
    <div className="p-4  lg:p-12 bg-white min-h-screen text-black">
      <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 my-8">
        Calendar of Activities
      </h1>

      {/* Month and Year Navigation */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="px-4 py-2 bg-red-500 text-white rounded shadow-md"
        >
          Previous
        </button>
        <div className="text-lg lg:text-xl font-semibold">
          {dayjs(new Date(currentYear, currentMonth)).format("MMMM YYYY")}
        </div>
        <button
          onClick={handleNextMonth}
          className="px-4 py-2 bg-red-500 text-white rounded shadow-md"
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {daysInWeek.map((day) => (
          <div key={day} className="text-center font-bold text-gray-700">
            {day}
          </div>
        ))}
        {calendar.map((week, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {week.map((date) => {
              const dateString = date.format("YYYY-MM-DD");
              const isWeekend = date.day() === 0 || date.day() === 6;
              return (
                <div
                  key={dateString}
                  onClick={() => handleDateClick(date)} // Open modal on click
                  className={`border border-gray-300 p-2 relative flex flex-col justify-between h-32 cursor-pointer ${
                    isWeekend ? "bg-red-100" : "bg-white"
                  }`}
                >
                  <div
                    className={`font-semibold ${
                      isWeekend ? "text-red-600" : "text-black"
                    }`}
                  >
                    {date.date()}
                  </div>
                  {activities[dateString] && (
                    <div className="absolute top-0 right-0 bg-red-200 rounded-full px-1 text-xs">
                      {activities[dateString].length}
                    </div>
                  )}
                  {activities[dateString]?.map((activity, index) => (
                    <div key={index} className="text-xs text-gray-600">
                      <span className="font-medium">{activity.time}:</span>{" "}
                      {activity.description}
                    </div>
                  ))}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>

      {/* Modal for adding new activity */}
      <CalendarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
};

export default CalendarActivitiesPage;
