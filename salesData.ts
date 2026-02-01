// Mock sales data inspired by Kaggle retail datasets
// Data represents monthly sales figures in thousands of dollars

export interface SalesData {
  month: string;
  sales: number;
  revenue: number;
  orders: number;
  category: string;
}

export interface YearlySalesData {
  year: number;
  data: SalesData[];
  totalSales: number;
  totalRevenue: number;
  totalOrders: number;
}

// 2022 Sales Data
const sales2022: SalesData[] = [
  { month: 'Jan', sales: 45, revenue: 67, orders: 234, category: 'Electronics' },
  { month: 'Feb', sales: 52, revenue: 78, orders: 287, category: 'Clothing' },
  { month: 'Mar', sales: 48, revenue: 72, orders: 256, category: 'Home & Garden' },
  { month: 'Apr', sales: 61, revenue: 92, orders: 312, category: 'Electronics' },
  { month: 'May', sales: 55, revenue: 83, orders: 298, category: 'Sports' },
  { month: 'Jun', sales: 67, revenue: 101, orders: 345, category: 'Electronics' },
  { month: 'Jul', sales: 72, revenue: 108, orders: 378, category: 'Clothing' },
  { month: 'Aug', sales: 69, revenue: 104, orders: 356, category: 'Home & Garden' },
  { month: 'Sep', sales: 58, revenue: 87, orders: 302, category: 'Electronics' },
  { month: 'Oct', sales: 74, revenue: 111, orders: 389, category: 'Sports' },
  { month: 'Nov', sales: 89, revenue: 134, orders: 467, category: 'Electronics' },
  { month: 'Dec', sales: 112, revenue: 168, orders: 589, category: 'All' },
];

// 2023 Sales Data
const sales2023: SalesData[] = [
  { month: 'Jan', sales: 58, revenue: 87, orders: 298, category: 'Electronics' },
  { month: 'Feb', sales: 64, revenue: 96, orders: 334, category: 'Clothing' },
  { month: 'Mar', sales: 71, revenue: 107, orders: 367, category: 'Home & Garden' },
  { month: 'Apr', sales: 76, revenue: 114, orders: 398, category: 'Electronics' },
  { month: 'May', sales: 69, revenue: 104, orders: 356, category: 'Sports' },
  { month: 'Jun', sales: 82, revenue: 123, orders: 423, category: 'Electronics' },
  { month: 'Jul', sales: 88, revenue: 132, orders: 456, category: 'Clothing' },
  { month: 'Aug', sales: 85, revenue: 128, orders: 439, category: 'Home & Garden' },
  { month: 'Sep', sales: 79, revenue: 119, orders: 412, category: 'Electronics' },
  { month: 'Oct', sales: 94, revenue: 141, orders: 489, category: 'Sports' },
  { month: 'Nov', sales: 108, revenue: 162, orders: 567, category: 'Electronics' },
  { month: 'Dec', sales: 135, revenue: 203, orders: 712, category: 'All' },
];

// 2024 Sales Data
const sales2024: SalesData[] = [
  { month: 'Jan', sales: 72, revenue: 108, orders: 378, category: 'Electronics' },
  { month: 'Feb', sales: 79, revenue: 119, orders: 412, category: 'Clothing' },
  { month: 'Mar', sales: 86, revenue: 129, orders: 445, category: 'Home & Garden' },
  { month: 'Apr', sales: 91, revenue: 137, orders: 478, category: 'Electronics' },
  { month: 'May', sales: 84, revenue: 126, orders: 434, category: 'Sports' },
  { month: 'Jun', sales: 98, revenue: 147, orders: 512, category: 'Electronics' },
  { month: 'Jul', sales: 105, revenue: 158, orders: 545, category: 'Clothing' },
  { month: 'Aug', sales: 102, revenue: 153, orders: 534, category: 'Home & Garden' },
  { month: 'Sep', sales: 95, revenue: 143, orders: 498, category: 'Electronics' },
  { month: 'Oct', sales: 112, revenue: 168, orders: 589, category: 'Sports' },
  { month: 'Nov', sales: 128, revenue: 192, orders: 667, category: 'Electronics' },
  { month: 'Dec', sales: 156, revenue: 234, orders: 823, category: 'All' },
];

const calculateTotals = (data: SalesData[]) => ({
  totalSales: data.reduce((acc, item) => acc + item.sales, 0),
  totalRevenue: data.reduce((acc, item) => acc + item.revenue, 0),
  totalOrders: data.reduce((acc, item) => acc + item.orders, 0),
});

export const yearlyData: YearlySalesData[] = [
  { year: 2022, data: sales2022, ...calculateTotals(sales2022) },
  { year: 2023, data: sales2023, ...calculateTotals(sales2023) },
  { year: 2024, data: sales2024, ...calculateTotals(sales2024) },
];

// Category breakdown data for pie charts
export interface CategoryData {
  name: string;
  value: number;
  color: string;
}

export const getCategoryData = (year: number): CategoryData[] => {
  const categories = [
    { name: 'Electronics', value: 35 + (year - 2022) * 5, color: '#8b5cf6' },
    { name: 'Clothing', value: 25 + (year - 2022) * 3, color: '#06b6d4' },
    { name: 'Home & Garden', value: 20 + (year - 2022) * 2, color: '#10b981' },
    { name: 'Sports', value: 15 + (year - 2022) * 2, color: '#f59e0b' },
    { name: 'Others', value: 5 + (year - 2022), color: '#ef4444' },
  ];
  return categories;
};

// Comparison data for multi-year chart
export const getComparisonData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months.map((month, index) => ({
    month,
    '2022': sales2022[index].sales,
    '2023': sales2023[index].sales,
    '2024': sales2024[index].sales,
  }));
};
