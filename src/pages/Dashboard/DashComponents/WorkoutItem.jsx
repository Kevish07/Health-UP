import React from "react";
import { Play } from "lucide-react";

const WorkoutItem = ({ icon, title, time, duration, iconBg, index }) => {
  return (
    <div
      className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 workout-item card-container"
      style={{ animationDelay: `${300 + index * 100}ms` }}
    >
      <div className="flex items-center">
        <div
          className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center mr-4`}
        >
          {icon}
        </div>

        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-500">
            {time} • {duration}
          </p>
        </div>
      </div>

      <button className="play-button">
        <Play size={16} />
      </button>
    </div>
  );
};

export default WorkoutItem;
