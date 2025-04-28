import React from 'react';
import WorkoutItem from './WorkoutItem';
import { Dumbbell, FileWarning as Running, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

const UpcomingWorkouts = () => {
  const workouts = [
    {
      title: 'Upper Body Strength',
      time: 'Today, 5:30 PM',
      duration: '45 min',
      icon: <Dumbbell size={18} className="text-red-600" />,
      iconBg: 'bg-red-100'
    },
    {
      title: '5K Training Run',
      time: 'Tomorrow, 7:00 AM',
      duration: '30 min',
      icon: <Running size={18} className="text-blue-600" />,
      iconBg: 'bg-blue-100'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm opacity-0 translate-y-5 animate-fade-in-up">
      <h2 className="text-xl font-semibold mb-6">Upcoming Workouts</h2>
      
      <div className="space-y-4">
        {workouts.map((workout, index) => (
          <WorkoutItem
            key={workout.title}
            title={workout.title}
            time={workout.time}
            duration={workout.duration}
            icon={workout.icon}
            iconBg={workout.iconBg}
            index={index}
          />
        ))}
      </div>
      
      <div className="mt-6">
        <Link
          to="/workouts" 
          className="text-green-600 font-medium flex items-center hover:text-green-700 transition-colors duration-200"
        >
          View all workouts
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default UpcomingWorkouts;