import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { PageContainer } from '@/components/layout/PageContainer'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Calendar, Clock, ArrowRight } from '@phosphor-icons/react/ssr'

export const metadata: Metadata = {
  title: 'Blog — Lifi Studio',
  description: 'Insights on product development, AI workflows, design systems, and engineering culture.',
  openGraph: {
    title: 'Blog — Lifi Studio',
    description: 'Insights on product development, AI workflows, design systems, and engineering culture.',
  },
}

const posts = [
  {
    slug: 'shipping-at-ai-speed',
    title: 'Shipping at AI Speed: How We Cut Delivery Time by 60%',
    excerpt: 'Our AI-native workflow — from spec to production — and the tools that make it possible.',
    category: 'Engineering',
    readTime: '8 min',
    date: '2025-01-15',
    cover: '/blog/shipping-ai-speed.jpg',
  },
  {
    slug: 'design-systems-that-scale',
    title: 'Design Systems That Actually Scale',
    excerpt: 'Why most design systems fail, and how we build ones that developers love to use.',
    category: 'Design',
    readTime: '6 min',
    date: '2025-01-08',
    cover: '/blog/design-systems-scale.jpg',
  },
  {
    slug: 'autonomous-qa-agents',
    title: 'Autonomous QA Agents: Beyond Testing',
    excerpt: 'How AI agents are transforming quality assurance from a gate to a continuous process.',
    category: 'AI',
    readTime: '10 min',
    date: '2025-01-02',
    cover: '/blog/autonomous-qa.jpg',
  },
  {
    slug: 'radical-transparency-pricing',
    title: 'Radical Transparency in Agency Pricing',
    excerpt: 'Why we publish our rates, and how it leads to better client relationships.',
    category: 'Business',
    readTime: '5 min',
    date: '2024-12-28',
    cover: '/blog/transparent-pricing.jpg',
  },
]

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  return (
    <PageContainer>
      <Section size="xl" background="level-1">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <Badge variant="accent" className="mb-6 inline-block" size="md">
            Insights
          </Badge>
          <h1 className="text-display font-medium text-fg-primary mb-6">
            Thinking out loud.
          </h1>
          <p className="text-large text-fg-secondary max-w-2xl mx-auto leading-relaxed">
            Lessons learned, patterns discovered, and opinions formed while building products for teams that ship.
          </p>
        </div>

        <div className="grid-auto">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Card variant="default" padding="xl" className="h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="accent" size="sm">{post.category}</Badge>
                </div>
                <h2 className="text-title font-medium text-fg-primary mb-3 group-hover:text-accent transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-regular text-fg-tertiary mb-6 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between text-small text-fg-quaternary">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} weight="light" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} weight="light" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover transition-colors font-medium"
                  >
                    Read more
                    <ArrowRight size={14} weight="fill" className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/blog/archive"
            className="inline-flex items-center gap-2 bg-transparent text-fg-secondary border border-line-primary hover:bg-bg-level-1 hover:text-fg-primary px-6 py-3 text-small font-medium rounded-full transition-all duration-150"
          >
            View all posts
            <ArrowRight size={16} weight="fill" />
          </Link>
        </div>
      </Section>

      <Section size="lg" background="none">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-display font-medium text-fg-primary mb-6">
              Want these in your inbox?
            </h2>
            <p className="text-large text-fg-secondary mb-10 leading-relaxed">
              Weekly insights on product, design, and AI. No spam, unsubscribe anytime.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-bg-level-1 border border-line-tertiary text-fg-primary placeholder-fg-quaternary rounded-full px-5 py-3 text-regular focus:border-accent focus:outline-none transition-colors"
                required
              />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-regular font-medium text-white hover:bg-accent-hover transition-all duration-200 active:scale-[0.98]">
                Subscribe
                <ArrowRight size={16} weight="fill" />
              </button>
            </form>
          </div>
        </div>
      </Section>
    </PageContainer>
  )
}