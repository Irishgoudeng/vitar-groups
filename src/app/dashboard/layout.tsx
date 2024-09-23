// layout.tsx
import React from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 ">
        {/* Navbar */}
        <Navbar />

        {/* Main Page Content */}
        <main className=" ">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
