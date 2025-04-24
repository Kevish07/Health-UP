import React from 'react';
import HeroSection from '../components/dashboard/HeroSection';
import StatsSection from '../components/dashboard/StatsSection';

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
    </div>
  );
};

export default Dashboard;