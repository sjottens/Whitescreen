// components/ui/button.tsx - Reusable button component

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
  primary: 'bg-cyan-600 text-white hover:text-white hover:bg-cyan-700 active:bg-cyan-800',
  secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300 active:bg-slate-400',
  outline: 'border-2 border-cyan-700 text-cyan-700 hover:bg-cyan-50 active:bg-cyan-100',
  ghost: 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200',
};

const sizeClasses = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
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
        transition-all duration-150 whitespace-nowrap cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed focus-ring
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
        transition-all duration-150 whitespace-nowrap
        focus-ring
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
