"use client"

import { motion } from "framer-motion"
import { Dumbbell, Heart, User, MonitorIcon as Running } from "lucide-react"

export default function ExerciseDetailsModal({ exercise, onClose, onAddToWorkout, onWatchTutorial }) {
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-green-100/50  flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="bg-white rounded-xl p-6 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-lg ${exercise.iconBg}`}>{renderIcon()}</div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">{exercise.name}</h2>
              <p className="text-sm text-gray-500">{exercise.category}</p>
            </div>
          </div>

          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-y-4 mb-6">
          <div>
            <p className="text-xs text-gray-500">Difficulty:</p>
            <p className="text-sm font-medium text-gray-700">{exercise.difficulty}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Equipment:</p>
            <p className="text-sm font-medium text-gray-700">{exercise.equipment}</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-medium text-gray-800 mb-2">Instructions</h3>
          <p className="text-gray-600 text-sm">{exercise.instructions}</p>
        </div>

        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium cursor-pointer"
            onClick={onAddToWorkout}
          >
            Add to Workout
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium cursor-pointer"
            onClick={onWatchTutorial}
          >
            Watch Tutorial
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
