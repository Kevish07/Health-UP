import React from 'react';
import { Bell, User } from 'lucide-react';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile navigation */}
          <div className="md:hidden">
            <MobileNav />
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-emerald-600 px-3 py-2 text-sm font-medium border-b-2 border-emerald-600">
              Dashboard
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              Workouts
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              Nutrition
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              Community
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              Challenges
            </a>
          </div>
          
          {/* Right elements */}
          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
              <Bell className="h-6 w-6" />
            </button>
            <div className="relative">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="User avatar"
              />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-green-400"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;