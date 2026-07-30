'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

export function Header() {
  const path = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 mt-4 flex justify-center px-4">
      <nav className="page-container flex h-14 items-center justify-between rounded-[16px] border border-border-translucent bg-bg-primary/80 px-6 backdrop-blur-xl">
        <Link href="/" className="text-fg-primary font-semibold tracking-tight">
          Lifi <span className="text-fg-tertiary font-normal">Studio</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-small transition-colors duration-200',
                path === link.href ? 'text-fg-primary' : 'text-fg-secondary hover:text-fg-primary'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        <button
          className="md:hidden text-fg-secondary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <List size={20} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 top-20 z-40 bg-bg-primary/95 backdrop-blur-2xl">
          <div className="flex flex-col items-center gap-6 pt-16">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'text-title transition-colors',
                  path === link.href ? 'text-fg-primary' : 'text-fg-secondary'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-4">
              <Button size="lg">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
