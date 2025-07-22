import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Link } from "react-router";

export default function MealHeader({ onAddNewMeal }) {
  return (
    <div className="flex justify-between items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-800"
      >
        Nutrition Tracker
      </motion.h1>
      <Link to="/profile">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-300 cursor-pointer"
        >
          <Plus size={18} />
          <span>Add New Meal</span>
        </motion.button>
      </Link>
    </div>
  );
}
