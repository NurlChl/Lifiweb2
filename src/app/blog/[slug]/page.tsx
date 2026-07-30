import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { dbConnect } from '@/lib/mongodb'
import { BlogPost } from '@/models/BlogPost'
import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'
import { Calendar, Clock, TwitterLogo, LinkedinLogo, ArrowRight, ArrowLeft } from '@phosphor-icons/react/ssr'
import { Section } from '@/components/layout/Section'
import { PageContainer } from '@/components/layout/PageContainer'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await dbConnect()
  const post = await BlogPost.findOne({ slug: (await params).slug }).lean()

  if (!post) {
    return { title: 'Post Not Found — Lifi Studio' }
  }

  return {
    title: `${post.title} — Lifi Studio`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt?.toISOString(),
      tags: post.tags,
      images: post.coverImage ? [post.coverImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  await dbConnect()
  const { slug } = await params
  const post = await BlogPost.findOne({ slug }).lean()

  if (!post || !post.published) {
    notFound()
  }

  return (
    <PageContainer>
      <Section size="xl" background="level-1">
        <div className="container-main">
          <article>
            <div className="mx-auto max-w-3xl">
              <Badge variant="accent" size="sm" className="mb-6 inline-block">
                {post.category}
              </Badge>

              <h1 className="text-hero font-medium text-fg-primary mb-6">{post.title}</h1>

              <div className="flex items-center gap-6 text-small text-fg-quaternary mb-12">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} weight="light" />
                  {formatDate(post.publishedAt || post.createdAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} weight="light" />
                  {post.readTime}
                </span>
              </div>

              {post.coverImage && (
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}

              <div
                className="prose prose-invert max-w-none text-regular text-fg-secondary leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {post.tags && post.tags.length > 0 && (
                <div className="mt-16 pt-8 border-t border-line-tertiary">
                  <h3 className="text-title font-medium text-fg-primary mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="default" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-16 pt-8 border-t border-line-tertiary">
                <h3 className="text-title font-medium text-fg-primary mb-6">Share this post</h3>
                <div className="flex gap-4">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://lifistudio.id/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-10 items-center justify-center rounded-full bg-bg-level-1 border border-line-tertiary text-fg-secondary hover:bg-accent/10 hover:text-accent hover:border-accent/20 transition-all duration-200"
                  >
                    <TwitterLogo size={20} weight="light" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://lifistudio.id/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-10 items-center justify-center rounded-full bg-bg-level-1 border border-line-tertiary text-fg-secondary hover:bg-accent/10 hover:text-accent hover:border-accent/20 transition-all duration-200"
                  >
                    <LinkedinLogo size={20} weight="light" />
                  </a>
                </div>
              </div>

              <div className="mt-16">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-small font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  <ArrowRight size={16} weight="light" />
                  Back to blog
                </Link>
              </div>
            </div>
          </article>
        </div>
      </Section>
    </PageContainer>
  )
}