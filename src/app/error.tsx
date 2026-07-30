'use client'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-hero text-fg-primary mb-4">Something went wrong</h1>
      <p className="text-regular text-fg-tertiary mb-8 max-w-[300px]">
        {error.message || 'An unexpected error occurred.'}
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-5 py-2.5 text-small font-medium hover:bg-accent-hover active:scale-[0.98] transition-all"
      >
        Try Again
      </button>
    </div>
  )
}
