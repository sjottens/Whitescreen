// components/ui/button.tsx - Modern button component with neon green theme

import { ReactNode, MouseEvent } from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

interface LinkButtonProps extends Omit<ButtonProps, 'onClick' | 'type'> {
  href: string;
  scroll?: boolean;
  target?: string;
  rel?: string;
}

const variantClasses = {
  primary: 'bg-gradient-to-r from-[#00DC82] to-emerald-500 text-slate-900 font-semibold hover:from-[#1CED8F] hover:to-emerald-400 active:from-[#00B966] active:to-emerald-600 shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105 disabled:from-slate-600 disabled:to-slate-600 disabled:text-slate-200 disabled:shadow-none disabled:scale-100',
  secondary: 'bg-slate-800 text-slate-100 border border-slate-700 hover:bg-slate-700 hover:border-[#00DC82]/50 active:bg-slate-600 shadow-md disabled:bg-slate-700 disabled:text-slate-400 disabled:shadow-none',
  outline: 'border-2 border-[#00DC82] text-[#00DC82] font-semibold hover:bg-[#00DC82] hover:text-slate-900 active:bg-emerald-600 active:border-emerald-600 shadow-md hover:shadow-lg hover:shadow-emerald-500/30 disabled:border-slate-600 disabled:bg-transparent disabled:text-slate-500',
  ghost: 'text-slate-200 hover:bg-slate-800 hover:text-[#00DC82] active:bg-slate-700 disabled:bg-transparent disabled:text-slate-500',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg font-semibold',
  icon: 'p-2 rounded-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-lg font-medium
        transition-all duration-200 whitespace-nowrap
        disabled:opacity-100 disabled:cursor-not-allowed
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00DC82]
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  variant = 'primary',
  size = 'md',
  href,
  scroll = false,
  children,
  className = '',
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      scroll={scroll}
      className={`
        inline-flex items-center justify-center rounded-lg font-medium
        transition-all duration-200 whitespace-nowrap
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00DC82]
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </Link>
  );
}
