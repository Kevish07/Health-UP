import React from 'react';
import Leaderboard from './Leaderboard';
import { weeklyData, monthlyData } from '../data/leaderboardData';

const LeaderboardsContainer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Leaderboard 
        title="Weekly Champions"
        period="April 20 - 27, 2025"
        tag="Week 16"
        tagColor="bg-green-100 text-green-800"
        data={weeklyData}
        userRank={24}
        userPoints={8450}
        userTag="Top 5%"
        userTagColor="bg-green-100 text-green-800"
      />
      <Leaderboard 
        title="Monthly Masters"
        period="April 2025"
        tag="Month 4"
        tagColor="bg-purple-100 text-purple-800"
        data={monthlyData}
        userRank={18}
        userPoints={32450}
        userTag="Top 3%"
        userTagColor="bg-purple-100 text-purple-800"
      />
    </div>
  );
};

export default LeaderboardsContainer;