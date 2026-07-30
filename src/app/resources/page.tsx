'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { PageContainer } from '@/components/layout/PageContainer'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { revealVariants, staggerContainer, staggerItem } from '@/lib/animations'
import { ArrowRight, BookOpen, Newspaper, Users, GraduationCap, Calendar, Clock, GithubLogo, TwitterLogo, LinkedinLogo } from '@phosphor-icons/react/ssr'

const resources = [
  {
    category: 'Blog',
    icon: Newspaper,
    href: '/blog',
    description: 'Deep dives on product strategy, engineering, AI, and design.',
    count: '24 posts',
    latest: { title: 'Shipping AI agents in production', date: '2 days ago', href: '/blog/shipping-ai-agents' },
    color: 'accent',
  },
  {
    category: 'Updates',
    icon: Calendar,
    href: '/updates',
    description: 'Product releases, feature announcements, and behind-the-scenes.',
    count: '12 updates',
    latest: { title: 'v3.2 — Real-time collaboration', date: '1 week ago', href: '/updates/v3-2' },
    color: 'green',
  },
  {
    category: 'Guides',
    icon: GraduationCap,
    href: '/guides',
    description: 'Step-by-step tutorials and best practices for modern product teams.',
    count: '18 guides',
    latest: { title: 'Design systems for AI products', date: '3 days ago', href: '/guides/design-systems-ai' },
    color: 'amber',
  },
  {
    category: 'Community',
    icon: Users,
    href: '/community',
    description: 'Discord, events, AMAs, and the Lifi Studio builder network.',
    count: '2,400+ members',
    latest: { title: 'Monthly builder showcase', date: 'Every 1st Friday', href: '/community/events' },
    color: 'purple',
  },
]

const featuredContent = [
  { type: 'Blog', title: 'Why we switched from GraphQL to tRPC', description: 'Type-safe APIs without the complexity. Our migration story and benchmarks.', readTime: '8 min', href: '/blog/graphql-to-trpc', tag: 'Engineering' },
  { type: 'Guide', title: 'Building design systems that actually get used', description: 'Tokens, components, documentation, and governance. The complete playbook.', readTime: '15 min', href: '/guides/design-systems-adoption', tag: 'Design' },
  { type: 'Update', title: 'Launch Week: AI Agent SDK v2.0', description: 'Streaming, tools, memory, and evals. Everything new in our biggest release.', readTime: '5 min', href: '/updates/agent-sdk-v2', tag: 'Product' },
  { type: 'Blog', title: 'Measuring developer productivity without surveillance', description: 'DORA metrics, SPACE framework, and what actually correlates with outcomes.', readTime: '12 min', href: '/blog/measuring-dev-productivity', tag: 'Leadership' },
  { type: 'Guide', title: 'React Server Components mental model', description: 'When to use RSC, client components, and streaming. Mental models over rules.', readTime: '10 min', href: '/guides/rsc-mental-model', tag: 'Engineering' },
  { type: 'Blog', title: 'From 0 to 10K MRR: Our SaaS playbook', description: 'Pricing, positioning, onboarding, and retention. The exact framework we use with clients.', readTime: '20 min', href: '/blog/saas-playbook-0-to-10k', tag: 'Growth' },
]

export default function ResourcesPage() {
  return (
    <PageContainer>
      <Section size="xl" background="none">
        <div className="container-main">
          <motion.div
            className="mx-auto max-w-3xl text-center mb-20"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h1 className="text-hero font-medium text-fg-primary mb-6">
              Resources for builders.
              <span className="relative">
                {' '}Learn, ship, repeat.
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-accent/30 -z-10" />
              </span>
            </h1>
            <p className="text-large text-fg-secondary max-w-2xl mx-auto leading-relaxed">
              Curated knowledge from our team and community. No fluff, just frameworks and tactics
              you can apply today.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {resources.map((resource, i) => (
              <motion.article key={resource.category} variants={staggerItem} style={{ transitionDelay: `${i * 0.1}s` }}>
                <Card variant="default" padding="lg" className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <resource.icon size={24} weight="light" className={`text-${resource.color}`} />
                    <h2 className="text-h3 font-medium text-fg-primary">{resource.category}</h2>
                  </div>
                  <p className="text-regular text-fg-tertiary mb-4">{resource.description}</p>
                  <div className="text-small text-fg-quaternary mb-6">{resource.count}</div>
                  <div className="mb-6 p-4 bg-bg-level-2 rounded-xl">
                    <div className="text-micro text-fg-quaternary uppercase tracking-[0.12em] mb-1">Latest</div>
                    <h3 className="text-small font-medium text-fg-primary mb-1">{resource.latest.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-micro text-fg-tertiary">{resource.latest.date}</span>
                      <Link href={resource.latest.href}>
                        <Button variant="ghost" size="sm">Read <ArrowRight size={12} weight="light" /></Button>
                      </Link>
                    </div>
                  </div>
                  <Link href={resource.href}>
                    <Button variant="outline" fullWidth>Browse all {resource.category} <ArrowRight size={14} weight="light" /></Button>
                  </Link>
                </Card>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section size="xl" background="level-1" divider>
        <div className="container-main">
          <motion.div
            className="mx-auto max-w-3xl text-center mb-16"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-display font-medium text-fg-primary mb-6">Latest & featured</h2>
            <p className="text-large text-fg-secondary leading-relaxed">
              Hand-picked by our team. Updated weekly with the best new content.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {featuredContent.map((item, i) => (
              <motion.article key={item.title} variants={staggerItem} style={{ transitionDelay: `${i * 0.08}s` }}>
                <Card variant="default" padding="lg" className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" size="sm">{item.type}</Badge>
                    <span className="text-micro text-fg-quaternary">{item.readTime}</span>
                  </div>
                  <h3 className="text-h3 font-medium text-fg-primary mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-regular text-fg-tertiary flex-1 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-line-tertiary">
                    <Badge variant="default" size="sm">{item.tag}</Badge>
                    <Link href={item.href}>
                      <Button variant="ghost" size="sm">Read <ArrowRight size={12} weight="light" /></Button>
                    </Link>
                  </div>
                </Card>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="mx-auto max-w-3xl text-center mt-16"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <Link href="/blog">
              <Button variant="primary" size="lg">View all blog posts <ArrowRight size={14} weight="light" /></Button>
            </Link>
          </motion.div>
        </div>
      </Section>

      <Section size="xl" background="gradient">
        <div className="container-main">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-hero font-medium text-fg-primary mb-6">Join the builder community</h2>
            <p className="text-large text-fg-secondary mb-10 leading-relaxed">
              2,400+ product managers, engineers, designers, and founders. Weekly AMAs, monthly showcases,
              and a private Discord for deep discussions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link href="https://discord.gg/lifistudio" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg">Join Discord</Button>
              </Link>
              <Link href="/community">
                <Button variant="outline" size="lg">Explore community</Button>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-8 text-fg-tertiary">
              <a href="https://twitter.com/lifistudio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-fg-primary transition-colors">
                <TwitterLogo size={20} weight="light" /> @lifistudio
              </a>
              <a href="https://linkedin.com/company/lifistudio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-fg-primary transition-colors">
                <LinkedinLogo size={20} weight="light" /> Lifi Studio
              </a>
              <a href="https://github.com/lifistudio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-fg-primary transition-colors">
                <GithubLogo size={20} weight="light" /> github.com/lifistudio
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </PageContainer>
  )
}