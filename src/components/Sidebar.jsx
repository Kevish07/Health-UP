import React, { useState } from "react";
import {
  Activity,
  BarChart2,
  Dumbbell,
  Utensils,
  Users,
  Trophy,
  House,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleNavigation = (linkId) => {
    setActiveLink(linkId);
    // You can add additional navigation logic here
  };

  const navItems = [
    { name: "Home", id: "home", path: "/", icon: House },
    { name: "Workouts", id: "workouts", path: "/workouts", icon: Dumbbell },
    { name: "Nutrition", id: "nutrition", path: "/nutrition", icon: Utensils },
    { name: "Community", id: "community", path: "/community", icon: Users },
    { name: "Challenges", id: "challenges", path: "/challenges", icon: Trophy },
    { name: "Dashboard", id: "dashboard", path: "/profile", icon: BarChart2 },
  ];
  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 flex flex-col pt-16 ">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center">
          <Activity className="h-6 w-6 text-emerald-600" />
          <span className="ml-2 text-xl font-semibold text-emerald-600">
            FitTrack
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map(({ name, id, path, icon: Icon }) => (
          <Link
            to={path}
            key={id}
          >
            <div
              onClick={() => handleNavigation(id)}
              className={`flex items-center px-4 py-3 text-gray-700 rounded-lg cursor-pointer transition-all duration-200 
              ${
                activeLink === id
                  ? "bg-emerald-50 text-emerald-600"
                  : "hover:bg-gray-100"
              }`}
            >
              <Icon
                className={`h-5 w-5 ${
                  activeLink === id ? "text-emerald-600" : "text-gray-500"
                }`}
              />
              <span
                className={`ml-3 ${activeLink === id ? "font-medium" : ""}`}
              >
                {name}
              </span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
