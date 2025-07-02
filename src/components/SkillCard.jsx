import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillCard = ({ icon, label }) => (
  <div className="flex flex-col items-center justify-center mt-16 bg-gray-800 rounded-lg p-8 border-2 border-transparent hover:border-blue-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
    <FontAwesomeIcon icon={icon} size="4x" className="text-blue-300" />
    <h2 className="text-2xl font-bold text-white mt-4">{label}</h2>
  </div>
);

export default SkillCard;
