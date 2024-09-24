// layout.tsx
import React from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className=" xl:ml-64">
        {/* Navbar */}
        <Navbar />

        {/* Main Page Content */}
        <main className=" ">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
