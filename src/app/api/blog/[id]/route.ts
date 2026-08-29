import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/mongodb'
import { BlogPost } from '@/models/BlogPost'

const API_KEY = process.env.BLOG_API_KEY || process.env.NEXT_PUBLIC_BLOG_API_KEY

function checkAuth(req: NextRequest) {
  const key = req.headers.get('x-api-key')
  return key && key === API_KEY
}

function getId(req: NextRequest) {
  return req.url.split('/api/blog/')[1]?.split('/')[0]?.split('?')[0]
}

export async function GET(req: NextRequest) {
  await dbConnect()
  const id = getId(req)
  const post = await BlogPost.findById(id).lean()
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(post)
}

export async function PATCH(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  await dbConnect()
  const id = getId(req)
  const body = await req.json()

  const update: Record<string, unknown> = { ...body }
  if (body.published === true && !body.publishedAt) update.publishedAt = new Date()
  if (body.published === false) update.publishedAt = null

  const post = await BlogPost.findByIdAndUpdate(id, update, { new: true }).lean()
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(post)
}

export async function DELETE(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  await dbConnect()
  const id = getId(req)
  const post = await BlogPost.findByIdAndDelete(id).lean()
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ success: true })
}