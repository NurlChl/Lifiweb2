import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { dbConnect } from '@/lib/mongodb'
import { Service } from '@/models/Service'
import { Plus, Pencil } from '@phosphor-icons/react/ssr'

export default async function AdminServicesPage() {
  const session = await auth()
  if (!session) redirect('/admin/login')

  await dbConnect()
  const services = await Service.find().sort({ order: 1 }).lean()

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-display text-fg-primary mb-1">Services</h1>
          <p className="text-regular text-fg-tertiary">{services.length} services</p>
        </div>
        <Link href="/admin/services/new"
          className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-5 py-2.5 text-small font-medium hover:opacity-90 active:scale-[0.98] transition-all">
          <Plus size={16} /> New Service
        </Link>
      </div>

      <div className="space-y-3">
        {services.map((svc: any) => (
          <Link key={svc._id.toString()} href={`/admin/services/${svc._id.toString()}`}
            className="flex items-center justify-between rounded-xl border border-line-tertiary bg-bg-level-1 px-6 py-4 hover:border-line-primary hover:bg-bg-level-2 transition-all">
            <div className="flex-1 min-w-0">
              <p className="text-regular text-fg-primary font-medium truncate">{svc.title}</p>
              <p className="text-small text-fg-tertiary truncate">{svc.slug}</p>
            </div>
            <Pencil size={16} className="text-fg-quaternary flex-shrink-0 ml-4" />
          </Link>
        ))}
        {services.length === 0 && <p className="text-center py-12 text-regular text-fg-quaternary">No services yet.</p>}
      </div>
    </div>
  )
}
