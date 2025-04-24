import React from "react";
import HeroSection from "../../components/dashboard/HeroSection";
import StatsSection from "../../components/dashboard/StatsSection";
import ProgressCard from "../../components/UI/ProgressCard.jsx";
import { motion } from "framer-motion";

const Landing = ({ SidebarToggle }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className="flex-col flex-1 overflow-y-auto flex justify-center items-center ">
      <motion.div
        className="dashboard"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <HeroSection SidebarToggle={SidebarToggle} />
        <StatsSection />

        <ProgressCard percentage={78} title="Today's Progress" />
      </motion.div>
    </div>
  );
};

export default Landing;
