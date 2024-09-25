"use client";

interface Tab {
  label: string;
  key: string;
}

interface SettingsTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (key: string) => void;
}

const SettingsTabs: React.FC<SettingsTabsProps> = ({
  tabs,
  activeTab,
  onTabClick,
}) => {
  return (
    <div className="flex space-x-4 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabClick(tab.key)}
          className={`pb-2 px-4 ${
            activeTab === tab.key
              ? "border-b-2 border-red-600 text-red-600 font-semibold"
              : "text-gray-600"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default SettingsTabs;
