"use client"

import { motion } from "framer-motion"

export default function ProgramDetailsModal({ program, onClose, onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="bg-white rounded-xl p-0 max-w-2xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={program.image || "/placeholder.svg"} alt={program.title} className="w-full h-64 object-cover" />

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{program.title}</h2>
              <div className="flex gap-2 mt-2">
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
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${program.premium ? "bg-green-500 text-white" : "bg-blue-500 text-white"}`}
                >
                  {program.premium ? "Premium" : "Free"}
                </span>
              </div>
            </div>

            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
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

          <p className="text-gray-600 mb-6">{program.description}</p>

          <div className="flex items-center gap-3 mb-6">
            <img
              src={program.coachAvatar || "/placeholder.svg"}
              alt={program.coach}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm text-gray-500">Coach</p>
              <p className="font-medium text-gray-800">{program.coach}</p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="font-bold text-gray-800 mb-4">Program Overview</h3>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-gray-700">Structured workouts for {program.weeks} weeks</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-gray-700">Video tutorials for all exercises</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-gray-700">Progress tracking and analytics</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-gray-700">Community support and coaching</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 rounded-lg font-medium ${
                program.premium
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              } transition-colors`}
              onClick={onStart}
            >
              {program.premium ? "Unlock Premium Program" : "Start Free Program"}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
