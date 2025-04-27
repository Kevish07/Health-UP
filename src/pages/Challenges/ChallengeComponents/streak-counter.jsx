"use client"

import { motion } from "framer-motion"
import { Trophy } from "lucide-react"

export default function StreakCounter({ streak, personalBest }) {
  // Calculate percentage for the circle
  const percentage = (streak / 100) * 100
  const circumference = 2 * Math.PI * 50
  const offset = circumference - (percentage / 100) * circumference

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="rounded-lg bg-gray-50 p-6"
    >
      <h3 className="text-xl font-bold text-gray-800">Your Streak</h3>

      <div className="mt-4 flex flex-col items-center">
        <div className="relative flex h-36 w-36 items-center justify-center">
          <svg width="140" height="140" viewBox="0 0 120 120" className="rotate-[-90deg]">
            <circle cx="60" cy="60" r="50" fill="none" stroke="#e2e8f0" strokeWidth="10" />
            <motion.circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="10"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <motion.div
                key={streak}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-5xl font-bold text-purple-600"
              >
                {streak}
              </motion.div>
            </motion.div>
            <span className="text-gray-500">Days</span>
          </div>
        </div>

        <motion.div
          key={personalBest}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-2 text-amber-600"
        >
          <Trophy className="h-5 w-5" />
          <span className="font-medium">Personal Best: {personalBest} days</span>
        </motion.div>
      </div>
    </motion.div>
  )
}
