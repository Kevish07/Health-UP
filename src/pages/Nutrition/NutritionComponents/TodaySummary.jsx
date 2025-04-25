import { motion } from "framer-motion"

export default function TodaySummary({ summary }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white p-6 rounded-lg shadow-sm"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-6">Today's Summary</h2>

      <div className="space-y-6">
        <NutrientProgress
          label="Calories"
          current={summary.calories.current}
          target={summary.calories.target}
          color="bg-green-500"
        />

        <NutrientProgress
          label="Protein"
          current={summary.protein.current}
          target={summary.protein.target}
          color="bg-blue-500"
          unit="g"
        />

        <NutrientProgress
          label="Carbs"
          current={summary.carbs.current}
          target={summary.carbs.target}
          color="bg-amber-500"
          unit="g"
        />

        <NutrientProgress
          label="Fat"
          current={summary.fat.current}
          target={summary.fat.target}
          color="bg-red-500"
          unit="g"
        />
      </div>
    </motion.div>
  )
}

function NutrientProgress({ label, current, target, color, unit = "" }) {
  const percentage = Math.min(Math.round((current / target) * 100), 100)

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-700">{label}</span>
        <span className="font-medium">
          {current}
          {unit} / {target}
          {unit}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`h-2.5 rounded-full ${color}`}
        ></motion.div>
      </div>
    </div>
  )
}
