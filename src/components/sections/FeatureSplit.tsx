'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { revealVariants, staggerContainer, staggerItem } from '@/lib/animations'
import { ArrowRight, RocketLaunch, Brain, Compass, Target, TrendUp, GitPullRequest, Code, ChartLine, ChartBar } from '@phosphor-icons/react/ssr'
import { Card } from '@/components/ui/Card'
import type { ComponentType } from 'react'
import type { IconProps } from '@phosphor-icons/react'

const featureDetails = [
  {
    id: 'autonomous',
    title: 'Make digital delivery autonomous',
    description: 'AI agents handle routine tasks — code generation, QA, deployment — so your team ships faster with fewer handoffs.',
    icon: 'Robot',
    items: [
      { icon: 'Code', label: 'Code generation', desc: 'LLM-powered scaffolding, components, APIs' },
      { icon: 'GitPullRequest', label: 'Automated QA', desc: 'Tests, linting, type-checking on every commit' },
      { icon: 'RocketLaunch', label: 'Zero-downtime deploys', desc: 'Preview, staging, production pipelines' },
      { icon: 'Brain', label: 'Agent orchestration', desc: 'Multi-step workflows with human-in-the-loop' },
    ],
  },
  {
    id: 'vision',
    title: 'Define the product vision',
    description: 'Strategy workshops, discovery sprints, and living roadmaps align stakeholders before a single line of code.',
    icon: 'Compass',
    items: [
      { icon: 'Target', label: 'Discovery sprints', desc: '2-week deep dives into problem space' },
      { icon: 'ChartLine', label: 'Living roadmaps', desc: 'Dynamic, data-driven priority queues' },
      { icon: 'ChartBar', label: 'Impact modeling', desc: 'Predict ROI before committing resources' },
      { icon: 'TrendUp', label: 'Stakeholder alignment', desc: 'Shared context, documented decisions' },
    ],
  },
  {
    id: 'execution',
    title: 'Move projects forward across teams and AI',
    description: 'Unified workspace for designers, engineers, and AI agents. Real-time sync, zero context switching.',
    icon: 'TrendUp',
    items: [
      { icon: 'ArrowRight', label: 'Real-time collaboration', desc: 'Multiplayer editing, presence, cursors' },
      { icon: 'RocketLaunch', label: 'Unified toolchain', desc: 'Design → Code → Deploy in one flow' },
      { icon: 'Brain', label: 'AI context awareness', desc: 'Agents understand your full codebase' },
      { icon: 'Target', label: 'Progress tracking', desc: 'Velocity, cycle time, throughput dashboards' },
    ],
  },
  {
    id: 'review',
    title: 'Review work and agent output',
    description: 'Built-in code review, design review, and AI output validation. Quality gates that don\'t slow you down.',
    icon: 'GitPullRequest',
    items: [
      { icon: 'Code', label: 'Smart code review', desc: 'AI-assisted diff analysis, suggestions' },
      { icon: 'ChartLine', label: 'Design review', desc: 'Visual diffs, component playground' },
      { icon: 'Brain', label: 'Agent output validation', desc: 'Eval pipelines, guardrails, rollback' },
      { icon: 'ChartBar', label: 'Quality metrics', desc: 'Coverage, complexity, debt tracking' },
    ],
  },
]

const iconMap: Record<string, ComponentType<IconProps>> = {
  Code,
  RocketLaunch,
  Brain,
  GitPullRequest,
  Target,
  ChartLine,
  ChartBar,
  TrendUp,
  ArrowRight,
  Compass,
}

const getIcon = (name: string) => {
  const Icon = iconMap[name] || Code
  return <Icon size={16} weight="light" />
}

export function FeatureSplit() {
  return (
    <section className="section bg-gradient-to-b from-bg-primary via-bg-level-1 to-bg-primary" aria-labelledby="detail-heading">
      <div className="container-main">
        <motion.div
          className="mx-auto max-w-3xl text-center mb-20"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 id="detail-heading" className="text-display font-medium text-fg-primary mb-6">
            How we work differently
          </h2>
          <p className="text-large text-fg-secondary max-w-2xl mx-auto leading-relaxed">
            Four pillars that compound. Each one makes the next more powerful.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {featureDetails.map((feature, i) => (
            <motion.article
              key={feature.id}
              variants={staggerItem}
              className="relative"
            >
              <Card variant="default" padding="lg" className="h-full">
                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-lg bg-accent-subtle text-accent">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-title font-medium text-fg-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-regular text-fg-tertiary mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-4" role="list">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <div className="flex-shrink-0 mt-0.5 text-accent">
                        {getIcon(item.icon)}
                      </div>
                      <div>
                        <div className="text-small font-medium text-fg-primary">{item.label}</div>
                        <div className="text-mini text-fg-tertiary">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 right-[-24px] w-1 h-1/2 bg-gradient-to-b from-accent/30 via-transparent to-transparent" />
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}