'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { PageContainer } from '@/components/layout/PageContainer'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Briefcase, MapPin, Brain, Palette, RocketLaunch, Diamond, Lightning, Sparkle, Eye, Users, Globe, Shield, Clock, Heart, Coffee, BookOpen } from '@phosphor-icons/react/ssr'
import { revealVariants, staggerContainer, staggerItem } from '@/lib/animations'

const openRoles = [
  {
    title: 'Full-Stack Engineer (AI-Native)',
    type: 'Full-time',
    location: 'Remote (Indonesia preferred)',
    description: 'Build end-to-end. Next.js, React, TypeScript, PostgreSQL, vector DBs, agent frameworks. You own features from spec to production.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'AI/ML'],
    featured: true,
  },
  {
    title: 'Product Designer (Systems Focus)',
    type: 'Full-time',
    location: 'Remote (Indonesia preferred)',
    description: 'Design systems that scale. Figma → code pipeline, tokens, Storybook, accessibility. You prototype in code.',
    tags: ['Figma', 'Design Systems', 'React', 'Storybook'],
    featured: false,
  },
  {
    title: 'AI Engineer (RAG & Agents)',
    type: 'Full-time',
    location: 'Remote (Indonesia preferred)',
    description: 'Productionize LLM workflows. RAG pipelines, eval frameworks, guardrails, function calling, cost optimization.',
    tags: ['Python', 'LangGraph', 'Vercel AI SDK', 'Vector DBs'],
    featured: false,
  },
  {
    title: 'DevRel / Technical Writer',
    type: 'Contract',
    location: 'Remote',
    description: 'Create tutorials, docs, and video content for our open-source tools and SDKs. Developer-first mindset.',
    tags: ['Writing', 'Video', 'Open Source', 'Developer Experience'],
    featured: false,
  },
]

const values = [
  { title: 'Ship Fast, Iterate Faster', desc: 'Velocity compounds. We optimize for learning cycles, not perfect first attempts.', icon: RocketLaunch },
  { title: 'AI-Native by Default', desc: 'Every workflow we build assumes AI participation. Humans direct, agents execute.', icon: Brain },
  { title: 'Craft Over Commodity', desc: 'Details differentiate. Animation, micro-interactions, error states — they\'re features, not polish.', icon: Diamond },
  { title: 'Radical Transparency', desc: 'Open process, open pricing, open source when possible. No black boxes.', icon: Eye },
]

const benefits = [
  { title: 'Remote-First', desc: 'Work from anywhere in Indonesia (or beyond). We meet quarterly in Jogja.', icon: Globe },
  { title: 'Learning Budget', desc: '$2,000/year for courses, conferences, books. No approval needed.', icon: BookOpen },
  { title: 'AI Tool Access', desc: 'Unlimited Cursor, ChatGPT Plus, Claude Pro, API credits for experiments.', icon: Lightning },
  { title: 'Health & Wellness', desc: 'Comprehensive insurance, mental health support, gym stipend.', icon: Heart },
  { title: 'Flexible Hours', desc: 'Core hours 10-3 WIB. Outside that, structure your day your way.', icon: Clock },
  { title: 'Equipment Stipend', desc: 'MacBook Pro M-series, monitor, ergonomic setup. Refresh every 2 years.', icon: Coffee },
]

export default function CareersPage() {
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
              We're hiring
            </Badge>
            <h1 className="text-display font-medium text-fg-primary mb-6">
              Ship at AI speed.
            </h1>
            <p className="text-large text-fg-secondary max-w-2xl mx-auto leading-relaxed">
              We're a small, senior team building the future of digital product delivery. No middle management, no handoffs, no theater. Just builders building for builders.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {openRoles.map((role, i) => (
              <motion.article key={role.title} variants={staggerItem}>
                <Card
                  variant="default"
                  padding="xl"
                  className={`h-full flex flex-col ${role.featured ? 'ring-2 ring-accent/30 relative' : ''}`}
                >
                  {role.featured && (
                    <Badge variant="accent" size="sm" className="mb-4 inline-block">
                      Featured
                    </Badge>
                  )}
                  <h3 className="text-title font-medium text-fg-primary mb-2">{role.title}</h3>
                  <div className="flex flex-wrap gap-2 text-small text-fg-quaternary mb-4">
                    <span className="flex items-center gap-1.5"><Briefcase size={14} weight="light" /> {role.type}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} weight="light" /> {role.location}</span>
                  </div>
                  <p className="text-regular text-fg-tertiary mb-6 flex-1">{role.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {role.tags.map((tag) => (
                      <Badge key={tag} variant="default" size="sm">{tag}</Badge>
                    ))}
                  </div>
                  <Link href={`https://lifistudio.notion.site/Careers-${role.title.replace(/\s+/g, '-')}`} target="_blank" rel="noopener noreferrer" className="mt-auto">
                    <Button variant="outline" size="sm" fullWidth>
                      View details & Apply <ArrowRight size={14} weight="light" />
                    </Button>
                  </Link>
                </Card>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="text-center mb-16"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <Link href="mailto:careers@lifistudio.id">
              <Button variant="primary" size="lg">
                Don't see your role? Email us <ArrowRight size={18} weight="fill" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>

      <Section size="xl" background="none">
        <div className="container-main">
          <motion.div
            className="mx-auto max-w-3xl text-center mb-16"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-display font-medium text-fg-primary mb-6">
              Our values in practice
            </h2>
            <p className="text-large text-fg-secondary leading-relaxed">
              Not posters on a wall. How we actually work, decide, and ship.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {values.map((value, i) => (
              <motion.article key={value.title} variants={staggerItem}>
                <Card variant="default" padding="lg" className="h-full">
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-accent-subtle text-accent mb-4">
                    <value.icon size={24} weight="light" />
                  </div>
                  <h3 className="text-h3 font-medium text-fg-primary mb-2">{value.title}</h3>
                  <p className="text-regular text-fg-tertiary">{value.desc}</p>
                </Card>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section size="xl" background="gradient">
        <div className="container-main">
          <motion.div
            className="mx-auto max-w-3xl text-center mb-16"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-display font-medium text-fg-primary mb-6">
              Benefits that matter
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {benefits.map((benefit, i) => (
              <motion.article key={benefit.title} variants={staggerItem}>
                <Card variant="default" padding="lg" className="text-center">
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-accent-subtle text-accent mb-4 mx-auto">
                    <benefit.icon size={24} weight="light" />
                  </div>
                  <h3 className="text-h3 font-medium text-fg-primary mb-2">{benefit.title}</h3>
                  <p className="text-regular text-fg-tertiary">{benefit.desc}</p>
                </Card>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Section>
    </PageContainer>
  )
}