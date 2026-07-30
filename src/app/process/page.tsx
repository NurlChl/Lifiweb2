'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { PageContainer } from '@/components/layout/PageContainer'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { revealVariants, staggerContainer, staggerItem } from '@/lib/animations'
import { Check, Clock, Lightbulb, PencilSimple, RocketLaunch, Brain, GitPullRequest, Target, Users } from '@phosphor-icons/react/ssr'

const phases = [
  {
    number: '01',
    title: 'Discover & Define',
    icon: Lightbulb,
    duration: '2 weeks',
    description: 'We align on vision, validate assumptions, and define a clear path forward.',
    activities: [
      'Stakeholder workshops & interviews',
      'Competitive & market analysis',
      'User research & persona development',
      'Technical feasibility audit',
      'MVP scope definition & prioritization',
      'Success metrics & KPI agreement',
    ],
    deliverables: ['Discovery report', 'Product roadmap', 'Technical architecture', 'Project plan & timeline'],
  },
  {
    number: '02',
    title: 'Design & Prototype',
    icon: PencilSimple,
    duration: '3-4 weeks',
    description: 'We design the experience, build a design system, and validate with real users.',
    activities: [
      'Information architecture & user flows',
      'Wireframes & low-fidelity prototypes',
      'High-fidelity UI design & design system',
      'Interactive prototype for user testing',
      'Usability testing & iteration',
      'Design handoff with specs & tokens',
    ],
    deliverables: ['Figma design system', 'Clickable prototype', 'Design tokens & specs', 'Component library'],
  },
  {
    number: '03',
    title: 'Build & Integrate',
    icon: RocketLaunch,
    duration: '6-10 weeks',
    description: 'We develop the product with AI-accelerated workflows, continuous deployment, and quality gates.',
    activities: [
      'Sprint planning & backlog grooming',
      'Frontend development (Next.js/React/React Native)',
      'Backend API & database development',
      'Authentication, permissions, security',
      'AI agent integration & automation',
      'Automated testing (unit, e2e, visual)',
      'CI/CD pipeline & preview deployments',
      'Code review & quality gates',
    ],
    deliverables: ['Production-ready codebase', 'Deployed staging environment', 'Test coverage report', 'Documentation'],
  },
  {
    number: '04',
    title: 'Launch & Iterate',
    icon: Target,
    duration: 'Ongoing',
    description: 'We launch, monitor, and continuously improve based on real usage data.',
    activities: [
      'Production deployment & go-live',
      '30-day hypercare support',
      'Analytics & monitoring setup',
      'User feedback collection',
      'Performance optimization',
      'Feature iteration cycles',
      'A/B testing & experimentation',
      'Scaling & infrastructure tuning',
    ],
    deliverables: ['Live product', 'Analytics dashboard', 'Iteration roadmap', 'Runbooks & playbooks'],
  },
]

const principles = [
  { icon: Brain, title: 'AI-First Workflows', desc: 'Every process step is augmented by AI agents — from code gen to QA to docs.' },
  { icon: GitPullRequest, title: 'Continuous Delivery', desc: 'Ship daily. Preview deployments on every PR. Zero-downtime releases.' },
  { icon: Users, title: 'True Partnership', desc: 'We embed with your team. Shared Slack, shared rituals, shared outcomes.' },
  { icon: Clock, title: 'Time-Boxed Sprints', desc: '2-week sprints with clear goals, demos, and retrospectives. Predictable velocity.' },
  { icon: Check, title: 'Quality Gates', desc: 'Automated type-check, lint, test, and visual regression on every commit.' },
  { icon: Target, title: 'Outcome > Output', desc: 'We measure success by business impact, not story points or lines of code.' },
]

export default function ProcessPage() {
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
              Our process: from idea to{' '}
              <span className="relative">
                live product
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-accent/30 -z-10" />
              </span>
            </h1>
            <p className="text-large text-fg-secondary max-w-2xl mx-auto leading-relaxed">
              Four phases. AI-accelerated. Built for velocity and quality.
              We don&apos;t just follow a process &mdash; we continuously improve it with every project.
            </p>
          </motion.div>

          <motion.div
            className="space-y-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {phases.map((phase, i) => (
              <motion.article
                key={phase.title}
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-start">
                  <div className="lg:pr-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-hero font-medium text-fg-quaternary/50">{phase.number}</span>
                      <phase.icon size={32} weight="light" className="text-accent" />
                    </div>
                    <h3 className="text-display font-medium text-fg-primary mb-3">{phase.title}</h3>
                    <p className="text-large text-fg-tertiary mb-6">{phase.description}</p>
                    <div className="flex items-center gap-4 text-small text-fg-quaternary">
                      <Clock size={16} weight="light" />
                      <span>{phase.duration}</span>
                    </div>
                  </div>
                  <div className="lg:w-2/3 lg:pl-12 mt-8 lg:mt-0">
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {phase.activities.map((activity, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex gap-3"
                        >
                          <Check size={18} weight="light" className="text-green flex-shrink-0 mt-0.5" />
                          <span className="text-small text-fg-tertiary">{activity}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="border-t border-line-tertiary pt-6">
                      <h4 className="text-mini text-fg-quaternary uppercase tracking-[0.12em] mb-3">Deliverables</h4>
                      <ul className="flex flex-wrap gap-2">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="text-small text-fg-tertiary bg-bg-level-2 px-3 py-1.5 rounded-full">
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section size="lg" background="level-1" divider>
        <div className="container-main">
          <motion.div
            className="mx-auto max-w-3xl text-center mb-16"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-display font-medium text-fg-primary mb-6">How we work differently</h2>
            <p className="text-large text-fg-secondary leading-relaxed">
              Six principles that compound. Each one makes the next more powerful.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {principles.map((principle, i) => (
              <motion.article
                key={principle.title}
                variants={staggerItem}
              >
                <Card variant="default" padding="lg" className="h-full">
                  <principle.icon size={24} weight="light" className="text-accent mb-4" />
                  <h3 className="text-h3 font-medium text-fg-primary mb-2">{principle.title}</h3>
                  <p className="text-regular text-fg-tertiary">{principle.desc}</p>
                </Card>
              </motion.article>
            ))}
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
            <h2 className="text-hero font-medium text-fg-primary mb-6">
              Ready to start your project?
            </h2>
            <p className="text-large text-fg-secondary mb-10 leading-relaxed">
              Let&apos;s run a discovery sprint. Two weeks. Clear direction. Zero commitment to continue.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg">Start a discovery sprint</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">Learn more about us</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </PageContainer>
  )
}