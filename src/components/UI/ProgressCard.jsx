import { motion } from 'framer-motion'

function ProgressCard({ percentage, title }) {
  const radius = 35
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <motion.div 
      className="absolute top-[500px] right-8 w-[180px] p-4 bg-white rounded-2xl shadow-md z-10 flex flex-col items-center md:fixed md:bottom-8 md:top-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay: 0.8,
        duration: 0.5,
        type: "spring",
        stiffness: 120 
      }}
    >
      <div className="flex items-center gap-2 mb-2 w-full">
        <span className="text-xl">🔥</span>
        <h3 className="text-base font-semibold m-0">{title}</h3>
      </div>
      
      <div className="my-2">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#e2e8f0"
            strokeWidth="8"
            fill="none"
          />
          
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#3a9e78"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, delay: 1 }}
            transform="rotate(-90, 50, 50)"
          />
          
          <text
            x="50"
            y="50"
            fontSize="18"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {percentage}%
          </text>
        </svg>
      </div>
      
      <div className="text-sm text-gray-500 mt-1">
        <span>Complete</span>
      </div>
    </motion.div>
  )
}

export default ProgressCard
