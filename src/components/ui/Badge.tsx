import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'success'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-tiny font-medium',
        variant === 'default' && 'bg-bg-level-2 text-fg-tertiary',
        variant === 'accent' && 'bg-accent-subtle text-accent',
        variant === 'success' && 'bg-emerald-500/10 text-emerald-400',
        className
      )}
    >
      {children}
    </span>
  )
}
