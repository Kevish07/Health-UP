import React from 'react';


const UserRanking = ({ rank, points, tag, tagColor }) => {
  return (
    <div className="border-t border-gray-100 p-4 flex items-center justify-between bg-gray-50">
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full ${tagColor.replace('bg-', 'bg-').replace('text-', '')} flex items-center justify-center font-bold`}>
          {rank}
        </div>
        <div className="ml-4">
          <h3 className="font-semibold text-gray-800">Your Rank</h3>
          <div className="flex items-center">
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${tagColor}`}>
              {tag}
            </span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <span className="font-semibold text-gray-800">{points.toLocaleString()} points</span>
      </div>
    </div>
  );
};

export default UserRanking;