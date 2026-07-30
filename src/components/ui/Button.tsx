'use client'

import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'text'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  fullWidth?: boolean
  asChild?: never
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-medium rounded-full',
          'transition-all duration-150 ease-linear',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

const variantStyles = {
  primary: 'bg-accent text-white hover:bg-accent-hover active:scale-[0.98] shadow-lg shadow-accent/25',
  secondary: 'bg-bg-level-2 text-fg-primary border border-line-primary hover:bg-bg-level-3 hover:border-line-secondary',
  ghost: 'bg-transparent text-fg-secondary hover:bg-bg-level-1 hover:text-fg-primary',
  outline: 'bg-transparent text-fg-primary border border-line-primary hover:bg-bg-level-1 hover:border-accent',
  text: 'bg-transparent text-fg-secondary hover:text-fg-primary underline-offset-4 hover:underline',
}

const sizeStyles = {
  sm: 'px-4 py-2 text-small',
  md: 'px-6 py-2.5 text-small',
  lg: 'px-8 py-3 text-regular',
}