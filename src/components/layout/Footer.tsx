'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { TwitterLogo, LinkedinLogo, GithubLogo, DiscordLogo, Mailbox } from '@phosphor-icons/react/ssr'
import { cn } from '@/lib/utils'
import { FOOTER_LINKS, SOCIAL_LINKS, SITE } from '@/lib/constants'

const socialIconMap = {
  TwitterLogo,
  GithubLogo,
  LinkedinLogo,
  DiscordLogo,
} as const

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-line-tertiary" role="contentinfo">
      <div className="container-main py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 text-fg-primary text-regular font-semibold tracking-tight" aria-label={`${SITE.name} - Home`}>
              <span className="size-7 rounded-lg bg-accent flex items-center justify-center text-xs font-bold text-white">L</span>
              <span>Lifi</span>
              <span className="text-fg-tertiary font-normal">Studio</span>
            </Link>
            <p className="mt-4 text-small text-fg-tertiary leading-relaxed max-w-[200px]">
              We design and ship digital products for teams that move fast. Purpose-built for the AI era.
            </p>
          </div>

          <nav aria-label="Product">
            <h4 className="text-mini text-fg-quaternary font-medium uppercase tracking-[0.12em] mb-4">Product</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.Product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-fg-tertiary hover:text-fg-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h4 className="text-mini text-fg-quaternary font-medium uppercase tracking-[0.12em] mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.Resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-fg-tertiary hover:text-fg-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h4 className="text-mini text-fg-quaternary font-medium uppercase tracking-[0.12em] mb-4">Company</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.Company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-fg-tertiary hover:text-fg-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 items-center sm:items-center">
          <p className="text-micro text-fg-quaternary">
            © {currentYear} {SITE.name}. All rights reserved.
          </p>

          <div className="flex gap-6 text-micro text-fg-quaternary">
            {FOOTER_LINKS.Legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-fg-secondary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4" aria-label="Social links">
            {SOCIAL_LINKS.map((social) => {
              const Icon = socialIconMap[social.icon as keyof typeof socialIconMap]
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg-tertiary hover:text-fg-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  {Icon && <Icon size={16} weight="light" />}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}