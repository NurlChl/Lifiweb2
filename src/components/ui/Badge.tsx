'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'error' | 'outline'
  size?: 'sm' | 'md'
}

const variantStyles = {
  default: 'bg-accent-subtle text-accent border border-accent/20',
  accent: 'bg-accent-subtle text-accent border border-accent/20',
  success: 'bg-green-500/15 text-green-500 border border-green-500/20',
  warning: 'bg-amber-500/15 text-amber-500 border border-amber-500/20',
  error: 'bg-red-500/15 text-red-500 border border-red-500/20',
  outline: 'bg-transparent text-fg-secondary border border-line-primary',
}

const sizeStyles = {
  sm: 'px-2 py-0.5 text-tiny',
  md: 'px-3 py-1 text-mini',
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'md', className, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center font-medium rounded-sm border',
        'transition-colors duration-150',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
)

Badge.displayName = 'Badge'