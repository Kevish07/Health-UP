import React from 'react';

const StatCard = ({ icon, value, label }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="flex items-center">
        <div className="p-2 bg-emerald-50 rounded-full">
          {icon}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        <p className="text-gray-600">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;