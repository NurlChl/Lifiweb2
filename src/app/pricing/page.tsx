'use client'

import Link from 'next/link'
import { PageContainer } from '@/components/layout/PageContainer'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { motion } from 'motion/react'
import { revealVariants } from '@/lib/animations'
import { Check, X } from '@phosphor-icons/react/ssr'

const plans = [
  {
    name: 'Discovery Sprint',
    description: '2-week strategy & discovery sprint to validate your product idea before building.',
    price: '$8,000',
    period: 'one-time',
    features: [
      { label: 'Problem validation workshop', included: true },
      { label: 'User research & interviews', included: true },
      { label: 'Competitive analysis', included: true },
      { label: 'Technical feasibility audit', included: true },
      { label: 'MVP scope & roadmap', included: true },
      { label: 'Clickable prototype', included: true },
      { label: 'Detailed project plan', included: true },
      { label: 'Ongoing development', included: false },
    ],
    cta: 'Start Discovery',
    variant: 'outline' as const,
    popular: false,
  },
  {
    name: 'MVP Build',
    description: 'Full-cycle product development from design to launch in 8-12 weeks.',
    price: '$35,000',
    period: 'starting at',
    features: [
      { label: 'Product strategy & roadmap', included: true },
      { label: 'UI/UX design system', included: true },
      { label: 'Frontend (Next.js/React/React Native)', included: true },
      { label: 'Backend API & database', included: true },
      { label: 'Authentication & user management', included: true },
      { label: 'Admin dashboard', included: true },
      { label: 'Testing & QA', included: true },
      { label: 'Launch & 30-day support', included: true },
    ],
    cta: 'Start MVP',
    variant: 'primary' as const,
    popular: true,
  },
  {
    name: 'Scale & Grow',
    description: 'Ongoing partnership for scaling products, adding features, and optimizing performance.',
    price: '$8,000',
    period: '/month',
    features: [
      { label: 'Dedicated product team', included: true },
      { label: 'Bi-weekly planning & reviews', included: true },
      { label: 'Continuous feature development', included: true },
      { label: 'Performance monitoring & optimization', included: true },
      { label: 'Security audits & updates', included: true },
      { label: 'AI/ML feature integration', included: true },
      { label: 'Design system maintenance', included: true },
      { label: '24/7 critical issue support', included: false },
    ],
    cta: 'Discuss Partnership',
    variant: 'secondary' as const,
    popular: false,
  },
]

const addOns = [
  { name: 'AI Agent Integration', price: '+$5,000', description: 'Custom AI agents for your workflows' },
  { name: 'Design System Package', price: '+$3,000', description: 'Complete design tokens, components, docs' },
  { name: 'Mobile App (iOS/Android)', price: '+$15,000', description: 'React Native with native modules' },
  { name: 'Enterprise Security Audit', price: '+$4,000', description: 'SOC2, HIPAA, GDPR compliance prep' },
  { name: 'Team Training & Handoff', price: '+$2,500', description: 'Workshops, docs, knowledge transfer' },
]

export default function PricingPage() {
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
              Simple, transparent pricing.
              <span className="relative">
                {' '}No surprises.
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-accent/30 -z-10" />
              </span>
            </h1>
            <p className="text-large text-fg-secondary max-w-2xl mx-auto leading-relaxed">
              Every project is unique. These are starting points — we&apos;ll tailor the scope and timeline
              to your needs after a discovery call.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-6"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {plans.map((plan, i) => (
              <motion.article
                key={plan.name}
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <Card
                  variant={plan.popular ? 'elevated' : 'default'}
                  padding="lg"
                  className={`h-full flex flex-col ${plan.popular ? 'border-accent/30 shadow-lg shadow-accent/10' : ''}`}
                >
                  {plan.popular && (
                    <Badge variant="accent" className="mb-4 inline-block" size="sm">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="mb-6">
                    <CardTitle className="text-title font-medium text-fg-primary mb-2">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-regular text-fg-tertiary">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 mb-6">
                    <div className="mb-6">
                      <span className="text-hero font-medium text-fg-primary">{plan.price}</span>
                      <span className="text-small text-fg-tertiary ml-1">{plan.period}</span>
                    </div>
                    <ul className="space-y-3" role="list">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check size={18} weight="light" className="text-green flex-shrink-0 mt-0.5" />
                          ) : (
                            <X size={18} weight="light" className="text-line-tertiary flex-shrink-0 mt-0.5" />
                          )}
                          <span className={feature.included ? 'text-small text-fg-secondary' : 'text-small text-fg-quaternary line-through'}>
                            {feature.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-4">
                    <Button
                      variant={plan.variant}
                      fullWidth
                      size="lg"
                      className={plan.popular ? 'shadow-lg shadow-accent/25' : ''}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section size="lg" background="level-1">
        <div className="container-main">
          <motion.div
            className="mx-auto max-w-3xl text-center mb-16"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-display font-medium text-fg-primary mb-6">Add-ons & Extras</h2>
            <p className="text-large text-fg-secondary leading-relaxed">
              Extend any plan with specialized capabilities. Priced per project or monthly.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {addOns.map((addon, i) => (
              <motion.article
                key={addon.name}
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <Card variant="default" padding="lg" className="h-full">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-h3 font-medium text-fg-primary">{addon.name}</h3>
                      <span className="text-title font-medium text-accent ml-2">{addon.price}</span>
                    </div>
                  </div>
                  <p className="text-regular text-fg-tertiary">{addon.description}</p>
                </Card>
              </motion.article>
            ))}
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
              Not sure which plan fits?
            </h2>
            <p className="text-large text-fg-secondary mb-10 leading-relaxed">
              Let&apos;s hop on a 30-minute call. We&apos;ll discuss your goals, scope, and timeline —
              then recommend the right approach. No pressure, just clarity.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">Book a discovery call</Button>
            </Link>
          </motion.div>
        </div>
      </Section>

      <Section size="lg" background="level-1" divider>
        <div className="container-main">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-display font-medium text-fg-primary mb-6">FAQ</h2>
            <div className="space-y-6 text-left">
              {[
                {
                  q: 'Can I switch plans later?',
                  a: 'Absolutely. You can upgrade or downgrade at any time. We&apos;ll prorate the difference.',
                },
                {
                  q: 'What&apos;s included in the 30-day launch support?',
                  a: 'Bug fixes, minor adjustments, performance monitoring, and deployment assistance for 30 days post-launch.',
                },
                {
                  q: 'Do you offer discounts for non-profits or startups?',
                  a: 'Yes, we offer a 15% discount for registered non-profits and early-stage startups (pre-Series A).',
                },
                {
                  q: 'How does the monthly retainer work?',
                  a: 'The Scale & Grow plan is a rolling monthly commitment with a 30-day cancellation notice. Unused hours don&apos;t roll over.',
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'Bank transfer (preferred), Stripe, and Wise for international clients. 50% upfront, 50% on delivery for fixed-scope projects.',
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group border border-line-tertiary rounded-xl bg-bg-level-1 p-6 open:bg-bg-level-2"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none text-regular font-medium text-fg-primary">
                    {faq.q}
                    <svg className="size-5 text-fg-tertiary group-open:rotate-180 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-regular text-fg-tertiary leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>
    </PageContainer>
  )
}