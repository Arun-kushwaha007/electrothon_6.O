// AboutSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { chamkadar } from '../../assets/images';

const AboutSection = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Content on the left */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className=" p-8"
        style={{width:"65%"}}
      >
        <h1 className="text-4xl font-bold mb-4 text-white">About Us</h1>
        <p className="text-lg text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>

      {/* Image on the right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
         style={{width:"35%"}}
      >
        <img
          src={chamkadar}// Replace with your actual image source
          alt="About Image"
          className="w-3/4 h-full object-cover ml-auto mr-16"
        />
      </motion.div>
    </div>
  );
};

export default AboutSection;
