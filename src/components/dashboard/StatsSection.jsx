import React from "react";
import { FiUsers, FiActivity, FiAward, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    {
      icon: <FiUsers />,
      value: "2M+",
      label: "Active Users",
      color: "#3a9e78",
    },
    {
      icon: <FiActivity />,
      value: "500+",
      label: "Workout Routines",
      color: "#3a9e78",
    },
    {
      icon: <FiAward />,
      value: "100+",
      label: "Monthly Challenges",
      color: "#3a9e78",
    },
    {
      icon: <FiGlobe />,
      value: "50+",
      label: "Countries",
      color: "#3a9e78",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      className="py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto px-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm hover:-translate-y-1 hover:shadow-md transition duration-300 ease-in-out"
            variants={itemVariants}
          >
            <div
              className="text-4xl flex items-center justify-center"
              style={{ color: stat.color }}
            >
              {stat.icon}
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold leading-snug">{stat.value}</h2>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default StatsSection;
