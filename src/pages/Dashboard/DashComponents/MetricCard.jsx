import React, { useEffect, useState } from "react";

const MetricCard = ({ title, value, goalValue, icon, color, unit, index }) => {
  const [progress, setProgress] = useState(0);

  // Extract numeric parts for calculation
  const valueNum = parseFloat(value.replace(/,/g, ""));
  const goalNum = parseFloat(goalValue.replace(/,/g, ""));
  const percentage = Math.min((valueNum / goalNum) * 100, 100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 300 + index * 150); // Staggered animation

    return () => clearTimeout(timer);
  }, [percentage, index]);

  // Map color to classes
  const colorClasses = {
    blue: "bg-[linear-gradient(90deg,_#4263EB_0%,_#5E81FF_100%)]",
    orange: "bg-gradient-to-r from-[#FF6B00] to-[#FF9F5A]",
    purple: "bg-gradient-to-r from-[#8A3FFC] to-[#A66BFF]",
    teal: "bg-gradient-to-r from-[#00A3A1] to-[#39C6C4]",
  };

  // Map color to background classes
  const bgClasses = {
    blue: "bg-blue-100",
    orange: "bg-orange-100",
    purple: "bg-purple-100",
    teal: "bg-teal-100",
  };

  // Map color to text classes
  const textClasses = {
    blue: "text-blue-600",
    orange: "text-orange-600",
    purple: "text-purple-600",
    teal: "text-teal-600",
  };

  return (
    <div
      className="bg-white p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md relative overflow-hidden translate-y-5 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-600 font-medium">{title}</span>
        <div
          className={`w-8 h-8 rounded-full ${bgClasses[color]} flex items-center justify-center ${textClasses[color]}`}
        >
          {icon}
        </div>
      </div>

      <div className="mb-4">
        <span className="text-3xl font-bold">{value}</span>
        <span className="text-lg ml-1">{unit}</span>
      </div>

      <div className="relative h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${colorClasses[color]} transition-all duration-1000 ease-out`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="mt-2 text-sm text-gray-500">
        Goal: {goalValue} {unit}
      </div>
    </div>
  );
};

export default MetricCard;
