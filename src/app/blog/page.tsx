'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { PageContainer } from '@/components/layout/PageContainer'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Calendar, Clock, ArrowRight } from '@phosphor-icons/react/ssr'
import { revealVariants, staggerContainer, staggerItem } from '@/lib/animations'
import { POSTS } from '@/lib/posts'

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
        <div className="container-main">
          <motion.div
            className="mx-auto max-w-3xl text-center mb-20"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <Badge variant="accent" className="mb-6 inline-block" size="md">
              Insights
            </Badge>
            <h1 className="text-display font-medium text-fg-primary mb-6">
              Thinking out loud.
            </h1>
            <p className="text-large text-fg-secondary max-w-2xl mx-auto leading-relaxed">
              Lessons learned, patterns discovered, and opinions formed while building products for teams that ship.
            </p>
          </motion.div>

          <motion.div
            className="grid-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {POSTS.map((post) => (
              <motion.article key={post.slug} variants={staggerItem} className="group">
                <Card variant="default" padding="xl" className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="accent" size="sm">{post.category}</Badge>
                  </div>
                  <h2 className="text-title font-medium text-fg-primary mb-3 group-hover:text-accent transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-regular text-fg-tertiary mb-6 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-small text-fg-quaternary mt-auto pt-4 border-t border-line-tertiary">
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
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-16"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <Link
              href="/blog/archive"
              className="inline-flex items-center gap-2 bg-transparent text-fg-secondary border border-line-primary hover:bg-bg-level-1 hover:text-fg-primary px-6 py-3 text-small font-medium rounded-full transition-all duration-150"
            >
              View all posts
              <ArrowRight size={16} weight="fill" />
            </Link>
          </motion.div>
        </div>
      </Section>

      <Section size="lg" background="none">
        <div className="container-main">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
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
          </motion.div>
        </div>
      </Section>
    </PageContainer>
  )
}