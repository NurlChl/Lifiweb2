'use client'

import { SessionProvider, useSession, signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Article, SignOut, ChartBar, Gear, Plus } from '@phosphor-icons/react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AdminShell>{children}</AdminShell>
    </SessionProvider>
  )
}

function AdminShell({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const path = usePathname()

  // Don't show sidebar on login page
  if (path === '/admin/login') return <>{children}</>

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <div className="size-6 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
      </div>
    )
  }

  if (!session) return null

  return (
    <div className="min-h-screen bg-bg-primary flex">
      <aside className="w-64 min-h-screen border-r border-line-tertiary p-6 flex flex-col">
        <Link href="/admin/dashboard" className="text-fg-primary font-semibold tracking-tight mb-10">
          Lifi <span className="text-fg-tertiary font-normal">Admin</span>
        </Link>
        <nav className="flex-1 space-y-1">
          <NavLink href="/admin/dashboard" icon={ChartBar} current={path}>Dashboard</NavLink>
          <NavLink href="/admin/blog" icon={Article} current={path}>Blog Posts</NavLink>
          <NavLink href="/admin/services" icon={Gear} current={path}>Services</NavLink>
        </nav>
        <div className="border-t border-line-tertiary pt-4 space-y-2">
          <Link href="/" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-small text-fg-secondary hover:bg-bg-level-2 transition-colors">
            <Plus size={18} /> View Site
          </Link>
          <button onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-small text-fg-secondary hover:bg-bg-level-2 transition-colors w-full">
            <SignOut size={18} /> Sign Out
          </button>
        </div>
      </aside>
      <main className="flex-1 p-10">{children}</main>
    </div>
  )
}

function NavLink({ href, icon: Icon, current, children }: { href: string; icon: any; current: string; children: React.ReactNode }) {
  const active = current.startsWith(href)
  return (
    <Link href={href}
      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-small transition-colors ${
        active ? 'bg-accent/10 text-accent' : 'text-fg-secondary hover:bg-bg-level-2 hover:text-fg-primary'
      }`}>
      <Icon size={18} /> {children}
    </Link>
  )
}
