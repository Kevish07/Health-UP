import { useState } from "react"
import Header from "./MealHeader"
import LogMealForm from "./LogMealForm"
import TodaySummary from "./TodaySummary"
import QuickAdd from "./QuickAdd"
import RecentMeals from "./RecentMeals"

export default function NutritionTracker() {
  // State for meal logging form
  const [mealForm, setMealForm] = useState({
    mealType: "Breakfast",
    dateTime: "",
    foodItem: "",
    servingSize: "",
    unit: "grams",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  })

  // State for nutrition summary
  const [nutritionSummary, setNutritionSummary] = useState({
    calories: { current: 1290, target: 2100 },
    protein: { current: 78, target: 120 },
    carbs: { current: 145, target: 230 },
    fat: { current: 42, target: 70 },
  })

  // State for recent meals
  const [recentMeals, setRecentMeals] = useState([
    {
      id: 1,
      type: "Breakfast",
      time: "Today, 7:30 AM",
      calories: 445,
      items: 3,
      icon: "☕",
    },
    {
      id: 2,
      type: "Lunch",
      time: "Today, 12:15 PM",
      calories: 525,
      items: 3,
      icon: "🍴",
    },
    {
      id: 3,
      type: "Snack",
      time: "Today, 3:30 PM",
      calories: 320,
      items: 2,
      icon: "🍎",
    },
  ])

  // Quick add food items
  const quickAddItems = [
    { id: 1, name: "Coffee", icon: "☕" },
    { id: 2, name: "Apple", icon: "🍎" },
    { id: 3, name: "Eggs", icon: "🥚" },
    { id: 4, name: "Rice", icon: "🍚" },
  ]

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setMealForm({
      ...mealForm,
      [name]: value,
    })
  }

  // Handle adding a meal to the log
  const handleAddMeal = () => {
    // Validate form
    if (!mealForm.mealType || !mealForm.calories) {
      alert("Please fill in the required fields")
      return
    }

    // Create new meal object
    const newMeal = {
      id: Date.now(),
      type: mealForm.mealType,
      time: `Today, ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`,
      calories: Number.parseInt(mealForm.calories),
      items: 1, // Assuming one item for simplicity
      icon: getMealIcon(mealForm.mealType),
    }

    // Add to recent meals
    setRecentMeals([newMeal, ...recentMeals])

    // Update nutrition summary
    setNutritionSummary({
      calories: {
        ...nutritionSummary.calories,
        current: nutritionSummary.calories.current + Number.parseInt(mealForm.calories || 0),
      },
      protein: {
        ...nutritionSummary.protein,
        current: nutritionSummary.protein.current + Number.parseInt(mealForm.protein || 0),
      },
      carbs: {
        ...nutritionSummary.carbs,
        current: nutritionSummary.carbs.current + Number.parseInt(mealForm.carbs || 0),
      },
      fat: {
        ...nutritionSummary.fat,
        current: nutritionSummary.fat.current + Number.parseInt(mealForm.fat || 0),
      },
    })

    // Reset form
    setMealForm({
      mealType: "Breakfast",
      dateTime: "",
      foodItem: "",
      servingSize: "",
      unit: "grams",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
    })

    // Show success message
    alert("Meal added successfully!")
  }

  // Handle quick add item
  const handleQuickAdd = (item) => {
    // Predefined nutrition values for quick add items
    const nutritionValues = {
      Coffee: { calories: 5, protein: 0, carbs: 0, fat: 0 },
      Apple: { calories: 95, protein: 0, carbs: 25, fat: 0 },
      Eggs: { calories: 70, protein: 6, carbs: 0, fat: 5 },
      Rice: { calories: 200, protein: 4, carbs: 45, fat: 0 },
    }

    const values = nutritionValues[item.name]

    // Create new meal object
    const newMeal = {
      id: Date.now(),
      type: "Snack", // Default to snack for quick adds
      time: `Today, ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`,
      calories: values.calories,
      items: 1,
      icon: item.icon,
    }

    // Add to recent meals
    setRecentMeals([newMeal, ...recentMeals])

    // Update nutrition summary
    setNutritionSummary({
      calories: {
        ...nutritionSummary.calories,
        current: nutritionSummary.calories.current + values.calories,
      },
      protein: {
        ...nutritionSummary.protein,
        current: nutritionSummary.protein.current + values.protein,
      },
      carbs: {
        ...nutritionSummary.carbs,
        current: nutritionSummary.carbs.current + values.carbs,
      },
      fat: {
        ...nutritionSummary.fat,
        current: nutritionSummary.fat.current + values.fat,
      },
    })

    alert(`Added ${item.name} to your log!`)
  }

  // Helper function to get icon based on meal type
  const getMealIcon = (mealType) => {
    switch (mealType) {
      case "Breakfast":
        return "☕"
      case "Lunch":
        return "🍴"
      case "Dinner":
        return "🍽️"
      case "Snack":
        return "🍎"
      default:
        return "🍽️"
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
      {/* Header Component */}
      <Header onAddNewMeal={() => alert("Open add new meal modal")} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Log Meal Form Component */}
          <LogMealForm mealForm={mealForm} onChange={handleInputChange} onSubmit={handleAddMeal} />

          {/* Recent Meals Component */}
          <RecentMeals meals={recentMeals} />
        </div>

        <div className="space-y-6">
          {/* Today's Summary Component */}
          <TodaySummary summary={nutritionSummary} />

          {/* Quick Add Component */}
          <QuickAdd items={quickAddItems} onQuickAdd={handleQuickAdd} />
        </div>
      </div>
    </div>
  )
}
