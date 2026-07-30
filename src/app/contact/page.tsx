import type { Metadata } from 'next'
import { Badge } from '@/components/ui/Badge'
import { ContactForm } from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Lifi Studio. Let us know about your project.',
}

export default function ContactPage() {
  return (
    <div className="page-container pt-32 sm:pt-36 pb-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <Badge variant="accent" className="mb-4">Contact</Badge>
          <h1 className="text-hero text-fg-primary mb-4">Get in touch.</h1>
          <p className="text-regular text-fg-tertiary mb-8 max-w-[400px]">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-line-tertiary bg-bg-level-1 p-4">
              <p className="text-mini text-fg-quaternary uppercase tracking-wider mb-1">Email</p>
              <p className="text-regular text-fg-primary">hello@lifistudio.id</p>
            </div>
            <div className="rounded-lg border border-line-tertiary bg-bg-level-1 p-4">
              <p className="text-mini text-fg-quaternary uppercase tracking-wider mb-1">WhatsApp</p>
              <p className="text-regular text-fg-primary">+62 851-2345-6789</p>
            </div>
            <div className="rounded-lg border border-line-tertiary bg-bg-level-1 p-4">
              <p className="text-mini text-fg-quaternary uppercase tracking-wider mb-1">Location</p>
              <p className="text-regular text-fg-primary">Mojokerto, Indonesia</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-line-tertiary bg-bg-level-1 p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
