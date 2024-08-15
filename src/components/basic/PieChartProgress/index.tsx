import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

interface IPropsPieChartProgress {
  percentage: number;
  size?: number;
  color?: string;
  className?: string;
}

const PieChartProgress: React.FC<IPropsPieChartProgress> = ({
  percentage,
  size = 400,
  color = '#82ca9d',
  className,
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart className={className}>
        <Pie
          data={[{ value: 100 }]}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={120}
          fill="#d9d9d9"
        />
        <Pie
          startAngle={(percentage / 100) * 360}
          endAngle={0}
          data={[{ value: percentage }]}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={120}
          fill={color}
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartProgress;
