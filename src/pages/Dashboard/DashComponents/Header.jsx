import React from 'react';
import { Calendar } from 'lucide-react';


const Header = ({ date }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-2xl font-bold text-gray-800">Today's Overview</h1>
      <div className="flex items-center gap-2 text-gray-600">
        <span>{date}</span>
        <Calendar size={20} className="text-blue-600" />
      </div>
    </div>
  );
};

export default Header;