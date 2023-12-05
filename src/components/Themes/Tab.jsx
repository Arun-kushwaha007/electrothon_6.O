// src/components/Tabs.js
import React from 'react';

const Tabs = ({ activeTab, onTabClick }) => {
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3']; // Add tab names as needed

  return (
    <div className="flex">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`cursor-pointer py-2 px-4 ${
            activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => onTabClick(index)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
