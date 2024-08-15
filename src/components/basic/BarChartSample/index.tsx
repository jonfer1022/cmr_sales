import React from 'react';
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

interface IPropsBarChart {
  data: any[];
  size?: number;
  dataKey?: string;
  className?: string;
  height?: number;
  width?: number;
  barElement?: JSX.Element;
}

function BarChartSample({
  data,
  height = 450,
  width = 600,
  dataKey = 'name',
  className,
  barElement,
}: IPropsBarChart) {
  return (
    <BarChart className={className} width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={dataKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      {barElement}
    </BarChart>
  );
}

export default BarChartSample;
