import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { dbConnect } from '@/lib/mongodb'
import { BlogPost } from '@/models/BlogPost'
import { formatDate } from '@/lib/utils'
import { Plus } from '@phosphor-icons/react/ssr'
import { Badge } from '@/components/ui/Badge'

export default async function AdminBlogPage() {
  const session = await auth()
  if (!session) redirect('/admin/login')

  await dbConnect()
  const posts = await BlogPost.find().sort({ createdAt: -1 }).lean()

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-display text-fg-primary mb-1">Blog Posts</h1>
          <p className="text-regular text-fg-tertiary">{posts.length} posts</p>
        </div>
        <Link href="/admin/blog/new" className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-5 py-2.5 text-small font-medium hover:bg-accent-hover active:scale-[0.98] transition-all">
          <Plus size={16} /> New Post
        </Link>
      </div>
      <div className="space-y-3">
        {posts.map((post: any) => (
          <Link key={post._id.toString()} href={`/admin/blog/${post._id.toString()}`}
            className="flex items-center justify-between rounded-xl border border-line-tertiary bg-bg-level-1 px-6 py-4 hover:border-line-primary hover:bg-bg-level-2 transition-all">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-regular text-fg-primary font-medium truncate">{post.title}</span>
                {post.published ? <Badge variant="success">Published</Badge> : <Badge>Draft</Badge>}
              </div>
              <p className="text-small text-fg-tertiary truncate">{post.slug} &middot; {formatDate(post.createdAt)}</p>
            </div>
          </Link>
        ))}
        {posts.length === 0 && <p className="text-center py-12 text-regular text-fg-quaternary">No posts yet.</p>}
      </div>
    </div>
  )
}
