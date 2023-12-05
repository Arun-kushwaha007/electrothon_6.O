 // src/components/Gallery.js
import React from 'react';
import { tabData } from './Tabs_Data';
import { man_demo } from '../../assets/images';

const Gallery = ({ activeTab }) => {
  const filteredData = tabData[activeTab] || [];

  return (
    <div className="container  w-full h-full mt-12 mb-12">
      {filteredData.map((data, index) => (
        <div key={index} className="mb-4 sm:mb-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* 1st div - Content */}
          <div className=" p-4">
            <p className="text-white">{data.name}</p>
          </div>
          {/* 2nd div - Image */}
          <div >
            <img src={man_demo} alt={`Image 1`} className="w-full h-40 object-cover" />
          </div>
          {/* 3rd div - Image */}
          <div >
            <img src={man_demo} alt={`Image 2`} className="w-full h-40 object-cover" />
          </div>
          {/* 4th div - Text */}
          <div className="  p-4 mt-4 ">
            <p className="text-white">{data.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
