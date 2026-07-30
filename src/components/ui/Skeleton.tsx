import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn('skeleton-shimmer rounded-lg', className)}
      aria-hidden="true"
    />
  )
}

export function BlogCardSkeleton() {
  return (
    <div className="rounded-xl border border-line-tertiary bg-bg-level-1 p-6 space-y-4">
      <Skeleton className="h-40 w-full rounded-lg" />
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  )
}
