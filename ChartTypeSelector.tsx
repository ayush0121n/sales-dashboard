import { Button } from '@/components/atoms/Button';
import { BarChart3, LineChart, PieChart } from 'lucide-react';

export type ChartType = 'bar' | 'line' | 'pie';

interface ChartTypeSelectorProps {
  selected: ChartType;
  onChange: (type: ChartType) => void;
  showPie?: boolean;
}

export function ChartTypeSelector({
  selected,
  onChange,
  showPie = true,
}: ChartTypeSelectorProps) {
  const types: { type: ChartType; icon: typeof BarChart3; label: string }[] = [
    { type: 'bar', icon: BarChart3, label: 'Bar' },
    { type: 'line', icon: LineChart, label: 'Line' },
    ...(showPie ? [{ type: 'pie' as ChartType, icon: PieChart, label: 'Pie' }] : []),
  ];

  return (
    <div className="flex items-center gap-2">
      {types.map(({ type, icon: Icon, label }) => (
        <Button
          key={type}
          variant="outline"
          size="sm"
          active={selected === type}
          onClick={() => onChange(type)}
        >
          <Icon className="w-4 h-4 mr-1.5" />
          {label}
        </Button>
      ))}
    </div>
  );
}
