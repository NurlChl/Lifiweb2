'use client'

import { cn } from '@/lib/utils'

interface PageContainerProps {
  children: React.ReactNode
  className?: string
  pt?: number
  pb?: number
}

export function PageContainer({ children, className, pt = 36, pb = 24 }: PageContainerProps) {
  return (
    <main className={cn('min-h-screen', className)}>
      <div className="container-main pt-[calc(var(--space-1)*var(--space-9))] pb-[calc(var(--space-1)*var(--space-6))]">
        {children}
      </div>
    </main>
  )
}