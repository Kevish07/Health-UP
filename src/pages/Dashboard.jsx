import React from 'react';
import HeroSection from '../components/dashboard/HeroSection';
import StatsSection from '../components/dashboard/StatsSection';

const Dashboard = ({SidebarToggle}) => {
  return (
    <div className="flex flex-col">
      <HeroSection SidebarToggle={SidebarToggle}/>
      <StatsSection />
    </div>
  );
};

export default Dashboard;