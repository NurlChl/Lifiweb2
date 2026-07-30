'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'none' | 'level-1' | 'level-2' | 'gradient'
  divider?: boolean
}

const sizeStyles = {
  sm: 'py-16',
  md: 'py-24',
  lg: 'py-32',
  xl: 'py-40 lg:py-48',
}

const backgroundStyles = {
  none: '',
  'level-1': 'bg-bg-level-1',
  'level-2': 'bg-bg-level-2',
  gradient: 'bg-gradient-to-b from-bg-primary via-bg-level-1 to-bg-primary',
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ size = 'lg', background = 'none', divider = false, className, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        'relative',
        sizeStyles[size],
        backgroundStyles[background],
        divider && 'border-t border-line-primary',
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
)

Section.displayName = 'Section'