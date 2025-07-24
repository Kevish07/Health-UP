import React, { useState, useEffect } from 'react';

const WeeklyActivity = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const [activeDay, setActiveDay] = useState(3); // Thursday is active
  const [loadedBars, setLoadedBars] = useState(Array(7).fill(false));

  // Animate bars sequentially
  useEffect(() => {
    days.forEach((_, index) => {
      setTimeout(() => {
        setLoadedBars(prev => {
          const newBars = [...prev];
          newBars[index] = true;
          return newBars;
        });
      }, 150 * index);
    });
  }, []);

  // Fake data for the activity chart
  const activityData = [65, 40, 75, 85, 60, 30, 50];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8 translate-y-5 animate-fade-in-up">
      <h2 className="text-xl font-semibold mb-6">Weekly Activity</h2>
      
      <div className="flex justify-between items-end h-48">
        {days.map((day, index) => (
          <div 
            key={day}
            className="flex flex-col items-center cursor-pointer transition-all duration-200 hover:opacity-90"
            onClick={() => setActiveDay(index)}
          >
            <div className="relative w-14 h-36 flex items-end">
              <div 
                className={`w-6 rounded-t-md mx-auto ${index === activeDay ? 'bg-blue-600' : 'bg-blue-200'} transition-all duration-300`}
                style={{ 
                  height: loadedBars[index] ? `${activityData[index]}%` : '0%',
                  transition: 'height 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              ></div>
              
              {index === activeDay && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                  {activityData[index]}% active
                </div>
              )}
            </div>
            
            <span className={`mt-2 text-sm ${index === activeDay ? 'font-medium text-blue-600' : 'text-gray-500'}`}>
              {day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyActivity;