import * as React from 'react';

import { cn } from '@/lib/utils';

interface InputProps extends React.ComponentProps<'input'> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {leftIcon && (
          <span className="absolute left-3 flex items-center justify-center">
            {leftIcon}
          </span>
        )}
        <input
          type={type}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-2 py-1 pl-10 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            leftIcon && 'pl-10', // Ajusta padding se o ícone esquerdo existir
            rightIcon && 'pr-10', // Ajusta padding se o ícone direito existir
            className,
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <span className="absolute right-3 flex items-center justify-center">
            {rightIcon}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
