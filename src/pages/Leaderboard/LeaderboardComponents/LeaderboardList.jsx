import React from 'react';
import LeaderboardItem from './LeaderboardItem';

const LeaderboardList = ({ users }) => {
  return (
    <div className="space-y-4 animate-fade-in">
      {users.map((user, index) => (
        <LeaderboardItem
          key={user.id}
          user={user}
          rank={index + 1}
        />
      ))}
    </div>
  );
};

export default LeaderboardList;