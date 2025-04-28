import React from 'react';
import { Trophy } from 'lucide-react';

const Header = () => {
  return (
    <header className="text-center mb-12">
      <div className="flex justify-center items-center mb-4">
        <Trophy className="w-10 h-10 text-indigo-600 mr-2" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 inline-flex">
          Global Leaderboards
        </h1>
      </div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Compete with fitness enthusiasts worldwide and track your ranking.
      </p>
    </header>
  );
};

export default Header;
