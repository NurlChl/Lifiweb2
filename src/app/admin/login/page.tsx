'use client'

import { signIn } from 'next-auth/react'
import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export default function AdminLoginPage() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const form = e.currentTarget
    const formData = new FormData(form)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const result = await signIn('credentials', { email, password, redirect: false })
    if (result?.error) {
      setError('Invalid credentials')
      setLoading(false)
    } else {
      router.push('/admin/dashboard')
    }
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary p-4">
      <div className="w-full max-w-sm">
        <h1 className="text-display text-fg-primary text-center mb-2">Admin</h1>
        <p className="text-regular text-fg-tertiary text-center mb-10">Sign in to manage your site.</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input label="Email" id="email" name="email" type="email" required placeholder="admin@lifistudio.id" />
          <Input label="Password" id="password" name="password" type="password" required placeholder="••••••••" />
          {error && <p className="text-small text-red-500">{error}</p>}
          <Button type="submit" loading={loading} className="w-full">Sign In</Button>
        </form>
      </div>
    </div>
  )
}
