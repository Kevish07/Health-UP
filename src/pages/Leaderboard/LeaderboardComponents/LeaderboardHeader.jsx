import React from 'react';
import { Medal } from 'lucide-react';

const LeaderboardHeader = ({ period, onPeriodChange }) => {
  return (
    <header className="text-center mb-12 animate-fade-in">
      <div className="flex justify-center items-center mb-6">
        <Medal className="w-12 h-12 text-indigo-600 animate-pulse-slow" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 ml-3">
          Fitness Elite
        </h1>
      </div>
      
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => onPeriodChange('weekly')}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            period === 'weekly'
              ? 'bg-indigo-600 text-white shadow-lg scale-105'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          This Week
        </button>
        <button
          onClick={() => onPeriodChange('monthly')}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            period === 'monthly'
              ? 'bg-indigo-600 text-white shadow-lg scale-105'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          This Month
        </button>
      </div>
      
      <p className="text-gray-600 max-w-2xl mx-auto">
        Compete with the best and track your progress among elite fitness enthusiasts.
        {period === 'weekly' ? ' Updated weekly.' : ' Monthly rankings available.'}
      </p>
    </header>
  );
};

export default LeaderboardHeader;