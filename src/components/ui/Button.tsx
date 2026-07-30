'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
}

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-hover active:scale-[0.98]',
  ghost: 'text-fg-secondary hover:text-fg-primary hover:bg-bg-level-2 active:scale-[0.98]',
  outline: 'text-fg-secondary border border-line-primary hover:bg-bg-level-2 active:scale-[0.98]',
}

const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-mini',
  md: 'px-5 py-2.5 text-small',
  lg: 'px-6 py-3 text-regular',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-default',
        variants[variant],
        sizes[size],
        'disabled:opacity-50 disabled:pointer-events-none',
        className
      )}
      {...props}
    >
      {loading && <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
      {children}
    </button>
  )
)
Button.displayName = 'Button'
