import type { Metadata } from 'next'
import Link from 'next/link'
import { dbConnect } from '@/lib/mongodb'
import { BlogPost } from '@/models/BlogPost'
import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, tutorials, and updates from Lifi Studio.',
}

interface Props {
  searchParams: Promise<{ page?: string }>
}

const PER_PAGE = 9

export default async function BlogPage({ searchParams }: Props) {
  const page = Math.max(1, Number((await searchParams).page) || 1)
  await dbConnect()

  const [posts, total] = await Promise.all([
    BlogPost.find({ published: true })
      .sort({ createdAt: -1 })
      .skip((page - 1) * PER_PAGE)
      .limit(PER_PAGE)
      .select('title slug excerpt tags coverImage createdAt')
      .lean(),
    BlogPost.countDocuments({ published: true }),
  ])

  const totalPages = Math.ceil(total / PER_PAGE)

  return (
    <div className="page-container pt-36 pb-24">
      <div className="mb-16">
        <Badge variant="accent" className="mb-4">Blog</Badge>
        <h1 className="text-hero text-fg-primary mb-4">Latest insights.</h1>
        <p className="text-regular text-fg-tertiary max-w-[480px]">
          Thoughts on web development, design, and technology.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-regular text-fg-quaternary">No posts yet. Check back soon.</p>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: any) => (
              <Link key={post._id.toString()} href={`/blog/${post.slug}`}>
                <article className="group rounded-xl border border-line-tertiary bg-bg-level-1 p-6 transition-all duration-300 hover:border-line-primary hover:bg-bg-level-2 h-full flex flex-col">
                  {post.coverImage && (
                    <div className="aspect-[16/9] rounded-lg overflow-hidden mb-4 bg-bg-level-2">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${post.coverImage})` }}
                      />
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags?.slice(0, 2).map((tag: string) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <h2 className="text-title text-fg-primary mb-2 line-clamp-2 group-hover:text-fg-secondary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-regular text-fg-tertiary line-clamp-2 mb-4 flex-1">{post.excerpt}</p>
                  <time className="text-micro text-fg-quaternary">{formatDate(post.createdAt)}</time>
                </article>
              </Link>
            ))}
          </div>

          {/* Pagination */} 
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-16">
              {page > 1 && (
                <Link
                  href={`/blog?page=${page - 1}`}
                  className="rounded-lg border border-line-primary px-4 py-2 text-small text-fg-secondary hover:bg-bg-level-2 transition-colors"
                >
                  Previous
                </Link>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={`/blog?page=${p}`}
                  className={`rounded-lg border px-4 py-2 text-small transition-colors ${
                    p === page
                      ? 'border-accent bg-accent text-white'
                      : 'border-line-primary text-fg-secondary hover:bg-bg-level-2'
                  }`}
                >
                  {p}
                </Link>
              ))}
              {page < totalPages && (
                <Link
                  href={`/blog?page=${page + 1}`}
                  className="rounded-lg border border-line-primary px-4 py-2 text-small text-fg-secondary hover:bg-bg-level-2 transition-colors"
                >
                  Next
                </Link>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}
