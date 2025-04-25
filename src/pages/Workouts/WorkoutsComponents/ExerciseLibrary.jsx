"use client"

import { motion } from "framer-motion"
import { Filter, ArrowUpDown } from "lucide-react"
import ExerciseCard from "./ExerciseCard"

export default function ExerciseLibrary({ exercises, onViewExercise }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Exercise Library</h2>

        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Filter size={16} />
            <span>Filter</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <ArrowUpDown size={16} />
            <span>Sort</span>
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={exercise.id} exercise={exercise} index={index} onViewExercise={onViewExercise} />
        ))}
      </div>
    </motion.div>
  )
}
