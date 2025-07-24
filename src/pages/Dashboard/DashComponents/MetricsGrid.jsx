import React from 'react';
import MetricCard from './MetricCard';
import { Footprints, Flame, Timer, Droplets } from 'lucide-react';

const MetricsGrid = () => {
  const metrics = [
    {
      title: 'Steps',
      value: '8,432',
      goalValue: '12,000',
      unit: 'steps',
      icon: <Footprints size={18} />,
      color: 'blue'
    },
    {
      title: 'Calories',
      value: '1,248',
      goalValue: '2,000',
      unit: 'calories',
      icon: <Flame size={18} />,
      color: 'orange'
    },
    {
      title: 'Active Time',
      value: '45',
      goalValue: '90',
      unit: 'min',
      icon: <Timer size={18} />,
      color: 'purple'
    },
    {
      title: 'Water',
      value: '1.2',
      goalValue: '2.5',
      unit: 'L',
      icon: <Droplets size={18} />,
      color: 'teal'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 z-111111">
      {metrics.map((metric, index) => (
        <MetricCard
          key={metric.title}
          title={metric.title}
          value={metric.value}
          goalValue={metric.goalValue}
          icon={metric.icon}
          color={metric.color}
          unit={metric.unit}
          index={index}
        />
      ))}
    </div>
  );
};

export default MetricsGrid;