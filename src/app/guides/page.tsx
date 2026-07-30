'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { PageContainer } from '@/components/layout/PageContainer'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { revealVariants, staggerContainer, staggerItem } from '@/lib/animations'
import { ArrowRight, Check, Clock, GithubLogo, Download, BookOpen, Copy } from '@phosphor-icons/react/ssr'

const guides = [
  {
    slug: 'design-systems-adoption',
    title: 'Building design systems that actually get used',
    description: 'Tokens, components, documentation, and governance. The complete playbook for design system adoption.',
    category: 'Design Systems',
    difficulty: 'Intermediate',
    readTime: '15 min',
    author: 'Sarah Chen',
    date: '2024-01-15',
    tags: ['Design Systems', 'React', 'Tokens', 'Governance'],
    featured: true,
    steps: 8,
  },
  {
    slug: 'rsc-mental-model',
    title: 'React Server Components mental model',
    description: 'When to use RSC, client components, and streaming. Mental models over rules.',
    category: 'React/Next.js',
    difficulty: 'Advanced',
    readTime: '10 min',
    author: 'Marcus Chen',
    date: '2024-01-10',
    tags: ['React', 'Next.js', 'RSC', 'Architecture'],
    featured: true,
    steps: 6,
  },
  {
    slug: 'ai-agent-production',
    title: 'Shipping AI agents to production',
    description: 'Evals, observability, guardrails, and iteration loops. The engineering side of AI products.',
    category: 'AI/ML',
    difficulty: 'Advanced',
    readTime: '20 min',
    author: 'Priya Sharma',
    date: '2024-01-08',
    tags: ['AI Agents', 'LLMs', 'Evals', 'Production'],
    featured: true,
    steps: 10,
  },
  {
    slug: 'design-systems-ai',
    title: 'Design systems for AI products',
    description: 'How to design for non-deterministic outputs, streaming UIs, and agent interfaces.',
    category: 'Design + AI',
    difficulty: 'Intermediate',
    readTime: '12 min',
    author: 'Sarah Chen',
    date: '2024-01-05',
    tags: ['Design Systems', 'AI', 'UX', 'Streaming'],
    featured: false,
    steps: 7,
  },
  {
    slug: 'measuring-dev-productivity',
    title: 'Measuring developer productivity without surveillance',
    description: 'DORA metrics, SPACE framework, and what actually correlates with outcomes.',
    category: 'Engineering Leadership',
    difficulty: 'Beginner',
    readTime: '12 min',
    author: 'James Park',
    date: '2024-01-03',
    tags: ['Metrics', 'DORA', 'SPACE', 'Leadership'],
    featured: false,
    steps: 5,
  },
  {
    slug: 'saas-playbook-0-to-10k',
    title: 'From 0 to 10K MRR: Our SaaS playbook',
    description: 'Pricing, positioning, onboarding, and retention. The exact framework we use with clients.',
    category: 'Growth',
    difficulty: 'Beginner',
    readTime: '20 min',
    author: 'Lisa Wong',
    date: '2023-12-28',
    tags: ['SaaS', 'Pricing', 'Growth', 'Retention'],
    featured: false,
    steps: 12,
  },
  {
    slug: 'graphql-to-trpc',
    title: 'Why we switched from GraphQL to tRPC',
    description: 'Type-safe APIs without the complexity. Migration story, benchmarks, and trade-offs.',
    category: 'Backend',
    difficulty: 'Intermediate',
    readTime: '8 min',
    author: 'Marcus Chen',
    date: '2023-12-20',
    tags: ['GraphQL', 'tRPC', 'TypeScript', 'Migration'],
    featured: false,
    steps: 4,
  },
  {
    slug: 'react-native-expo-2024',
    title: 'React Native + Expo in 2024: The complete setup',
    description: 'Expo SDK 50+, EAS Build, OTA updates, and native modules. Production-ready config.',
    category: 'Mobile',
    difficulty: 'Intermediate',
    readTime: '18 min',
    author: 'Alex Rivera',
    date: '2023-12-15',
    tags: ['React Native', 'Expo', 'EAS', 'Mobile'],
    featured: false,
    steps: 9,
  },
  {
    slug: 'postgres-vector-rag',
    title: 'Building RAG with PostgreSQL + pgvector',
    description: 'No separate vector DB needed. Embeddings, hybrid search, and reranking in Postgres.',
    category: 'AI + Data',
    difficulty: 'Advanced',
    readTime: '14 min',
    author: 'Priya Sharma',
    date: '2023-12-10',
    tags: ['PostgreSQL', 'pgvector', 'RAG', 'Embeddings'],
    featured: false,
    steps: 6,
  },
  {
    slug: 'accessibility-checklist',
    title: 'The practical accessibility checklist for product teams',
    description: 'WCAG 2.2 AA without the overwhelm. Automate what you can, test what matters.',
    category: 'Accessibility',
    difficulty: 'Beginner',
    readTime: '10 min',
    author: 'Sarah Chen',
    date: '2023-12-05',
    tags: ['Accessibility', 'WCAG', 'Testing', 'Automation'],
    featured: false,
    steps: 5,
  },
  {
    slug: 'ci-cd-github-actions',
    title: 'CI/CD with GitHub Actions: Monorepo edition',
    description: 'Turborepo, changesets, preview deployments, and automated releases. Battle-tested config.',
    category: 'DevOps',
    difficulty: 'Intermediate',
    readTime: '12 min',
    author: 'Marcus Chen',
    date: '2023-11-28',
    tags: ['GitHub Actions', 'Turborepo', 'Monorepo', 'Deploy'],
    featured: false,
    steps: 7,
  },
  {
    slug: 'typescript-strict-mode',
    title: 'TypeScript strict mode: The migration guide',
    description: 'Turning on strict, noImplicitAny, and strictNullChecks without losing velocity.',
    category: 'TypeScript',
    difficulty: 'Beginner',
    readTime: '8 min',
    author: 'James Park',
    date: '2023-11-20',
    tags: ['TypeScript', 'Strict', 'Migration', 'Types'],
    featured: false,
    steps: 4,
  },
]

export default function GuidesPage() {
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
              Guides that get you building.
              <span className="relative">
                {' '}No fluff, just frameworks.
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-accent/30 -z-10" />
              </span>
            </h1>
            <p className="text-large text-fg-secondary max-w-2xl mx-auto leading-relaxed">
              Step-by-step tutorials and best practices from our team. Battle-tested with real clients,
              updated for 2024.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {guides.map((guide, i) => (
              <motion.article key={guide.slug} variants={staggerItem} style={{ transitionDelay: `${i * 0.08}s` }}>
                <Card variant={guide.featured ? 'elevated' : 'default'} padding="lg" className="h-full flex flex-col">
                  {guide.featured && (
                    <Badge variant="accent" className="mb-3 inline-block" size="sm">
                      Featured
                    </Badge>
                  )}
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" size="sm">{guide.category}</Badge>
                    <Badge variant="default" size="sm">{guide.difficulty}</Badge>
                  </div>
                  <h2 className="text-h3 font-medium text-fg-primary mb-2 line-clamp-2">{guide.title}</h2>
                  <p className="text-regular text-fg-tertiary flex-1 mb-4">{guide.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {guide.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-micro text-fg-quaternary bg-bg-level-2 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                    {guide.tags.length > 3 && (
                      <span className="text-micro text-fg-quaternary bg-bg-level-2 px-2 py-1 rounded-full">
                        +{guide.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-micro text-fg-quaternary mb-4">
                    <span>{guide.readTime} &middot; {guide.steps} steps</span>
                    <span>{guide.author} &middot; {new Date(guide.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <Link href={`/guides/${guide.slug}`}>
                    <Button variant="primary" fullWidth>Start guide <ArrowRight size={14} weight="light" /></Button>
                  </Link>
                </Card>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="mx-auto max-w-3xl text-center mt-20"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="text-regular text-fg-tertiary mb-6">Want to contribute a guide? We pay $500 per published guide.</p>
            <Link href="/contact">
              <Button variant="outline" size="lg">Pitch a guide <ArrowRight size={14} weight="light" /></Button>
            </Link>
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
            <h2 className="text-display font-medium text-fg-primary mb-6">Guide series</h2>
            <p className="text-large text-fg-secondary leading-relaxed">
              Curated learning paths. Start at the beginning or jump to what you need.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              { title: 'Design Systems', icon: BookOpen, description: 'Tokens, components, governance, adoption', guides: 4, color: 'accent' },
              { title: 'React/Next.js Mastery', icon: BookOpen, description: 'RSC, Server Actions, Auth, Performance', guides: 3, color: 'green' },
              { title: 'AI Engineering', icon: BookOpen, description: 'Agents, RAG, Evals, Production patterns', guides: 2, color: 'amber' },
              { title: 'Engineering Leadership', icon: BookOpen, description: 'Metrics, Hiring, Culture, Delivery', guides: 2, color: 'purple' },
            ].map((series, i) => (
              <motion.div key={series.title} variants={staggerItem} style={{ transitionDelay: `${i * 0.1}s` }}>
                <Card variant="default" padding="lg" className="h-full text-center">
                  <series.icon size={32} weight="light" className={`text-${series.color} mx-auto mb-4`} />
                  <h3 className="text-h3 font-medium text-fg-primary mb-2">{series.title}</h3>
                  <p className="text-regular text-fg-tertiary mb-4">{series.description}</p>
                  <div className="text-small text-fg-quaternary mb-4">{series.guides} guides</div>
                  <Button variant="ghost" fullWidth>Explore series <ArrowRight size={14} weight="light" /></Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>
    </PageContainer>
  )
}