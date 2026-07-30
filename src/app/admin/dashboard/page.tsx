import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { dbConnect } from '@/lib/mongodb'
import { BlogPost } from '@/models/BlogPost'
import { Contact } from '@/models/Contact'

export default async function AdminDashboardPage() {
  const session = await auth()
  if (!session) redirect('/admin/login')

  await dbConnect()
  const [postCount, unreadMessages] = await Promise.all([
    BlogPost.countDocuments(),
    Contact.countDocuments({ read: false }),
  ])

  return (
    <div>
      <h1 className="text-display text-fg-primary mb-2">Dashboard</h1>
      <p className="text-regular text-fg-tertiary mb-10">Welcome back, {session.user?.name}.</p>
      <div className="grid sm:grid-cols-2 gap-6">
        <StatCard href="/admin/blog" value={postCount} label="Blog Posts" />
        <StatCard href="/admin/blog" value={unreadMessages} label="Unread Messages" />
      </div>
    </div>
  )
}

function StatCard({ href, value, label }: { href: string; value: number; label: string }) {
  return (
    <a href={href} className="block rounded-xl border border-line-tertiary bg-bg-level-1 p-8 hover:border-line-primary hover:bg-bg-level-2 transition-all">
      <p className="text-title text-fg-primary">{value}</p>
      <p className="text-regular text-fg-tertiary">{label}</p>
    </a>
  )
}
