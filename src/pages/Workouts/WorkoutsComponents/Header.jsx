"use client"

import { motion } from "framer-motion"
import { Search, Plus } from "lucide-react"

export default function Header({ searchQuery, setSearchQuery, onCreateWorkout }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800"
        >
          Workout Library
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 mt-1"
        >
          Explore our collection of expert-crafted workouts and exercise tutorials
        </motion.p>
      </div>

      <div className="flex mt-4 md:mt-0 w-full md:w-auto gap-2">
        <div className="relative flex-grow md:flex-grow-0 md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search workouts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onCreateWorkout}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-300"
        >
          <Plus size={18} />
          <span>Create Workout</span>
        </motion.button>
      </div>
    </div>
  )
}
