import { useState } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card } from '@/components/atoms/Card';
import { ChartHeader } from '@/components/molecules/ChartHeader';
import { ChartTypeSelector, ChartType } from '@/components/molecules/ChartTypeSelector';
import { getComparisonData } from '@/data/salesData';

export function ComparisonChart() {
  const [chartType, setChartType] = useState<ChartType>('bar');
  const data = getComparisonData();

  const renderChart = () => {
    if (chartType === 'line') {
      return (
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
            <YAxis stroke="#64748b" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="2022"
              stroke="#94a3b8"
              strokeWidth={2}
              dot={{ fill: '#94a3b8', r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="2023"
              stroke="#06b6d4"
              strokeWidth={2}
              dot={{ fill: '#06b6d4', r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="2024"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ fill: '#8b5cf6', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      );
    }

    return (
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
          <YAxis stroke="#64748b" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            }}
          />
          <Legend />
          <Bar dataKey="2022" fill="#94a3b8" radius={[4, 4, 0, 0]} />
          <Bar dataKey="2023" fill="#06b6d4" radius={[4, 4, 0, 0]} />
          <Bar dataKey="2024" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <Card variant="elevated" padding="lg">
      <ChartHeader
        title="Year-over-Year Comparison"
        subtitle="Monthly sales comparison across 2022, 2023, and 2024"
        actions={
          <ChartTypeSelector
            selected={chartType}
            onChange={setChartType}
            showPie={false}
          />
        }
      />
      {renderChart()}
    </Card>
  );
}
