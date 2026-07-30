import type { Metadata } from 'next'
import { ContactForm } from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Lifi Studio. Let us know about your project.',
}

export default function ContactPage() {
  return (
    <div className="page-container pt-36 pb-24">
      <div className="max-w-[600px] mx-auto">
        <h1 className="text-hero text-fg-primary mb-4 text-center">Get in touch.</h1>
        <p className="text-regular text-fg-tertiary text-center mb-16 max-w-[400px] mx-auto">
          Tell us about your project and we&apos;ll get back to you within 24 hours.
        </p>
        <ContactForm />
      </div>
    </div>
  )
}
