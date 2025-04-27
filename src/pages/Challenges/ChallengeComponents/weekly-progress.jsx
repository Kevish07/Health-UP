"use client"

import { motion } from "framer-motion"

export default function WeeklyProgress() {
  const days = [
    { day: "Mon", progress: 100, completed: true },
    { day: "Tue", progress: 100, completed: true },
    { day: "Wed", progress: 100, completed: true },
    { day: "Thu", progress: 60, completed: false, isToday: true },
    { day: "Fri", progress: 0, completed: false },
    { day: "Sat", progress: 0, completed: false },
    { day: "Sun", progress: 0, completed: false },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="rounded-lg bg-gray-50 p-6"
    >
      <h3 className="text-xl font-bold text-gray-800">Weekly Progress</h3>

      <div className="mt-4 space-y-3">
        {days.map((day, index) => (
          <div key={day.day} className="flex items-center gap-3">
            <span className="w-10 text-gray-600">{day.day}</span>
            <div className="relative h-2.5 flex-1 rounded-full bg-gray-200">
              <motion.div
                className={`absolute left-0 top-0 h-full rounded-full ${
                  day.completed ? "bg-purple-600" : day.isToday ? "bg-purple-400" : "bg-gray-300"
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${day.progress}%` }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
              />
            </div>
            {day.completed && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-green-600"
              >
                ✓
              </motion.div>
            )}
            {day.isToday && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-sm text-purple-600"
              >
                Today
              </motion.div>
            )}
            {!day.completed && !day.isToday && <div className="text-gray-300">-</div>}
          </div>
        ))}
      </div>
    </motion.div>
  )
}
