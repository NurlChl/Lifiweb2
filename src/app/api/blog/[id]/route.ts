import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/mongodb'
import { BlogPost } from '@/models/BlogPost'

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await dbConnect()
    const id = (await params).id
    const post = await BlogPost.findById(id).lean()
    if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    const serialized = { ...post, _id: post._id.toString(), createdAt: post.createdAt.toISOString(), updatedAt: post.updatedAt.toISOString() }
    return NextResponse.json({ post: serialized })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await dbConnect()
    const id = (await params).id
    const body = await req.json()
    const post = await BlogPost.findByIdAndUpdate(id, body, { new: true }).lean()
    if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    const serialized = { ...post, _id: post._id.toString() }
    return NextResponse.json({ post: serialized })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await dbConnect()
    const id = (await params).id
    await BlogPost.findByIdAndDelete(id)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
