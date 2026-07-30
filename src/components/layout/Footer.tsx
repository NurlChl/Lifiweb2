import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '/services' },
    { label: 'UI/UX Design', href: '/services' },
    { label: 'Automation', href: '/services' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  Connect: [
    { label: 'GitHub', href: '#' },
    { label: 'X / Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-line-tertiary">
      <div className="page-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-fg-primary font-semibold tracking-tight">
              Lifi <span className="text-fg-tertiary font-normal">Studio</span>
            </Link>
            <p className="text-small text-fg-tertiary mt-3 max-w-[200px]">
              Premium web development & digital solutions for modern businesses.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-mini text-fg-quaternary font-medium uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-small text-fg-secondary hover:text-fg-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-line-tertiary flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-micro text-fg-quaternary">
            &copy; {new Date().getFullYear()} Lifi Studio. All rights reserved.
          </p>
          <div className="flex gap-4 text-micro text-fg-quaternary">
            <Link href="#" className="hover:text-fg-secondary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-fg-secondary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
