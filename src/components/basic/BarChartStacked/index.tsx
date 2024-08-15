import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  // ResponsiveContainer,
} from 'recharts';

interface IBarChartStacked {
  data: any[];
  className?: string;
  height?: number;
  width?: number;
  dataKeyBelow?: string;
  dataKeyAbove?: string;
  dataKeyXaxis?: string;
  colorBelow?: string;
  colorAbove?: string;
}

const BarChartStacked: React.FC<IBarChartStacked> = ({
  data,
  height = 450,
  width = 600,
  className,
  dataKeyBelow = 'amount',
  dataKeyAbove = 'value',
  dataKeyXaxis = 'name',
  colorBelow = '#8884d8',
  colorAbove = '#82ca9d',
}) => {
  return (
    <BarChart width={width} height={height} data={data} className={className}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={dataKeyXaxis} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={dataKeyBelow} stackId="a" fill={colorBelow} />
      <Bar dataKey={dataKeyAbove} stackId="a" fill={colorAbove} />
    </BarChart>
  );
};

export default BarChartStacked;
