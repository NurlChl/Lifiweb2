import type { Metadata } from 'next'
import { SERVICES } from '@/lib/constants'
import { Section } from '@/components/layout/Section'
import { PageContainer } from '@/components/layout/PageContainer'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Monitor, DeviceMobile, Brain, Palette, Check, ArrowRight } from '@phosphor-icons/react/ssr'
import Link from 'next/link'

const serviceIcons = {
  Monitor,
  DeviceMobile,
  Brain,
  Palette,
} as const

function getServiceIcon(name: string) {
  const Icon = serviceIcons[name as keyof typeof serviceIcons]
  return Icon ? <Icon size={24} weight="light" /> : null
}

export const metadata: Metadata = {
  title: 'Services — Lifi Studio',
  description: 'Full-stack web apps, mobile apps, AI integration, and design systems. Transparent pricing, AI-native delivery.',
  openGraph: {
    title: 'Services — Lifi Studio',
    description: 'Full-stack web apps, mobile apps, AI integration, and design systems. Transparent pricing, AI-native delivery.',
  },
}

export default function ServicesPage() {
  return (
    <PageContainer>
      <Section size="xl" background="level-1">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <Badge variant="accent" className="mb-6 inline-block" size="md">
            What we build
          </Badge>
          <h1 className="text-display font-medium text-fg-primary mb-6">
            Four services. One standard of craft.
          </h1>
          <p className="text-large text-fg-secondary max-w-2xl mx-auto leading-relaxed">
            Each service is delivered with the same AI-native workflow, transparent process, and obsessive attention to detail.
          </p>
        </div>

        <div className="grid-auto">
          {SERVICES.map((service, i) => (
            <article key={service.slug} className="relative">
              <Card variant="default" padding="xl" className={service.popular ? 'ring-2 ring-accent/50 relative' : ''}>
                {service.popular && (
                  <Badge variant="accent" className="absolute -top-3 left-1/2 -translate-x-1/2 mb-4 inline-block" size="sm">
                    Most Popular
                  </Badge>
                )}
                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-lg bg-accent-subtle text-accent">
                  {getServiceIcon(service.icon)}
                </div>
                <h2 className="text-title font-medium text-fg-primary mb-3">{service.name}</h2>
                <p className="text-regular text-fg-tertiary mb-8">{service.shortDescription}</p>
                <ul className="space-y-3 mb-8" role="list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-small text-fg-secondary">
                      <Check size={16} weight="fill" className="flex-shrink-0 mt-0.5 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div className="text-display font-medium text-fg-primary">{service.price}</div>
                  <Button variant={service.popular ? 'primary' : 'ghost'} size="lg">
                    <Link href="/contact">Start a project</Link>
                  </Button>
                </div>
              </Card>
            </article>
          ))}
        </div>
      </Section>

      <Section size="lg" background="none">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-display font-medium text-fg-primary mb-6">
              How we work
            </h2>
            <p className="text-large text-fg-secondary leading-relaxed">
              Our process is designed for velocity and clarity. No handoffs, no black boxes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Discover', desc: 'Strategy workshop, technical audit, and scope definition in 2 weeks.' },
              { step: '02', title: 'Design', desc: 'Design system, prototypes, and spec docs. Figma-first, dev-ready.' },
              { step: '03', title: 'Build', desc: 'AI-assisted development, daily deploys, real-time collaboration.' },
              { step: '04', title: 'Ship', desc: 'Production launch, monitoring setup, and 30-day support included.' },
              { step: '05', title: 'Scale', desc: 'Ongoing iteration, feature work, and team enablement.' },
            ].map((item, i) => (
              <Card key={item.step} variant="outlined" padding="lg" className="relative">
                <div className="text-mini text-accent font-medium mb-2">{item.step}</div>
                <h3 className="text-title font-medium text-fg-primary mb-2">{item.title}</h3>
                <p className="text-regular text-fg-tertiary">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </PageContainer>
  )
}