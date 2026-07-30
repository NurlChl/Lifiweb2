import { NextResponse } from 'next/server'
import { dbConnect } from '@/lib/mongodb'
import { Contact } from '@/models/Contact'
import { auth } from '@/lib/auth'

export async function GET() {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  await dbConnect()
  const messages = await Contact.find().sort({ createdAt: -1 }).lean()
  const serialized = messages.map((m: any) => ({
    ...m,
    _id: m._id.toString(),
    createdAt: m.createdAt.toISOString(),
  }))

  return NextResponse.json({ messages: serialized })
}
