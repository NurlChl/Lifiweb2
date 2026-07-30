'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'default' | 'subtle' | 'strong'
}

const variantStyles = {
  default: 'bg-line-primary',
  subtle: 'bg-line-secondary',
  strong: 'bg-line-tertiary',
} as const

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ orientation = 'horizontal', variant = 'default', className, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      className={cn(
        'transition-colors duration-200',
        orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px',
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
)

Separator.displayName = 'Separator'