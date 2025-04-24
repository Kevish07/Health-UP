import React from 'react'
import App from './App'
import Landing from './pages/Landing/Landing.jsx'
import Workouts from './pages/pages/Workouts/Workouts.jsx'
import Nutrition from './pages/pages/Nutrition/Nutrition.jsx'
import Community from './pages/pages/Community/Community.jsx'
import Challenges from './pages/pages/Challenges/Challenges.jsx'

export default function Layout() {
  return (
    <App>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/community" element={<Community />} />
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
    </App>
  )
}