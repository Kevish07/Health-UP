import { motion } from 'framer-motion'
import HeroSection from './HeroSection.jsx'
import StatsSection from './StatsSection.jsx'
import ProgressCard from '../../components/UI/ProgressCard.jsx'
import './Dashboard.css'

function Dashboard() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  return (
    <motion.div
      className="dashboard"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <HeroSection />
      <StatsSection />
      
      {/* Progress card positioned absolutely */}
      <ProgressCard 
        percentage={78} 
        title="Today's Progress" 
      />
    </motion.div>
  )
}

export default Dashboard