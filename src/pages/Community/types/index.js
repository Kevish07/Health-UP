// User object example
const User = {
  id: '',
  name: '',
  specialty: '',
  location: '',
  achievements: 0,
  profileImage: '',
  stats: [
    {
      value: 0,
      label: '',
      unit: '', // optional
    },
  ],
};

// UserStats object example
const UserStats = {
  connectedUsers: 0,
  pendingRequests: 0,
  workoutMatches: 0,
};

// WorkoutType options
const WorkoutType = [
  'All Types',
  'Running',
  'Strength Training',
  'CrossFit',
  'Yoga',
  'Swimming',
  'Cycling',
];

// ExperienceLevel options
const ExperienceLevel = [
  'All Levels',
  'Beginner',
  'Intermediate',
  'Advanced',
  'Pro',
];

// LocationOption options
const LocationOption = [
  'All Locations',
  'New York',
  'Los Angeles',
  'Chicago',
  'San Francisco',
  'Miami',
];

export {UserStats,User,WorkoutType,ExperienceLevel,LocationOption}