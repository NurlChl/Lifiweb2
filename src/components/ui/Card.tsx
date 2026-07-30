'use client'

import { forwardRef, type HTMLAttributes, type ReactNode, type CSSProperties } from 'react'
import { motion, type HTMLMotionProps } from 'motion/react'
import { cn } from '@/lib/utils'

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  hover?: boolean
  asChild?: boolean
}

const variantStyles = {
  default: 'bg-bg-level-1 border border-line-tertiary',
  elevated: 'bg-bg-level-1 shadow-lg',
  outlined: 'bg-transparent border border-line-primary',
}

const paddingStyles: Record<string, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-12',
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      padding = 'md',
      hover = false,
      asChild = false,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? 'div' : motion.div

    // When asChild is true, we need to filter out motion-specific props
    const componentProps = asChild
      ? {
          ref,
          className: cn('rounded-xl', variantStyles[variant], paddingStyles[padding], hover && 'transition-all duration-300 ease-[0.16,1,0.3,1] hover:bg-bg-level-2 hover:border-line-primary hover:shadow-xl hover:-translate-y-1', className),
          style: style as CSSProperties | undefined,
        }
      : {
          ref,
          className: cn('rounded-xl', variantStyles[variant], paddingStyles[padding], hover && 'transition-all duration-300 ease-[0.16,1,0.3,1] hover:bg-bg-level-2 hover:border-line-primary hover:shadow-xl hover:-translate-y-1', className),
          style: style as CSSProperties | undefined,
          whileHover: hover ? { y: -4, scale: 1.01 } : undefined,
          ...props,
        } as any

    return (
      <Component {...componentProps}>
        {children}
      </Component>
    )
  }
)

Card.displayName = 'Card'

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  )
)

CardHeader.displayName = 'CardHeader'

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-title font-medium text-fg-primary', className)} {...props}>
      {children}
    </h3>
  )
)

CardTitle.displayName = 'CardTitle'

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => (
    <p ref={ref} className={cn('text-regular text-fg-tertiary mt-1', className)} {...props}>
      {children}
    </p>
  )
)

CardDescription.displayName = 'CardDescription'

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props}>
      {children}
    </div>
  )
)

CardContent.displayName = 'CardContent'

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('mt-4 pt-4 border-t border-line-tertiary flex items-center gap-3', className)} {...props}>
      {children}
    </div>
  )
)

CardFooter.displayName = 'CardFooter'