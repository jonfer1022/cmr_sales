import React, { FunctionComponent } from 'react';
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

interface IPropsLineChart {
  data: any;
  className?: string;
  lineElements?: JSX.Element;
  height?: number;
  width?: number;
  dataKey?: string;
}

export const CustomizedLabel: FunctionComponent<any> = (props: any) => {
  const { x, y, stroke, value } = props;

  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};

const LineChartSample: React.FC<IPropsLineChart> = ({
  data,
  className,
  lineElements,
  height = 450,
  width = 600,
  dataKey = 'name',
}) => {
  return (
    <LineChart width={width} height={height} data={data} className={className}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={dataKey} height={60} tick={<CustomizedAxisTick />} />
      <YAxis />
      <Tooltip />
      <Legend />
      {lineElements}
    </LineChart>
  );
};

export default LineChartSample;
