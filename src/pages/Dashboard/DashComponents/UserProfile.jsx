import React from 'react';


const UserProfile = ({ name, status, avatar }) => {
  return (
    <div className="flex items-center mb-8">
      <img 
        src={avatar} 
        alt={name} 
        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" 
      />
      <div className="ml-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500">{status}</p>
      </div>
    </div>
  );
};

export default UserProfile;