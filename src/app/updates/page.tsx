'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { PageContainer } from '@/components/layout/PageContainer'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Calendar, Clock, ArrowRight, GithubLogo, TwitterLogo, LinkedinLogo } from '@phosphor-icons/react/ssr'
import { revealVariants, staggerContainer, staggerItem } from '@/lib/animations'

interface Update {
  slug: string
  title: string
  excerpt: string
  category: 'Feature' | 'Improvement' | 'Release' | 'Fix' | 'Tooling'
  date: string
}

const updates: Update[] = [
  {
    slug: 'ai-agent-workflows',
    title: 'New: AI Agent Workflows',
    excerpt: 'Build multi-step AI agents with built-in eval, guardrails, and human-in-the-loop.',
    category: 'Feature',
    date: '2025-01-15',
  },
  {
    slug: 'design-system-cli',
    title: 'New: Design System CLI',
    excerpt: 'Generate tokens, components, and Storybook docs from a single config file.',
    category: 'Tooling',
    date: '2025-01-08',
  },
  {
    slug: 'realtime-collaboration',
    title: 'Improved: Real-time Collaboration',
    excerpt: 'Sub-100ms latency for multiplayer editing. New presence indicators and cursors.',
    category: 'Improvement',
    date: '2025-01-02',
  },
  {
    slug: 'mobile-sdk-v2',
    title: 'New: Mobile SDK v2',
    excerpt: 'React Native SDK with Expo Router support, push notifications, and offline sync.',
    category: 'Release',
    date: '2024-12-20',
  },
  {
    slug: 'vector-search-beta',
    title: 'Beta: Vector Search Integration',
    excerpt: 'Native pgvector support with automatic embedding generation and hybrid search.',
    category: 'Feature',
    date: '2024-12-10',
  },
  {
    slug: 'analytics-dashboard-v2',
    title: 'Improved: Analytics Dashboard v2',
    excerpt: 'New charts, custom date ranges, and export to CSV/PDF. Team-level insights.',
    category: 'Improvement',
    date: '2024-11-28',
  },
  {
    slug: 'security-audit-complete',
    title: 'Release: Security Audit Complete',
    excerpt: 'SOC 2 Type II certified. Penetration test passed with zero critical findings.',
    category: 'Release',
    date: '2024-11-15',
  },
  {
    slug: 'api-rate-limiting',
    title: 'Fix: API Rate Limiting Edge Cases',
    excerpt: 'Resolved issues with burst handling and improved retry-after headers.',
    category: 'Fix',
    date: '2024-11-05',
  },
]

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const categoryStyles = {
  Feature: 'bg-accent-subtle text-accent',
  Improvement: 'bg-green-subtle text-green',
  Release: 'bg-amber-subtle text-amber',
  Fix: 'bg-red-subtle text-red',
  Tooling: 'bg-purple-subtle text-purple',
}

export default function UpdatesPage() {
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
              Changelog
            </Badge>
            <h1 className="text-display font-medium text-fg-primary mb-6">
              What&apos;s new.
            </h1>
            <p className="text-large text-fg-secondary max-w-2xl mx-auto leading-relaxed">
              Every feature, fix, and improvement. We ship fast and document everything.
            </p>
          </motion.div>

          <motion.div
            className="grid-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {updates.map((update) => (
              <motion.article key={update.slug} variants={staggerItem} className="group">
                <Card variant="default" padding="xl" className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="default"
                      size="sm"
                      className={categoryStyles[update.category as keyof typeof categoryStyles]}
                    >
                      {update.category}
                    </Badge>
                  </div>
                  <h2 className="text-title font-medium text-fg-primary mb-3 group-hover:text-accent transition-colors">
                    <Link href={`/updates/${update.slug}`}>{update.title}</Link>
                  </h2>
                  <p className="text-regular text-fg-tertiary mb-6 flex-1">{update.excerpt}</p>
                  <div className="flex items-center justify-between text-small text-fg-quaternary mt-auto pt-4 border-t border-line-tertiary">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} weight="light" />
                      {formatDate(update.date)}
                    </span>
                    <Link
                      href={`/updates/${update.slug}`}
                      className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover transition-colors font-medium"
                    >
                      View details
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
              href="/updates/archive"
              className="inline-flex items-center gap-2 bg-transparent text-fg-secondary border border-line-primary hover:bg-bg-level-1 hover:text-fg-primary px-6 py-3 text-small font-medium rounded-full transition-all duration-150"
            >
              View all updates
              <ArrowRight size={16} weight="fill" />
            </Link>
          </motion.div>
        </div>
      </Section>

      <Section size="lg" background="gradient">
        <div className="container-main">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-display font-medium text-fg-primary mb-6">
              Stay in the loop
            </h2>
            <p className="text-large text-fg-secondary mb-10 leading-relaxed">
              Get updates delivered straight to your inbox. No spam, just the good stuff.
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