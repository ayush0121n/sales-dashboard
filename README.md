# Sales Dashboard - Analytics Application

A comprehensive sales analytics dashboard built with React, TypeScript, and Tailwind CSS, following **Atomic Design Principles**.

![Sales Dashboard](https://via.placeholder.com/800x400?text=Sales+Dashboard+Preview)

## 🚀 Features

- **📊 Multiple Chart Types**: Switch between Bar, Line, and Pie charts using Recharts
- **📅 Year Selection**: View sales data for 2022, 2023, and 2024
- **🔍 Custom Filter Input**: Set sales thresholds to filter displayed data
- **📈 Year-over-Year Comparison**: Compare monthly sales across multiple years
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **🎨 Modern UI**: Clean, professional design with Tailwind CSS

## 🏗️ Architecture - Atomic Design Pattern

This project follows the **Atomic Design** methodology for component organization:

```
src/
├── components/
│   ├── atoms/           # Basic building blocks
│   │   ├── Button.tsx   # Reusable button component
│   │   ├── Input.tsx    # Form input component
│   │   ├── Card.tsx     # Card container component
│   │   ├── Badge.tsx    # Status badge component
│   │   └── Select.tsx   # Dropdown select component
│   │
│   ├── molecules/       # Combinations of atoms
│   │   ├── StatCard.tsx         # Statistics display card
│   │   ├── ChartTypeSelector.tsx # Chart type toggle
│   │   ├── YearSelector.tsx      # Year selection buttons
│   │   ├── FilterInput.tsx       # Sales threshold filter
│   │   └── ChartHeader.tsx       # Chart title component
│   │
│   ├── organisms/       # Complex components
│   │   ├── SalesChart.tsx       # Main sales chart
│   │   ├── ComparisonChart.tsx  # Year comparison chart
│   │   ├── StatsOverview.tsx    # Statistics grid
│   │   ├── Sidebar.tsx          # Navigation sidebar
│   │   └── Header.tsx           # Top navigation header
│   │
│   └── templates/       # Page layouts
│       └── DashboardLayout.tsx  # Dashboard template
│
├── pages/               # Full page components
│   └── Dashboard.tsx    # Main dashboard page
│
├── data/                # Mock data
│   └── salesData.ts     # Sales data for 2022-2024
│
└── utils/               # Utility functions
    └── cn.ts            # Class name helper
```

## 📊 Data Source

The sales data is mock data inspired by Kaggle retail datasets, representing:
- **Monthly sales figures** in thousands of dollars
- **Revenue data** for each month
- **Order counts** per month
- **Category breakdowns** (Electronics, Clothing, Home & Garden, Sports)

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI Library |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Tailwind CSS 4 | Styling |
| Recharts | Charts & Visualization |
| Lucide React | Icons |

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/sales-dashboard.git
cd sales-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 🎯 Key Components Explained

### SalesChart Component
The main chart component that supports:
- Bar, Line, and Pie chart views
- Year selection (2022, 2023, 2024)
- Custom sales threshold filtering
- Interactive tooltips and legends

### ComparisonChart Component
Displays year-over-year sales comparison:
- Overlay of all three years on one chart
- Switch between Bar and Line views
- Monthly granularity

### FilterInput Component
Custom filter functionality:
- Set minimum sales threshold
- Apply/Clear filter actions
- Real-time data filtering

## 🔮 Future Enhancements

### API Integration
Replace mock data with real API calls:
```typescript
// Example API integration
const fetchSalesData = async (year: number) => {
  const response = await fetch(`/api/sales/${year}`);
  return response.json();
};
```

### Additional Features to Consider
- [ ] Export data to CSV/PDF
- [ ] Date range picker for custom periods
- [ ] Drill-down into specific categories
- [ ] Real-time data updates with WebSocket
- [ ] Dark mode support
- [ ] User authentication
- [ ] Data caching with React Query

## 📄 Project Structure Benefits

### Atoms
- Highly reusable
- Easy to test
- Consistent styling

### Molecules
- Combine atoms logically
- Still reusable across pages
- Clear single purpose

### Organisms
- Feature-complete sections
- Self-contained logic
- Business-specific

### Templates
- Layout patterns
- Consistent page structure
- Easy to modify

### Pages
- Compose all pieces
- Route-specific
- Data fetching location

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
