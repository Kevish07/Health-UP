export interface UserData {
  id: string;
  name: string;
  avatar: string;
  points: number;
  workouts: number;
  change: number;
  isCurrentUser?: boolean;
}

export type LeaderboardPeriod = 'weekly' | 'monthly';