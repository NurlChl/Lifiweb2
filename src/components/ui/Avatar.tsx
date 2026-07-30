'use client'

import { forwardRef, type ImgHTMLAttributes, useState } from 'react'
import { cn } from '@/lib/utils'
import { User } from '@phosphor-icons/react/ssr'

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt?: string
  fallback?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'circle' | 'square'
}

const sizeStyles = {
  sm: 'h-8 w-8 text-tiny',
  md: 'h-10 w-10 text-small',
  lg: 'h-12 w-12 text-regular',
  xl: 'h-16 w-16 text-large',
}

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ alt, fallback, size = 'md', shape = 'circle', className, src, onError, ...props }, ref) => {
    const [hasError, setHasError] = useState(false)

    const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
      setHasError(true)
      onError?.(e)
    }

    if (hasError || !src) {
      return (
        <div
          ref={ref}
          className={cn(
            'inline-flex items-center justify-center bg-bg-level-2 border border-line-primary',
            'font-medium text-fg-tertiary select-none',
            sizeStyles[size],
            shape === 'circle' ? 'rounded-full' : 'rounded-lg',
            className
          )}
          aria-label={alt || fallback || 'Avatar'}
        >
          {fallback ? (
            <span>{fallback}</span>
          ) : (
            <User size={size === 'sm' ? 12 : size === 'md' ? 16 : size === 'lg' ? 20 : 28} weight="light" />
          )}
        </div>
      )
    }

    return (
      <img
        ref={ref}
        src={src}
        alt={alt || ''}
        onError={handleError}
        className={cn(
          'object-cover',
          sizeStyles[size],
          shape === 'circle' ? 'rounded-full' : 'rounded-lg',
          className
        )}
        {...props}
      />
    )
  }
)

Avatar.displayName = 'Avatar'