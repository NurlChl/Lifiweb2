'use client'

import { useState, useCallback } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { PaperPlaneRight } from '@phosphor-icons/react'

export function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('sending')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error()
      setState('sent')
      form.reset()
    } catch {
      setState('error')
    }
  }, [])

  if (state === 'sent') {
    return (
      <div className="text-center py-20 rounded-xl border border-line-tertiary bg-bg-level-1">
        <p className="text-title text-fg-primary mb-2">Message sent!</p>
        <p className="text-regular text-fg-tertiary">We&apos;ll get back to you soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <Input label="Name" id="name" name="name" required placeholder="Your name" />
        <Input label="Email" id="email" name="email" type="email" required placeholder="you@example.com" />
      </div>
      <Input label="Phone (optional)" id="phone" name="phone" type="tel" placeholder="+62..." />
      <div className="space-y-2">
        <label htmlFor="message" className="text-small text-fg-secondary block">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full rounded-lg border border-line-primary bg-bg-level-1 px-4 py-3 text-regular text-fg-primary placeholder:text-fg-quaternary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25 transition-all duration-200 resize-y"
        />
      </div>
      {state === 'error' && (
        <p className="text-small text-red-500">Something went wrong. Please try again.</p>
      )}
      <Button type="submit" loading={state === 'sending'} className="w-full sm:w-auto">
        Send Message
        <PaperPlaneRight size={16} />
      </Button>
    </form>
  )
}
