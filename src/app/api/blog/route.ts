import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/mongodb'
import { BlogPost } from '@/models/BlogPost'

const API_KEY = process.env.LIFISTUDIO_API_KEY!

function checkAuth(req: NextRequest) {
  const key = req.headers.get('x-api-key')
  return key === API_KEY
}

function toPostBlock(content: string) {
  return content.split('\n\n').map((block) => {
    const trimmed = block.trim()
    if (trimmed.startsWith('## ')) return { type: 'h2' as const, text: trimmed.slice(3) }
    if (trimmed.startsWith('- ')) return { type: 'ul' as const, items: trimmed.split('\n').map(l => l.replace(/^-\s*/, '')) }
    return { type: 'p' as const, text: trimmed }
  })
}

export async function GET(req: NextRequest) {
  await dbConnect()
  const { searchParams } = new URL(req.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')
  const published = searchParams.get('published')

  const query: Record<string, unknown> = {}
  if (published !== null) query.published = published === 'true'

  const [posts, total] = await Promise.all([
    BlogPost.find(query).sort({ publishedAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
    BlogPost.countDocuments(query),
  ])

  return NextResponse.json({ posts, page, limit, total, totalPages: Math.ceil(total / limit) })
}

export async function POST(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  await dbConnect()
  const body = await req.json()

  const slug = body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  const existing = await BlogPost.findOne({ slug })
  if (existing) return NextResponse.json({ error: 'Slug exists' }, { status: 409 })

  const post = await BlogPost.create({
    ...body,
    slug,
    content: typeof body.content === 'string' ? body.content : JSON.stringify(body.content),
    published: body.published ?? false,
    publishedAt: body.published ? new Date() : undefined,
  })

  return NextResponse.json(post, { status: 201 })
}