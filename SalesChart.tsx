import { useState, useMemo } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
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
import { YearSelector } from '@/components/molecules/YearSelector';
import { FilterInput } from '@/components/molecules/FilterInput';
import { yearlyData, getCategoryData } from '@/data/salesData';

// Colors are defined in categoryData from salesData.ts

export function SalesChart() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [salesThreshold, setSalesThreshold] = useState(0);

  const yearData = yearlyData.find((y) => y.year === selectedYear);
  
  const filteredData = useMemo(() => {
    if (!yearData) return [];
    return yearData.data.filter((item) => item.sales >= salesThreshold);
  }, [yearData, salesThreshold]);

  const categoryData = getCategoryData(selectedYear);

  const renderChart = () => {
    if (chartType === 'pie') {
      return (
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={130}
              paddingAngle={3}
              dataKey="value"
              label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      );
    }

    if (chartType === 'line') {
      return (
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={filteredData}>
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
              dataKey="sales"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#7c3aed' }}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#06b6d4"
              strokeWidth={3}
              dot={{ fill: '#06b6d4', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#0891b2' }}
            />
          </LineChart>
        </ResponsiveContainer>
      );
    }

    return (
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={filteredData}>
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
          <Bar dataKey="sales" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="Sales (K)" />
          <Bar dataKey="revenue" fill="#06b6d4" radius={[4, 4, 0, 0]} name="Revenue (K)" />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <Card variant="elevated" padding="lg">
      <ChartHeader
        title={`Sales Performance ${selectedYear}`}
        subtitle={chartType === 'pie' ? 'Sales by Category' : 'Monthly Sales & Revenue'}
        actions={
          <div className="flex flex-col sm:flex-row gap-3">
            <YearSelector
              years={[2022, 2023, 2024]}
              selected={selectedYear}
              onChange={setSelectedYear}
            />
            <ChartTypeSelector
              selected={chartType}
              onChange={setChartType}
            />
          </div>
        }
      />
      
      {chartType !== 'pie' && (
        <div className="mb-6">
          <FilterInput
            value={salesThreshold}
            onChange={setSalesThreshold}
            onClear={() => setSalesThreshold(0)}
            label="Filter by Minimum Sales (K)"
            placeholder="e.g., 50"
          />
        </div>
      )}

      {filteredData.length === 0 && chartType !== 'pie' ? (
        <div className="flex items-center justify-center h-[350px] text-slate-500">
          No data matches the current filter. Try lowering the threshold.
        </div>
      ) : (
        renderChart()
      )}
    </Card>
  );
}
