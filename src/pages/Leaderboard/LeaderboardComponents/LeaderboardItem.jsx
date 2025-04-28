import React from 'react';
import { TrendingUp, TrendingDown, Crown } from 'lucide-react';

const LeaderboardItem = ({ user, rank }) => {
  const { name, avatar, points, workouts, change, isCurrentUser } = user;

  return (
    <div
      className={`transform transition-all duration-500 hover:scale-102 ${
        isCurrentUser ? 'bg-indigo-50 border-l-4 border-indigo-500' : 'bg-white'
      } rounded-xl p-4 mb-4 shadow-sm hover:shadow-md animate-slide-in`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${
              rank === 1 ? 'bg-yellow-100' : 
              rank === 2 ? 'bg-gray-100' : 
              rank === 3 ? 'bg-amber-100' : 'bg-gray-50'
            }`}>
              {rank === 1 && <Crown className="w-6 h-6 text-yellow-500 animate-pulse" />}
              {rank !== 1 && <span className="text-lg font-bold text-gray-700">{rank}</span>}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={avatar} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm hover:scale-110 transition-transform duration-300" 
            />
            {isCurrentUser && (
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
            )}
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800">
              {name}
              {isCurrentUser && <span className="text-sm text-indigo-600 ml-2">(You)</span>}
            </h3>
            <div className="flex items-center text-sm text-gray-500 space-x-2">
              <span className="font-medium text-amber-600">
                {points.toLocaleString()} pts
              </span>
              <span>•</span>
              <span>{workouts} workouts</span>
            </div>
          </div>
        </div>
        
        {change !== 0 && (
          <div className={`flex items-center ${
            change > 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            {change > 0 ? (
              <TrendingUp className="w-5 h-5 mr-1" />
            ) : (
              <TrendingDown className="w-5 h-5 mr-1" />
            )}
            <span className="font-medium">{Math.abs(change)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderboardItem;