import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-line-tertiary bg-bg-level-1 p-6 transition-all duration-300 ease-default',
        hover && 'hover:border-line-primary hover:bg-bg-level-2',
        className
      )}
    >
      {children}
    </div>
  )
}
