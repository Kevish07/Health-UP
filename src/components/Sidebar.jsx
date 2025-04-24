import React, { useState } from 'react';
import { Activity, BarChart2, Dumbbell, Utensils, Users, Trophy, House, } from 'lucide-react';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const links = [
    { id: 'home', label: 'Home', icon: House },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart2 },
    { id: 'workouts', label: 'Workouts', icon: Dumbbell },
    { id: 'nutrition', label: 'Nutrition', icon: Utensils },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'challenges', label: 'Challenges', icon: Trophy },
  ];

  const handleNavigation = (linkId) => {
    setActiveLink(linkId);
    // You can add additional navigation logic here
  };

  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 flex flex-col pt-16 ">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center">
          <Activity className="h-6 w-6 text-emerald-600" />
          <span className="ml-2 text-xl font-semibold text-emerald-600">FitTrack</span>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {links.map(({ id, label, icon: Icon }) => (
          <div
            key={id}
            onClick={() => handleNavigation(id)}
            className={`flex items-center px-4 py-3 text-gray-700 rounded-lg cursor-pointer transition-all duration-200 
              ${activeLink === id ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-gray-100'}`}
          >
            <Icon className={`h-5 w-5 ${activeLink === id ? 'text-emerald-600' : 'text-gray-500'}`} />
            <span className={`ml-3 ${activeLink === id ? 'font-medium' : ''}`}>{label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;