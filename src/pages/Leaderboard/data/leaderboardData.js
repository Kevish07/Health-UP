const CURRENT_USER_ID = 'user123';

export const generateLeaderboardData = (period) => {
  const multiplier = period === 'monthly' ? 4 : 1;
  
  return [
    {
      id: 'user1',
      name: 'Emma Thompson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      points: 15420 * multiplier,
      workouts: 45 * multiplier,
      change: 2
    },
    {
      id: 'user2',
      name: 'James Wilson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      points: 14890 * multiplier,
      workouts: 42 * multiplier,
      change: -1
    },
    {
      id: CURRENT_USER_ID,
      name: 'You',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
      points: 15230 * multiplier,
      workouts: 40 * multiplier,
      change: 3,
      isCurrentUser: true
    },
    {
      id: 'user4',
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      points: 13850 * multiplier,
      workouts: 38 * multiplier,
      change: -2
    },
    {
      id: 'user5',
      name: 'Michael Scott',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      points: 13420 * multiplier,
      workouts: 36 * multiplier,
      change: 1
    }
  ].sort((a, b) => b.points - a.points);
};