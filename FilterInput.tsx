import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import { Filter, X } from 'lucide-react';
import { useState } from 'react';

interface FilterInputProps {
  value: number;
  onChange: (value: number) => void;
  onClear: () => void;
  label?: string;
  placeholder?: string;
}

export function FilterInput({
  value,
  onChange,
  onClear,
  label = 'Sales Threshold',
  placeholder = 'Enter minimum sales...',
}: FilterInputProps) {
  const [inputValue, setInputValue] = useState(value.toString());

  const handleApply = () => {
    const num = parseFloat(inputValue);
    if (!isNaN(num) && num >= 0) {
      onChange(num);
    }
  };

  const handleClear = () => {
    setInputValue('0');
    onClear();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleApply();
    }
  };

  return (
    <div className="flex items-end gap-3">
      <div className="flex-1 min-w-[200px]">
        <Input
          label={label}
          type="number"
          min="0"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          icon={<Filter className="w-4 h-4" />}
        />
      </div>
      <Button onClick={handleApply} size="md">
        Apply
      </Button>
      {value > 0 && (
        <Button onClick={handleClear} variant="ghost" size="md">
          <X className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}
