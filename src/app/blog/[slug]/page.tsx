import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPost, POSTS, type PostBlock } from '@/lib/posts'
import { Badge } from '@/components/ui/Badge'
import { Calendar, Clock, TwitterLogo, LinkedinLogo, ArrowRight } from '@phosphor-icons/react/ssr'
import { Section } from '@/components/layout/Section'
import { PageContainer } from '@/components/layout/PageContainer'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug)

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
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="text-h2 font-medium text-fg-primary mt-12 mb-4">{block.text}</h2>
    case 'ul':
      return (
        <ul className="my-6 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-regular text-fg-secondary leading-relaxed">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      )
    default:
      return <p className="my-6 text-regular text-fg-secondary leading-relaxed">{block.text}</p>
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
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
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} weight="light" />
                  {post.readTime}
                </span>
              </div>

              <div className="max-w-none">
                {post.content.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>

              {post.tags.length > 0 && (
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