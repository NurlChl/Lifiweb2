'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence, useAnimate } from 'motion/react'
import { z } from 'zod'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { PaperPlaneRight, CheckCircle, WarningCircle } from '@phosphor-icons/react'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>
type FormErrors = Partial<Record<keyof FormData, string>>

export function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errors, setErrors] = useState<FormErrors>({})
  const [scope, animate] = useAnimate()

  const validate = useCallback((data: FormData): FormErrors => {
    const result = schema.safeParse(data)
    if (!result.success) {
      const fieldErrors: FormErrors = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FormData
        if (!fieldErrors[field]) fieldErrors[field] = issue.message
      }
      return fieldErrors
    }
    return {}
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as FormData

    const fieldErrors = validate(data)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }

    setErrors({})
    setState('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error()
      await animate(scope.current, { opacity: [1, 0], y: [0, -20] }, { duration: 0.2 })
      setState('sent')
    } catch {
      setState('error')
    }
  }, [validate, animate, scope])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    if (state === 'error' || state === 'sent') setState('idle')
  }, [state])

  if (state === 'sent') {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="text-center py-20 rounded-xl border border-line-tertiary bg-bg-level-1"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="inline-flex items-center justify-center size-16 rounded-full bg-green-500/10 mb-4"
          >
            <CheckCircle size={32} weight="fill" className="text-green-500" />
          </motion.div>
          <p className="text-title text-fg-primary mb-2">Message sent!</p>
          <p className="text-regular text-fg-tertiary">We&apos;ll get back to you soon.</p>
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" ref={scope}>
      <AnimatePresence mode="popLayout">
        {state === 'error' && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
            className="rounded-lg bg-red-500/10 border border-red-500/30 p-4 flex items-center gap-3 text-sm text-red-500"
            role="alert"
          >
            <WarningCircle size={20} weight="fill" className="flex-shrink-0" />
            <span>Something went wrong. Please try again.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid sm:grid-cols-2 gap-6">
        <Input
          label="Name"
          id="name"
          name="name"
          required
          placeholder="Your name"
          error={errors.name}
          onChange={handleChange}
        />
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          error={errors.email}
          onChange={handleChange}
        />
      </div>
      <Input
        label="Phone (optional)"
        id="phone"
        name="phone"
        type="tel"
        placeholder="+62..."
        error={errors.phone}
        onChange={handleChange}
      />
      <div className="space-y-2">
        <label htmlFor="message" className="text-small text-fg-secondary block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full rounded-lg border border-line-primary bg-bg-level-1 px-4 py-3 text-regular text-fg-primary placeholder:text-fg-quaternary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25 transition-all duration-200 resize-y"
          onChange={handleChange}
        />
        {errors.message && (
          <p className="text-micro text-red-500" role="alert">{errors.message}</p>
        )}
      </div>
      <Button type="submit" loading={state === 'sending'} className="w-full sm:w-auto">
        Send Message
        <PaperPlaneRight size={16} />
      </Button>
    </form>
  )
}