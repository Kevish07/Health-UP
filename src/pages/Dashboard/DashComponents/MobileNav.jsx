import React, { useState } from 'react';
import { 
  BarChart3, Activity, Utensils, Weight, 
  Moon, Settings, Menu, X, LineChart
} from 'lucide-react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const navItems = [
    { icon: <LineChart size={20} />, label: 'Overview', active: true },
    { icon: <Activity size={20} />, label: 'Activity' },
    { icon: <Utensils size={20} />, label: 'Nutrition' },
    { icon: <Weight size={20} />, label: 'Weight' },
    { icon: <Moon size={20} />, label: 'Sleep' },
    { icon: <Settings size={20} />, label: 'Settings' }
  ];

  return (
    <div className="md:hidden">
      <button 
        onClick={toggleMenu} 
        className="fixed top-4 right-4 z-50 bg-white p-2 rounded-full shadow-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 p-6">
          <div className="flex items-center mt-8 mb-8">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <Activity size={24} />
            </div>
            <span className="ml-2 text-xl font-semibold">FitTrack</span>
          </div>
          
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className={`flex items-center p-3 rounded-lg ${
                  item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
          
          <div className="mt-auto p-4 bg-blue-50 rounded-lg absolute bottom-6 left-6 right-6">
            <h3 className="font-medium text-sm text-blue-700">Premium Active</h3>
            <p className="text-xs text-gray-600 mt-1">Your plan renews on May 24, 2025</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;