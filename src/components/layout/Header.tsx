'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { List, X, CaretDown } from '@phosphor-icons/react/ssr'
import { cn } from '@/lib/utils'
import { NAV_LINKS, SITE } from '@/lib/constants'

const resourcesLinks = [
  { label: 'Blog', href: '/blog', description: 'Insights & tutorials' },
  { label: 'Updates', href: '/updates', description: 'Changelog & releases' },
  { label: 'Guides', href: '/guides', description: 'Deep dives & how-tos' },
  { label: 'Community', href: '/community', description: 'Discord & forum' },
] as const

const companyLinks = [
  { label: 'About', href: '/about', description: 'Our story & values' },
  { label: 'Careers', href: '/careers', description: 'Join the team' },
  { label: 'Contact', href: '/contact', description: 'Get in touch' },
  { label: 'Brand', href: '/brand', description: 'Press kit & assets' },
] as const

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const resourcesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4" role="banner">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'flex h-14 w-full max-w-[1400px] items-center justify-between rounded-2xl border px-4 sm:px-6',
          'transition-all duration-500',
          scrolled
            ? 'border-border-translucent bg-bg-primary/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'border-transparent bg-bg-primary/40 backdrop-blur-xl'
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 text-fg-primary text-small sm:text-regular font-semibold tracking-tight"
          aria-label={`${SITE.name} - Home`}
        >
          <span className="size-6 sm:size-7 rounded-lg bg-accent flex items-center justify-center text-[10px] sm:text-xs font-bold text-white transition-transform duration-200 hover:scale-105">
            L
          </span>
          <span>Lifi</span>
          <span className="text-fg-tertiary font-normal">Studio</span>
        </Link>

        <div className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <div key={link.href} ref={link.label === 'Resources' ? resourcesRef : undefined} className="relative">
              {link.label === 'Resources' ? (
                <div className="relative">
                  <button
                    onClick={() => setResourcesOpen(!resourcesOpen)}
                    className={cn(
                      'flex items-center gap-1 px-3 py-1.5 text-small rounded-lg transition-colors duration-200',
                      resourcesOpen
                        ? 'text-fg-primary bg-bg-level-2'
                        : 'text-fg-tertiary hover:text-fg-secondary hover:bg-bg-level-1'
                    )}
                    aria-expanded={resourcesOpen}
                    aria-haspopup="true"
                    aria-label="Resources menu"
                  >
                    Resources
                    <CaretDown
                      size={10}
                      weight="fill"
                      className={cn('transition-transform duration-200', resourcesOpen && 'rotate-180')}
                    />
                  </button>

                  <AnimatePresence>
                    {resourcesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 4, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.96 }}
                        transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 mt-2 w-56 rounded-xl border border-line-tertiary bg-bg-level-2 p-1.5 shadow-xl"
                        role="menu"
                      >
                        {resourcesLinks.map((r) => (
                          <Link
                            key={r.href}
                            href={r.href}
                            onClick={() => setResourcesOpen(false)}
                            className={cn(
                              'block rounded-lg px-3 py-2 text-small transition-colors duration-150',
                              isActive(r.href)
                                ? 'text-fg-primary bg-bg-level-3'
                                : 'text-fg-tertiary hover:text-fg-secondary hover:bg-bg-level-1'
                            )}
                            role="menuitem"
                          >
                            <div className="font-medium">{r.label}</div>
                            <div className="text-tiny text-fg-quaternary mt-0.5">{r.description}</div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    'relative px-3 py-1.5 text-small rounded-lg transition-colors duration-200',
                    isActive(link.href)
                      ? 'text-fg-primary bg-bg-level-2'
                      : 'text-fg-tertiary hover:text-fg-secondary hover:bg-bg-level-1'
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-bg-level-2 -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-small font-medium text-white hover:bg-accent-hover transition-all duration-200 active:scale-[0.97]"
          >
            Start a project
            <span className="inline-flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>

        <button
          className="md:hidden text-fg-secondary hover:text-fg-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: '100%' }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.96, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 top-0 z-[60] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6 pt-20 pb-16 bg-bg-primary/98 backdrop-blur-xl">
              <nav className="flex flex-col items-center gap-6 text-center">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'text-display font-medium transition-colors duration-200',
                      isActive(link.href)
                        ? 'text-fg-primary'
                        : 'text-fg-tertiary hover:text-fg-secondary'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="w-full max-w-sm">
                <p className="text-mini text-fg-quaternary text-center mb-4 uppercase tracking-[0.12em]">Resources</p>
                <nav className="flex flex-col gap-2">
                  {resourcesLinks.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-small text-fg-tertiary hover:text-fg-secondary transition-colors duration-150 text-center py-2"
                    >
                      {r.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="w-full max-w-sm">
                <p className="text-mini text-fg-quaternary text-center mb-4 uppercase tracking-[0.12em]">Company</p>
                <nav className="flex flex-col gap-2">
                  {companyLinks.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-small text-fg-tertiary hover:text-fg-secondary transition-colors duration-150 text-center py-2"
                    >
                      {r.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-regular font-medium text-white hover:bg-accent-hover transition-all duration-200 active:scale-[0.98] shadow-lg shadow-accent/25"
              >
                Start a project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}