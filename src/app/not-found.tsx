import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-hero text-fg-primary mb-4">404</h1>
      <p className="text-regular text-fg-tertiary mb-8 max-w-[300px]">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-5 py-2.5 text-small font-medium hover:bg-accent-hover active:scale-[0.98] transition-all"
      >
        Go Home
      </Link>
    </div>
  )
}
