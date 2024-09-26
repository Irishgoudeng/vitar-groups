"use client";

import { useState } from "react";

import AddCustomerInfo from "@/app/components/Customers/AddCustomerInfo";
// import AddSiteInfo from "@/app/components/Customers/AddSiteInfo";
// import AddEquipmentInfo from "@/app/components/Customers/AddEquipmentInfo";

import CustomerTabs from "@/app/components/Customers/CustomersTabs"; // Ensure this imports the updated Tabs component

const AddCustomerPage = () => {
  const [activeTab, setActiveTab] = useState<string>("custInfo");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "custInfo":
        return <AddCustomerInfo onNext={() => setActiveTab("siteInfo")} />;
      // case "siteInfo":
      //   return <AddSiteInfo onNext={() => setActiveTab("equipInfo")} onPrevious={() => setActiveTab("custInfo")} />;
      // case "equipInfo":
      //   return <AddEquipmentInfo onPrevious={() => setActiveTab("siteInfo")} />;
      default:
        return <AddCustomerInfo onNext={() => setActiveTab("siteInfo")} />;
    }
  };

  // Define which tabs should be disabled
  const disabledTabs = {
    siteInfo: activeTab !== "custInfo", // Disable Site Information tab unless Customer Info is completed
    equipInfo: activeTab !== "siteInfo", // Disable Equipment Information tab unless Site Info is completed
  };

  return (
    <div className="p-6 lg:p-12 bg-white min-h-screen">
      <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 lg:mb-8">
        Add New Customer
      </h1>

      {/* Tab Navigation */}
      <CustomerTabs
        tabs={[
          { label: "Customer Information", key: "custInfo" },
          { label: "Site Information", key: "siteInfo" },
          { label: "Equipment Information", key: "equipInfo" },
        ]}
        activeTab={activeTab}
        onTabClick={setActiveTab}
        disabledTabs={disabledTabs} // Pass the disabled tabs here
      />

      {/* Render the active tab content */}
      <div className="mt-4 lg:mt-8">{renderActiveTab()}</div>
    </div>
  );
};

export default AddCustomerPage;
