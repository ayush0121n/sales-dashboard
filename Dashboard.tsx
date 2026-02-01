import { useState } from 'react';
import { DashboardLayout } from '@/components/templates/DashboardLayout';
import { StatsOverview } from '@/components/organisms/StatsOverview';
import { SalesChart } from '@/components/organisms/SalesChart';
import { ComparisonChart } from '@/components/organisms/ComparisonChart';
import { YearSelector } from '@/components/molecules/YearSelector';
import { Calendar } from 'lucide-react';

export function Dashboard() {
  const [selectedYear, setSelectedYear] = useState(2024);

  return (
    <DashboardLayout>
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Sales Dashboard</h1>
            <p className="text-slate-500 mt-1">
              Track your sales performance and analytics
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-2 shadow-sm border border-slate-200">
            <Calendar className="w-4 h-4 text-slate-500" />
            <span className="text-sm text-slate-600">Select Year:</span>
            <YearSelector
              years={[2022, 2023, 2024]}
              selected={selectedYear}
              onChange={setSelectedYear}
            />
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <section className="mb-8">
        <StatsOverview selectedYear={selectedYear} />
      </section>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        <SalesChart />
        <ComparisonChart />
      </div>

      {/* Additional Info Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-4">Top Categories</h3>
          <div className="space-y-3">
            {[
              { name: 'Electronics', value: 35, color: 'bg-violet-500' },
              { name: 'Clothing', value: 28, color: 'bg-cyan-500' },
              { name: 'Home & Garden', value: 22, color: 'bg-emerald-500' },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                <span className="text-sm text-slate-600 flex-1">{item.name}</span>
                <span className="text-sm font-medium text-slate-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New order placed', time: '2 min ago' },
              { action: 'Report generated', time: '15 min ago' },
              { action: 'Inventory updated', time: '1 hour ago' },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-500 mt-1.5" />
                <div>
                  <p className="text-sm text-slate-700">{item.action}</p>
                  <p className="text-xs text-slate-400">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-xl p-6 text-white">
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <p className="text-sm text-violet-100 mb-4">
            Check out our documentation or contact support for assistance.
          </p>
          <button className="px-4 py-2 bg-white text-violet-600 rounded-lg text-sm font-medium hover:bg-violet-50 transition-colors">
            View Documentation
          </button>
        </div>
      </section>
    </DashboardLayout>
  );
}
