'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'
import { CheckCircle, WarningCircle } from '@phosphor-icons/react/ssr'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {}
    if (!data.name.trim()) newErrors.name = 'Name is required'
    if (!data.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = 'Invalid email format'
    if (!data.subject.trim()) newErrors.subject = 'Subject is required'
    if (!data.message.trim()) newErrors.message = 'Message is required'
    else if (data.message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters'
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate(formData)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || 'Something went wrong')
      }

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <Card variant="default" padding="xl">
      <h2 className="text-title font-medium text-fg-primary mb-8">Send us a message</h2>

      <AnimatePresence mode="wait">
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="mb-8 p-6 rounded-xl bg-green-500/10 border border-green-500/20"
          >
            <div className="flex items-center gap-3">
              <CheckCircle size={24} weight="fill" className="text-green-500" />
              <div>
                <p className="text-regular font-medium text-green-500">Message sent!</p>
                <p className="text-small text-fg-tertiary">We&apos;ll get back to you within 24 hours.</p>
              </div>
            </div>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="mb-8 p-6 rounded-xl bg-red-500/10 border border-red-500/20"
          >
            <div className="flex items-center gap-3">
              <WarningCircle size={24} weight="fill" className="text-red-500" />
              <div>
                <p className="text-regular font-medium text-red-500">Something went wrong</p>
                <p className="text-small text-fg-tertiary">{errorMessage}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Full name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Nurul Cholil"
            required
            autoComplete="name"
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="nurul@company.com"
            required
            autoComplete="email"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Phone (optional)"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+62 8xx-xxxx-xxxx"
            autoComplete="tel"
          />
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full"
            aria-invalid={errors.subject ? 'true' : 'false'}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          >
            <option value="">Select a topic</option>
            <option value="web-app">Web Application Development</option>
            <option value="mobile-app">Mobile App Development</option>
            <option value="ai-integration">AI Integration</option>
            <option value="design-system">Design System</option>
            <option value="consulting">Technical Consulting</option>
            <option value="other">Other</option>
          </select>
          {errors.subject && (
            <p id="subject-error" className="mt-1.5 text-micro text-red-500" role="alert">
              {errors.subject}
            </p>
          )}
        </div>

        <Textarea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          placeholder="Tell us about your project, timeline, budget, and anything else we should know..."
          required
          rows={5}
        />

        <Button
        type="submit"
        size="lg"
        fullWidth
        loading={status === 'submitting'}
        >
        {status === 'submitting' ? 'Sending...' : 'Send message'}
        </Button>

        <p className="text-center text-mini text-fg-quaternary">
          By submitting, you agree to our <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a> and <a href="/terms" className="text-accent hover:underline">Terms of Service</a>.
        </p>
      </form>
    </Card>
  )
}