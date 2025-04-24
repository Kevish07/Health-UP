import React, { useState } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import NavLink from './NavLink';
import { BarChart2, Dumbbell, Utensils, Users, Trophy } from 'lucide-react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
      >
        <Menu className="h-6 w-6" />
      </button>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50">
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl transform transition-all duration-300">
            <div className="flex justify-between items-center p-6 border-b">
              <div className="flex items-center">
                <Activity className="h-6 w-6 text-emerald-600" />
                <span className="ml-2 text-xl font-semibold text-emerald-600">FitTrack</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="px-4 py-6 space-y-2">
              <NavLink icon={<BarChart2 />} label="Dashboard" active />
              <NavLink icon={<Dumbbell />} label="Workouts" />
              <NavLink icon={<Utensils />} label="Nutrition" />
              <NavLink icon={<Users />} label="Community" />
              <NavLink icon={<Trophy />} label="Challenges" />
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;