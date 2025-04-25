"use client"

import { motion } from "framer-motion"
import { Dumbbell, Clock, Flame, Trophy } from "lucide-react"

export default function Stats({ stats }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
    >
      <StatCard
        icon={<Dumbbell className="h-6 w-6 text-green-600" />}
        bgColor="bg-green-100"
        value={stats.totalWorkouts}
        label="Total Workouts"
      />

      <StatCard
        icon={<Clock className="h-6 w-6 text-blue-600" />}
        bgColor="bg-blue-100"
        value={`${stats.totalDuration} hrs`}
        label="Total Duration"
      />

      <StatCard
        icon={<Flame className="h-6 w-6 text-orange-600" />}
        bgColor="bg-orange-100"
        value={stats.caloriesBurned.toLocaleString()}
        label="Calories Burned"
      />

      <StatCard
        icon={<Trophy className="h-6 w-6 text-amber-600" />}
        bgColor="bg-amber-100"
        value={stats.achievements}
        label="Achievements"
      />
    </motion.div>
  )
}

function StatCard({ icon, bgColor, value, label }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4"
    >
      <div className={`p-3 ${bgColor} rounded-full`}>{icon}</div>
      <div>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </motion.div>
  )
}
