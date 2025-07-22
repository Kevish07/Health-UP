"use client"

import { motion } from "framer-motion"
import ProgramCard from "./ProgramCard"

export default function FeaturedPrograms({ programs, onViewProgram }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.85 }}
      className="mt-12"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Programs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <ProgramCard key={program.id} program={program} index={index} onViewProgram={onViewProgram} />
        ))}
      </div>
    </motion.div>
  )
}
