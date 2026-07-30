'use client'

import { forwardRef, type InputHTMLAttributes, type LabelHTMLAttributes, type TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  hint?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, id, disabled, required, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
    const errorId = `${inputId}-error`
    const hintId = `${inputId}-hint`

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block text-mini font-medium text-fg-secondary mb-2',
              required && 'after:content-["*"] after:text-red-500 after:ml-1'
            )}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          className={cn(
            'w-full rounded-md bg-bg-level-1 border border-line-primary',
            'px-4 py-3 text-regular text-fg-primary placeholder:text-fg-quaternary',
            'transition-all duration-150 ease-[0.16,1,0.3,1]',
            'hover:border-line-secondary',
            'focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent focus:bg-bg-level-2',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-line-primary',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/30',
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} className="mt-1.5 text-micro text-red-500" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={hintId} className="mt-1.5 text-micro text-fg-tertiary">
            {hint}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  label?: string
  error?: string
  hint?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className, id, disabled, required, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
    const errorId = `${inputId}-error`
    const hintId = `${inputId}-hint`

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block text-mini font-medium text-fg-secondary mb-2',
              required && 'after:content-["*"] after:text-red-500 after:ml-1'
            )}
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          disabled={disabled}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          className={cn(
            'w-full rounded-md bg-bg-level-1 border border-line-primary',
            'px-4 py-3 text-regular text-fg-primary placeholder:text-fg-quaternary',
            'transition-all duration-150 ease-[0.16,1,0.3,1]',
            'hover:border-line-secondary',
            'focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent focus:bg-bg-level-2',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-line-primary',
            'resize-y min-h-[120px]',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/30',
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} className="mt-1.5 text-micro text-red-500" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={hintId} className="mt-1.5 text-micro text-fg-tertiary">
            {hint}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn('block text-mini font-medium text-fg-secondary mb-1.5', className)}
      {...props}
    >
      {children}
    </label>
  )
)

Label.displayName = 'Label'