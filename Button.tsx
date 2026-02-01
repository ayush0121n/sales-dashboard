import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  active?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  active = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-violet-600 text-white hover:bg-violet-700 focus:ring-violet-500',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-500',
    outline: cn(
      'border-2 border-slate-200 text-slate-700 hover:border-violet-500 hover:text-violet-600 focus:ring-violet-500',
      active && 'border-violet-500 bg-violet-50 text-violet-600'
    ),
    ghost: cn(
      'text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-500',
      active && 'bg-slate-100 text-slate-900'
    ),
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
