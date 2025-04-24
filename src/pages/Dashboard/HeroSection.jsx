import { FiPlay } from 'react-icons/fi'
import { motion } from 'framer-motion'
import './HeroSection.css'

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="hero-section">
      <div className="hero-content-wrapper">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="hero-title">
            Track, <span className="text-regular">Improve,</span>
            <br />
            <span className="text-primary">Transform</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-description">
            Your all-in-one fitness companion for tracking workouts, nutrition, 
            and connecting with a community that keeps you motivated.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-actions">
            <button className="btn btn-primary get-started-btn">
              Get Started
            </button>
            <button className="btn btn-secondary how-it-works-btn">
              <FiPlay className="btn-icon" /> How it works
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="hero-image-container">
        <img 
          src="https://images.pexels.com/photos/4116172/pexels-photo-4116172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Person holding a smartphone showing fitness tracking app" 
          className="hero-image"
        />
      </div>
    </section>
  )
}

export default HeroSection