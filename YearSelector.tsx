import { Button } from '@/components/atoms/Button';

interface YearSelectorProps {
  years: number[];
  selected: number;
  onChange: (year: number) => void;
}

export function YearSelector({ years, selected, onChange }: YearSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      {years.map((year) => (
        <Button
          key={year}
          variant="ghost"
          size="sm"
          active={selected === year}
          onClick={() => onChange(year)}
        >
          {year}
        </Button>
      ))}
    </div>
  );
}
