import React from 'react';
import Header from './DashComponents/Header';
import UserProfile from './DashComponents/UserProfile';
import MetricsGrid from './DashComponents/MetricsGrid';
import WeeklyActivity from './DashComponents/WeeklyActivity';
import UpcomingWorkouts from './DashComponents/UpcomingWorkouts';

function Dashboard() {
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <UserProfile 
        name="Sarah Johnson" 
        status="Premium Member" 
        avatar="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" 
      />
      
      <Header />
      
      <MetricsGrid />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WeeklyActivity />
        <UpcomingWorkouts />
      </div>
    </div>
  )
}

export default Dashboard