'use client'

import { forwardRef, type HTMLAttributes, type ImgHTMLAttributes, Children } from 'react'
import { cn } from '@/lib/utils'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const sizeStyles = {
  xs: 'size-6 text-tiny',
  sm: 'size-8 text-micro',
  md: 'size-10 text-small',
  lg: 'size-12 text-regular',
  xl: 'size-16 text-large',
} as const

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, fallback, size = 'md', className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative inline-flex shrink-0 overflow-hidden rounded-full bg-bg',
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt || fallback || 'Avatar'}
          className="aspect-square h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-accent-subtle text-accent font-medium">
          {fallback || '?'}
        </div>
      )}
    </div>
  )
)

Avatar.displayName = 'Avatar'

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  max?: number
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, max = 5, size = 'md', className, ...props }, ref) => {
    const childrenArray = Children.toArray(children) as React.ReactElement[]
    const avatars = childrenArray.slice(0, max)
    const remaining = childrenArray.length - max

    return (
      <div ref={ref} className={cn('flex -space-x-2', className)} {...props}>
        {avatars.map((child, index) => (
          <span key={index} className="relative z-[auto]">
            {child}
          </span>
        ))}
        {remaining > 0 && (
          <span className={cn('flex items-center justify-center rounded-full border-2 border-bg-primary', sizeStyles[size])}>
            +{remaining}
          </span>
        )}
      </div>
    )
  }
)

AvatarGroup.displayName = 'AvatarGroup'