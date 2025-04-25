import { motion } from "framer-motion"

export default function RecentMeals({ meals }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white p-6 rounded-lg shadow-sm"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Meals</h2>

      <div className="space-y-4">
        {meals.map((meal, index) => (
          <MealItem key={meal.id} meal={meal} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

function MealItem({ meal, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
    >
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl mr-4">
          {meal.icon}
        </div>
        <div>
          <h3 className="font-medium text-gray-800">{meal.type}</h3>
          <p className="text-sm text-gray-500">{meal.time}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium text-gray-800">{meal.calories} cal</p>
        <p className="text-sm text-gray-500">{meal.items} items</p>
      </div>
    </motion.div>
  )
}
