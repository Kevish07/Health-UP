"use client"

import { motion } from "framer-motion"
import { Dumbbell, Heart, User, MonitorIcon as Running } from "lucide-react"

export default function ExerciseCard({ exercise, index, onViewExercise }) {
  // Function to render the appropriate icon based on the exercise type
  const renderIcon = () => {
    switch (exercise.iconType) {
      case "dumbbell":
        return <Dumbbell className={`h-6 w-6 ${exercise.iconColor}`} />
      case "running":
        return <Running className={`h-6 w-6 ${exercise.iconColor}`} />
      case "user":
        return <User className={`h-6 w-6 ${exercise.iconColor}`} />
      case "heart":
        return <Heart className={`h-6 w-6 ${exercise.iconColor}`} />
      default:
        return <Dumbbell className={`h-6 w-6 ${exercise.iconColor}`} />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-lg ${exercise.iconBg}`}>{renderIcon()}</div>
        <div>
          <h3 className="text-lg font-bold text-gray-800">{exercise.name}</h3>
          <p className="text-sm text-gray-500">{exercise.category}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-2 mb-4">
        <div>
          <p className="text-xs text-gray-500">Difficulty:</p>
          <p className="text-sm font-medium text-gray-700">{exercise.difficulty}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Equipment:</p>
          <p className="text-sm font-medium text-gray-700">{exercise.equipment}</p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onViewExercise(exercise)}
        className="w-full py-2 text-center border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium"
      >
        View Exercise
      </motion.button>
    </motion.div>
  )
}
