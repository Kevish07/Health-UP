"use client"

import { motion } from "framer-motion"

export default function ProgramCard({ program, index, onViewProgram }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
    >
      <div className="relative">
        <img src={program.image || "/placeholder.svg"} alt={program.title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              program.premium ? "bg-green-500 text-white" : "bg-blue-500 text-white"
            }`}
          >
            {program.premium ? "Premium" : "Free"}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex gap-2 mb-3">
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
            {program.weeks} Weeks
          </span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              program.level === "Beginner"
                ? "bg-green-100 text-green-700"
                : program.level === "Intermediate"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-red-100 text-red-700"
            }`}
          >
            {program.level}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{program.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={program.coachAvatar || "/placeholder.svg"}
              alt={program.coach}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-gray-700">{program.coach}</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onViewProgram(program)}
            className="text-green-500 hover:text-green-700 text-sm font-medium transition-colors"
          >
            View Program
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
