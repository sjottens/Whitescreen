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
  primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-md hover:shadow-lg disabled:shadow-none',
  secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300 active:bg-slate-400 shadow-sm hover:shadow-md disabled:shadow-none',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2',
  ghost: 'text-blue-600 hover:bg-blue-50 active:bg-blue-100',
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
        disabled:opacity-50 disabled:cursor-not-allowed
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600
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
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600
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
