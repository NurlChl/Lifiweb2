import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { dbConnect } from '@/lib/mongodb'
import { BlogPost } from '@/models/BlogPost'
import { AdminBlogEditor } from './AdminBlogEditor'

interface Props {
  params: Promise<{ id: string }>
}

export default async function AdminBlogEditPage({ params }: Props) {
  const session = await auth()
  if (!session) redirect('/admin/login')

  const id = (await params).id
  await dbConnect()

  let post = null
  if (id !== 'new') {
    post = await BlogPost.findById(id).lean()
    if (!post) redirect('/admin/blog')
  }

  const serialized = post
    ? { ...post, _id: post._id.toString(), createdAt: post.createdAt.toISOString(), updatedAt: post.updatedAt.toISOString() }
    : null

  return <AdminBlogEditor post={serialized} />
}
