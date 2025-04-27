import React from 'react';
import { UserStats as UserStatsType } from '../types';
import { Users, Clock, Calendar } from 'lucide-react';



const UserStats = ({ stats }) => {
  const statsItems = [
    {
      icon: <Users size={20} className="text-[#8957FF]" />,
      label: 'Connected Users',
      value: stats.connectedUsers,
    },
    {
      icon: <Clock size={20} className="text-[#F39C12]" />,
      label: 'Pending Requests',
      value: stats.pendingRequests,
    },
    {
      icon: <Calendar size={20} className="text-[#2ECC71]" />,
      label: 'Workout Matches',
      value: stats.workoutMatches,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm animate-fade-in">
      <h2 className="text-xl font-semibold mb-6">Your Stats</h2>
      
      <div className="space-y-4">
        {statsItems.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between p-4 rounded-lg bg-gray-50 transition-all duration-300 hover:bg-gray-100 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="text-gray-600">{item.label}</span>
            </div>
            <span className="text-xl font-bold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStats;