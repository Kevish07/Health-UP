import React from 'react';
import { Users, Dumbbell, Trophy, Globe } from 'lucide-react';
import StatCard from './StatCard';

const StatsSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={<Users className="h-6 w-6 text-emerald-600" />}
          value="2M+"
          label="Active Users"
        />
        <StatCard 
          icon={<Dumbbell className="h-6 w-6 text-emerald-600" />}
          value="500+"
          label="Workout Routines"
        />
        <StatCard 
          icon={<Trophy className="h-6 w-6 text-emerald-600" />}
          value="100+"
          label="Monthly Challenges"
        />
        <StatCard 
          icon={<Globe className="h-6 w-6 text-emerald-600" />}
          value="50+"
          label="Countries"
        />
      </div>
    </div>
  );
};

export default StatsSection;