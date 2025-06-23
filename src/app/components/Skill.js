import React from 'react';

const Skill = ({ icon, name, level }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg transition-transform transform hover:scale-105">
      <div className="text-4xl">{icon}</div>
      <div className="w-full">
        <div className="flex justify-between mb-1">
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm font-medium text-white">{level}</p>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-orange-500 h-2.5 rounded-full"
            style={{ width: level }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Skill;