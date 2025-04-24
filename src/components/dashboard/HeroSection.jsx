import React from 'react';
import { Play } from 'lucide-react';
import ProgressIndicator from './ProgressIndicator';

const HeroSection = ({SidebarToggle}) => {
  return (
    <div className="relative bg-emerald-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Track, <span className="text-emerald-600">Improve</span>,
              <br />
              <span className="text-emerald-600">Transform</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Your all-in-one fitness companion for tracking workouts, nutrition,
              and connecting with a community that keeps you motivated.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={SidebarToggle} className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg shadow-md hover:bg-emerald-700 transition-all duration-200 cursor-pointer">
                Get Started
              </button>
              <button className="px-6 py-3 bg-white text-emerald-600 font-medium rounded-lg shadow-sm border border-emerald-200 hover:bg-emerald-50 transition-all duration-200 flex items-center cursor-pointer">
                <Play className="h-4 w-4 mr-2" />
                How it works
              </button>
            </div>
          </div>
          
          {/* Right content - Phone mockup */}
          <div className="relative flex justify-center">
            <img
              src="https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Fitness app on smartphone"
              className="rounded-xl shadow-2xl max-w-full h-auto object-cover"
            />
            
            {/* Progress indicator */}
            <div className="absolute -bottom-6 right-0 md:right-10">
              <ProgressIndicator progress={78} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;