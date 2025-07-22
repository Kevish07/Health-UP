import React from "react";
import HeroSection from "./dashboard/HeroSection";
import StatsSection from "./dashboard/StatsSection";
import ProgressCard from "../../components/UI/ProgressCard.jsx";
import { motion } from "framer-motion";
import ScrollLanding from "./main/ScrollLanding.jsx";

const Landing = () => {
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
        <HeroSection />
        <StatsSection />
        <ScrollLanding />
        <ProgressCard percentage={78} title="Today's Progress" />
      </motion.div>
    </div>
  );
};

export default Landing;
