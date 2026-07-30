'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { List, X, ArrowRight, CaretDown } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/lib/constants'

const resourcesLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'Services', href: '/services' },
]

export function Header() {
  const path = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'flex h-12 sm:h-14 w-full max-w-[1200px] items-center justify-between rounded-xl sm:rounded-2xl border px-4 sm:px-6 backdrop-blur-xl transition-all duration-500',
          scrolled
            ? 'border-border-translucent bg-bg-primary/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'border-transparent bg-bg-primary/40'
        )}
      >
        <Link href="/" className="flex items-center gap-2.5 text-fg-primary text-small sm:text-regular font-semibold tracking-tight">
          <span className="size-6 sm:size-7 rounded-lg bg-accent flex items-center justify-center text-[10px] sm:text-xs font-bold text-white transition-transform duration-200 hover:scale-105">L</span>
          Lifi <span className="text-fg-tertiary font-normal">Studio</span>
        </Link>

        <div className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            link.label === 'Resources' ? (
              <div key="resources" ref={resourcesRef} className="relative">
                <button
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  className={cn(
                    'flex items-center gap-1 px-3 py-1.5 text-small rounded-lg transition-colors duration-200',
                    resourcesOpen ? 'text-fg-primary bg-bg-level-2' : 'text-fg-tertiary hover:text-fg-secondary hover:bg-bg-level-1'
                  )}
                >
                  Resources <CaretDown size={10} weight="fill" className={cn('transition-transform duration-200', resourcesOpen && 'rotate-180')} />
                </button>
                <AnimatePresence>
                  {resourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 4, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.96 }}
                      transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 mt-2 w-44 rounded-xl border border-line-tertiary bg-bg-level-2 p-1.5 shadow-xl"
                    >
                      {resourcesLinks.map((r) => (
                        <Link
                          key={r.href}
                          href={r.href}
                          onClick={() => setResourcesOpen(false)}
                          className={cn(
                            'block rounded-lg px-3 py-2 text-small transition-colors duration-150',
                            path === r.href ? 'text-fg-primary bg-bg-level-3' : 'text-fg-tertiary hover:text-fg-secondary hover:bg-bg-level-1'
                          )}
                        >
                          {r.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-3 py-1.5 text-small rounded-lg transition-colors duration-200',
                  path === link.href
                    ? 'text-fg-primary bg-bg-level-2'
                    : 'text-fg-tertiary hover:text-fg-secondary hover:bg-bg-level-1'
                )}
              >
                {link.label}
                {path === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-bg-level-2 -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            )
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-small font-medium text-white hover:bg-accent-hover transition-all duration-200 active:scale-[0.97]"
          >
            Get Started
            <span className="inline-flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight size={14} />
            </span>
          </Link>
        </div>

        <button
          className="md:hidden text-fg-secondary hover:text-fg-primary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <List size={20} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-x-4 top-20 z-40 rounded-2xl border border-line-tertiary bg-bg-level-1/95 backdrop-blur-2xl p-6"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-lg px-4 py-3 text-regular transition-colors',
                    path === link.href
                      ? 'text-fg-primary bg-bg-level-2'
                      : 'text-fg-tertiary hover:text-fg-secondary hover:bg-bg-level-1'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-accent py-3 text-regular font-medium text-white"
            >
              Get Started <ArrowRight size={16} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
