import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="text-small text-fg-secondary block">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={cn(
          'w-full rounded-lg border bg-bg-level-1 px-4 py-3 text-regular text-fg-primary placeholder:text-fg-quaternary',
          'border-line-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25',
          'transition-all duration-200 ease-default',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500/25',
          className
        )}
        {...props}
      />
      {error && <p className="text-micro text-red-500">{error}</p>}
    </div>
  )
)
Input.displayName = 'Input'
