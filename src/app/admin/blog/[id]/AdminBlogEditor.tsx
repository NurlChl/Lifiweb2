'use client'

import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

interface PostData {
  _id?: string
  title?: string
  slug?: string
  excerpt?: string
  content?: string
  tags?: string[]
  published?: boolean
  author?: string
}

export function AdminBlogEditor({ post }: { post: PostData | null }) {
  const router = useRouter()
  const isNew = !post
  const [saving, setSaving] = useState(false)

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSaving(true)

    const form = e.currentTarget
    const elements = form.elements as unknown as Record<string, HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    const data: Record<string, unknown> = {
      title: (elements.title as HTMLInputElement).value,
      slug: (elements.slug as HTMLInputElement).value,
      excerpt: (elements.excerpt as HTMLTextAreaElement).value,
      content: (elements.content as HTMLTextAreaElement).value,
      author: (elements.author as HTMLInputElement).value,
      tags: (elements.tags as HTMLInputElement).value.split(',').map(t => t.trim()).filter(Boolean),
      published: (elements.published as HTMLInputElement).checked,
    }

    const method = isNew ? 'POST' : 'PATCH'
    const url = isNew ? '/api/blog' : `/api/blog/${post!._id}`

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      router.push('/admin/blog')
      router.refresh()
    } catch {
      alert('Error saving post')
    } finally {
      setSaving(false)
    }
  }, [isNew, post, router])

  return (
    <div>
      <h1 className="text-display text-fg-primary mb-10">{isNew ? 'New Post' : 'Edit Post'}</h1>
      <form onSubmit={handleSubmit} className="max-w-[720px] space-y-6">
        <Input label="Title" id="title" name="title" defaultValue={post?.title} required />
        <Input label="Slug" id="slug" name="slug" defaultValue={post?.slug} required />
        <div className="space-y-2">
          <label htmlFor="excerpt" className="text-small text-fg-secondary block">Excerpt</label>
          <textarea id="excerpt" name="excerpt" rows={3} defaultValue={post?.excerpt}
            className="w-full rounded-lg border border-line-primary bg-bg-level-1 px-4 py-3 text-regular text-fg-primary placeholder:text-fg-quaternary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25 transition-all resize-y" />
        </div>
        <Input label="Author" id="author" name="author" defaultValue={post?.author} />
        <Input label="Tags (comma-separated)" id="tags" name="tags" defaultValue={post?.tags?.join(', ')} />
        <div className="space-y-2">
          <label htmlFor="content" className="text-small text-fg-secondary block">Content (HTML)</label>
          <textarea id="content" name="content" rows={20} defaultValue={post?.content} required
            className="w-full rounded-lg border border-line-primary bg-bg-level-1 px-4 py-3 text-regular text-fg-primary placeholder:text-fg-quaternary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25 transition-all font-mono text-small resize-y" />
        </div>
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" name="published" defaultChecked={post?.published} className="accent-accent size-4" />
          <span className="text-regular text-fg-secondary">Published</span>
        </label>
        <div className="flex gap-4 pt-4">
          <Button type="submit" loading={saving}>{isNew ? 'Create Post' : 'Save Changes'}</Button>
          <Button type="button" variant="ghost" onClick={() => router.push('/admin/blog')}>Cancel</Button>
        </div>
      </form>
    </div>
  )
}
