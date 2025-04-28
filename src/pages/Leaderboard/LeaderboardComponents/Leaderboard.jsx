import React from 'react';
import LeaderboardItem from './LeaderboardItem';
import UserRanking from './UserRanking';
import { LeaderboardData } from '../types';

const Leaderboard = ({ 
  title, 
  period, 
  tag, 
  tagColor, 
  data, 
  userRank, 
  userPoints,
  userTag,
  userTagColor
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">{period}</span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColor}`}>
              {tag}
            </span>
          </div>
        </div>
        <div className="space-y-4">
          {data.map((item, index) => (
            <LeaderboardItem 
              key={index}
              rank={index + 1}
              data={item}
              isTop={index < 3}
            />
          ))}
        </div>
      </div>
      <UserRanking 
        rank={userRank} 
        points={userPoints} 
        tag={userTag}
        tagColor={userTagColor}
      />
    </div>
  );
};

export default Leaderboard;