import { StatCard } from '@/components/molecules/StatCard';
import { DollarSign, TrendingUp, ShoppingCart, BarChart3 } from 'lucide-react';
import { yearlyData } from '@/data/salesData';

interface StatsOverviewProps {
  selectedYear: number;
}

export function StatsOverview({ selectedYear }: StatsOverviewProps) {
  const currentData = yearlyData.find((y) => y.year === selectedYear);
  const previousData = yearlyData.find((y) => y.year === selectedYear - 1);

  if (!currentData) return null;

  const calculateChange = (current: number, previous?: number) => {
    if (!previous) return 0;
    return Math.round(((current - previous) / previous) * 100);
  };

  const stats = [
    {
      title: 'Total Sales',
      value: `$${currentData.totalSales}K`,
      change: calculateChange(currentData.totalSales, previousData?.totalSales),
      icon: DollarSign,
      iconColor: 'text-violet-600',
      iconBgColor: 'bg-violet-100',
    },
    {
      title: 'Total Revenue',
      value: `$${currentData.totalRevenue}K`,
      change: calculateChange(currentData.totalRevenue, previousData?.totalRevenue),
      icon: TrendingUp,
      iconColor: 'text-emerald-600',
      iconBgColor: 'bg-emerald-100',
    },
    {
      title: 'Total Orders',
      value: currentData.totalOrders.toLocaleString(),
      change: calculateChange(currentData.totalOrders, previousData?.totalOrders),
      icon: ShoppingCart,
      iconColor: 'text-cyan-600',
      iconBgColor: 'bg-cyan-100',
    },
    {
      title: 'Avg Monthly Sales',
      value: `$${Math.round(currentData.totalSales / 12)}K`,
      change: calculateChange(
        currentData.totalSales / 12,
        previousData ? previousData.totalSales / 12 : undefined
      ),
      icon: BarChart3,
      iconColor: 'text-amber-600',
      iconBgColor: 'bg-amber-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}
