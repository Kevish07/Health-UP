import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

const Header = () => {
  const date = new Date();
  const options = { month: "long", day: "numeric", year: "numeric" }
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(date.toLocaleDateString("en-US",options));
  }, [date]);

  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-2xl font-bold text-gray-800">Today's Overview</h1>
      <div className="flex items-center gap-2 text-gray-600">
        <span>{currentDate}</span>
        <Calendar size={20} className="text-blue-600" />
      </div>
    </div>
  );
};

export default Header;
