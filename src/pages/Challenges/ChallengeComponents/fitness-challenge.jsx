import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Clock, Flame, Trophy, Video } from "lucide-react"
import StreakCounter from "./streak-counter"
import WeeklyProgress from "./weekly-progress"
import { Button } from "../../../components/UI/button"

export default function FitnessChallenge() {
  const [isStarted, setIsStarted] = useState(false)
  const [timer, setTimer] = useState(0)
  const [personalBest, setPersonalBest] = useState(60)
  const [currentStreak, setCurrentStreak] = useState(45)
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    // Format current date as "Month Day, Year"
    const date = new Date()
    const options = { month: "long", day: "numeric", year: "numeric" }
    setCurrentDate(date.toLocaleDateString("en-US", options))

    let interval

    if (isStarted) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isStarted])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleStartChallenge = () => {
    setIsStarted(true)
  }

  const handleEndChallenge = () => {
    setIsStarted(false)

    // Update personal best if current time is better
    if (timer > personalBest) {
      setPersonalBest(timer)
    }
    // Reset timer
    setTimer(0)
    // Increment streak
    setCurrentStreak((prev) => prev + 1)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto my-auto w-full rounded-xl p-6 shadow-lg"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Left Column - Challenge Details */}
        <div className="md:col-span-2">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">Today&apos;s Challenge</h1>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">{currentDate}</span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">Day 45</span>
            </div>
          </div>

          {/* Challenge Image and Title */}
          <motion.div
            className="relative mt-4 overflow-hidden rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative h-80 w-full">
              <img
                src="https://tushtoners.com/wp-content/uploads/elementor/thumbs/454-qccsyc1rip5ektoz5wrv8e0061ohubrlhoznvncef0.jpg"
                alt="Person doing plank exercise"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h2 className="text-3xl font-bold">Perfect Plank Challenge</h2>
                <p className="mt-2 max-w-lg">Master the perfect plank form and hold it for as long as you can!</p>
              </div>
            </div>
          </motion.div>

          {/* Challenge Stats */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <motion.div
              className="flex items-center gap-3 rounded-lg bg-purple-50 p-4"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="rounded-full bg-purple-200 p-2">
                <Clock className="h-5 w-5 text-purple-700" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Duration</h3>
                <p className="font-semibold text-gray-800">{isStarted ? formatTime(timer) : "Hold for max time"}</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 rounded-lg bg-orange-50 p-4"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="rounded-full bg-orange-200 p-2">
                <Flame className="h-5 w-5 text-orange-700" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Difficulty</h3>
                <p className="font-semibold text-gray-800">Intermediate</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 rounded-lg bg-amber-50 p-4"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="rounded-full bg-amber-200 p-2">
                <Trophy className="h-5 w-5 text-amber-700" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Points</h3>
                <p className="font-semibold text-gray-800">100 pts</p>
              </div>
            </motion.div>
          </div>

          {/* Instructions - Simplified */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800">Instructions</h3>
            <div className="mt-4 space-y-3">
              {[
                "Start in a push-up position with your forearms on the ground",
                "Keep your body straight from head to heels",
                "Hold as long as possible with proper form",
              ].map((instruction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-sm font-medium text-purple-800">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{instruction}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tips - Simplified */}
          <div className="mt-8 ">
            <h3 className="text-xl font-bold text-gray-800">Tips</h3>
            <div className="mt-4 space-y-2">
              {["Keep your neck neutral by looking at the floor", "Don't let your hips sag or lift"].map(
                (tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </div>
                    <p className="text-gray-700">{tip}</p>
                  </motion.div>
                ),
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4">
            {!isStarted ? (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                <Button
                  onClick={handleStartChallenge}
                  className="w-full bg-purple-600 py-6 text-lg text-white font-medium hover:bg-purple-700"
                >
                  Start Challenge
                </Button>
              </motion.div>
            ) : (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                <Button
                  onClick={handleEndChallenge}
                  className="w-full bg-red-600 py-6 text-lg text-white font-medium hover:bg-red-700"
                >
                  End Challenge ({formatTime(timer)})
                </Button>
              </motion.div>
            )}

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="flex items-center gap-2 py-6">
                <Video className="h-5 w-5" />
                Watch Tutorial
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Stats */}
        <div className="space-y-8">
          {/* Streak */}
          <StreakCounter streak={currentStreak} personalBest={personalBest} />

          {/* Weekly Progress */}
          <WeeklyProgress />
        </div>
      </div>
    </motion.div>
  )
}
