import React, { useState } from 'react';
import LeaderboardHeader from './LeaderboardComponents/LeaderboardHeader';
import LeaderboardList from './LeaderboardComponents/LeaderboardList';
import { generateLeaderboardData } from './data/leaderboardData';

function Leaderboard() {
  const [period, setPeriod] = useState('weekly');
  const leaderboardData = generateLeaderboardData(period);

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <LeaderboardHeader 
          period={period} 
          onPeriodChange={setPeriod} 
        />
        <LeaderboardList users={leaderboardData} />
      </div>
    </div>
  );
}

export default Leaderboard;
