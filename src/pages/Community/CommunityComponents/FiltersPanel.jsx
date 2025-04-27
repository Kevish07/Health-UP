import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Button from './Button';
import { SlidersHorizontal } from 'lucide-react';
import { WorkoutType, ExperienceLevel, LocationOption } from '../types';


const FiltersPanel= ({ onApplyFilters }) => {
  const [workoutType, setWorkoutType] = useState('All Types');
  const [location, setLocation] = useState('All Locations');
  const [experienceLevel, setExperienceLevel] = useState('All Levels');
  const [isApplying, setIsApplying] = useState(false);

  const workoutTypes = [
    'All Types',
    'Running',
    'Strength Training',
    'CrossFit',
    'Yoga',
    'Swimming',
    'Cycling'
  ];

  const locations = [
    'All Locations',
    'New York',
    'Los Angeles',
    'Chicago',
    'San Francisco',
    'Miami'
  ];

  const experienceLevels = [
    'All Levels',
    'Beginner',
    'Intermediate',
    'Advanced',
    'Pro'
  ];

  const handleApplyFilters = () => {
    setIsApplying(true);
    setTimeout(() => {
      onApplyFilters({
        workoutType,
        location,
        experienceLevel
      });
      setIsApplying(false);
    }, 500);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm animate-fade-in">
      <h2 className="text-xl font-semibold mb-6">Filters</h2>
      
      <div className="space-y-6">
        <Dropdown
          label="Workout Type"
          options={workoutTypes}
          value={workoutType}
          onChange={(value) => setWorkoutType(value)}
        />
        
        <Dropdown
          label="Location"
          options={locations}
          value={location}
          onChange={(value) => setLocation(value)}
        />
        
        <Dropdown
          label="Experience Level"
          options={experienceLevels}
          value={experienceLevel}
          onChange={(value) => setExperienceLevel(value)}
        />
        
        <Button 
          fullWidth 
          size="lg" 
          icon={<SlidersHorizontal size={18} />}
          onClick={handleApplyFilters}
          isLoading={isApplying}
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default FiltersPanel;