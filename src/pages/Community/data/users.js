export const users = [
  {
    id: '1',
    name: 'Alex Morgan',
    specialty: 'Running Enthusiast',
    location: 'New York',
    achievements: 24,
    profileImage: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
    stats: [
      { value: 156, label: 'Workouts' },
      { value: 4.8, label: 'Avg. Pace', unit: 'min/km' },
      { value: 89, label: 'Completion', unit: '%' }
    ]
  },
  {
    id: '2',
    name: 'Sarah Chen',
    specialty: 'Strength Training Pro',
    location: 'Los Angeles',
    achievements: 32,
    profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    stats: [
      { value: 248, label: 'Workouts' },
      { value: 180, label: 'Max Lift', unit: 'lbs' },
      { value: 95, label: 'Completion', unit: '%' }
    ]
  },
  {
    id: '3',
    name: 'Michael Johnson',
    specialty: 'CrossFit Coach',
    location: 'Chicago',
    achievements: 41,
    profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    stats: [
      { value: 312, label: 'Workouts' },
      { value: 8.5, label: 'Metcon PR', unit: 'min' },
      { value: 97, label: 'Completion', unit: '%' }
    ]
  },
  {
    id: '4',
    name: 'Emma Rodriguez',
    specialty: 'Yoga Instructor',
    location: 'San Francisco',
    achievements: 18,
    profileImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    stats: [
      { value: 189, label: 'Workouts' },
      { value: 6, label: 'Experience', unit: 'years' },
      { value: 92, label: 'Completion', unit: '%' }
    ]
  }
];

export const userStats = {
  connectedUsers: 45,
  pendingRequests: 12,
  workoutMatches: 28
};