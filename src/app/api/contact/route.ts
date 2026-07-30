import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/mongodb'
import { Contact } from '@/models/Contact'

export async function POST(req: NextRequest) {
  try {
    await dbConnect()
    const body = await req.json()

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await Contact.create({
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      message: body.message,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
