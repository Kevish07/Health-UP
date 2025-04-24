import React from 'react';
import { Flame } from 'lucide-react';

const ProgressIndicator = ({ progress }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
      <div className="flex items-center">
        <div className="bg-orange-100 p-2 rounded-full">
          <Flame className="h-5 w-5 text-orange-500" />
        </div>
        <div className="ml-3">
          <p className="text-xs text-gray-500 font-medium">Today's Progress</p>
          <p className="font-bold text-lg text-gray-800">{progress}% Complete</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;