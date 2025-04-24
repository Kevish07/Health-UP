import React, { ReactNode } from 'react';


const NavLink = ({ icon, label, active = false }) => {
  return (
    <div 
      className={`flex items-center px-4 py-3 text-gray-700 rounded-lg cursor-pointer transition-all duration-200 
        ${active ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-gray-100'}`}
    >
      <div className={`${active ? 'text-emerald-600' : 'text-gray-500'}`}>
        {icon}
      </div>
      <span className={`ml-3 ${active ? 'font-medium' : ''}`}>{label}</span>
    </div>
  );
};

export default NavLink;