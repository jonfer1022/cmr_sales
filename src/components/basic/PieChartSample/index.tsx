import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface IPropsPieChart<T> {
  data: any[];
  size?: number;
  dataKey?: string;
  nameKey?: string;
  color?: string | string[];
  label?: (entry: T) => string | JSX.Element | null;
  className?: string;
  subtractFromOuterRadius?: number;
}

const COLORS = ['#0088FE', '#FFBB28', '#00C49F', '#FF8042'];

function PieChartSample<T>({
  data,
  dataKey = 'value',
  nameKey = 'name',
  size = 400,
  color = COLORS,
  label,
  className,
  subtractFromOuterRadius = 0,
}: IPropsPieChart<T>) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart className={className}>
        <Pie
          data={data}
          dataKey={dataKey}
          cx="50%"
          cy="50%"
          label={label}
          labelLine={Boolean(label)}
          outerRadius={
            size / 2 - (Boolean(label) ? 100 - subtractFromOuterRadius : 40)
          }
          nameKey={nameKey}
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={color[index % color.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieChartSample;
