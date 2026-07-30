import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { dbConnect } from '@/lib/mongodb'
import { BlogPost } from '@/models/BlogPost'
import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'
import { ArrowLeft } from '@phosphor-icons/react/ssr'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await dbConnect()
  const post = await BlogPost.findOne({ slug: (await params).slug, published: true }).lean()
  if (!post) return {}
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
  }
}

export default async function BlogDetailPage({ params }: Props) {
  await dbConnect()
  const post = await BlogPost.findOne({ slug: (await params).slug, published: true }).lean()

  if (!post) notFound()

  return (
    <article className="page-container pt-36 pb-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-small text-fg-tertiary hover:text-fg-primary transition-colors mb-8"
      >
        <ArrowLeft size={16} /> Back to Blog
      </Link>

      <header className="max-w-[720px] mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.map((tag: string) => <Badge key={tag}>{tag}</Badge>)}
        </div>
        <h1 className="text-display text-fg-primary mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-small text-fg-tertiary">
          <time>{formatDate(post.createdAt)}</time>
          {post.author && <span>— {post.author}</span>}
        </div>
      </header>

      <div
        className="prose prose-invert max-w-[720px] text-regular text-fg-secondary leading-relaxed space-y-4 [&_h2]:text-title [&_h2]:text-fg-primary [&_h2]:mt-12 [&_h3]:text-large [&_h3]:text-fg-primary [&_h3]:mt-8 [&_a]:text-accent [&_a]:hover:underline [&_code]:text-small [&_code]:bg-bg-level-2 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_pre]:bg-bg-level-2 [&_pre]:p-4 [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-line-tertiary [&_img]:rounded-xl [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-fg-tertiary"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}
