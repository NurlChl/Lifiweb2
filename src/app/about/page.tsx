import type { Metadata } from 'next'
import { VALUES, TESTIMONIALS, STATS, CLIENTS } from '@/lib/constants'
import { Section } from '@/components/layout/Section'
import { PageContainer } from '@/components/layout/PageContainer'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Avatar } from '@/components/ui/Avatar'
import { RocketLaunch, Brain, Diamond, Eye, ArrowRight, Quotes } from '@phosphor-icons/react/ssr'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Lifi Studio',
  description: 'We are a digital product studio building for the AI era. Meet our team, values, and approach.',
  openGraph: {
    title: 'About — Lifi Studio',
    description: 'We are a digital product studio building for the AI era. Meet our team, values, and approach.',
  },
}

const valueIcons = {
  RocketLaunch,
  Brain,
  Diamond,
  Eye,
} as const

function getValueIcon(name: string) {
  const Icon = valueIcons[name as keyof typeof valueIcons]
  return Icon ? <Icon size={24} weight="light" /> : null
}

export default function AboutPage() {
  return (
    <PageContainer>
      <Section size="xl" background="level-1">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <Badge variant="accent" className="mb-6 inline-block" size="md">
            Who we are
          </Badge>
          <h1 className="text-display font-medium text-fg-primary mb-6">
            A new species of digital studio.
          </h1>
          <p className="text-large text-fg-secondary max-w-2xl mx-auto leading-relaxed">
            We&apos;re a team of designers, engineers, and AI specialists who believe the future of product development
            is autonomous, collaborative, and crafted. We don&apos;t just build software &mdash; we build the systems that let teams ship at AI speed.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {VALUES.map((value, i) => (
            <Card key={value.title} variant="default" padding="lg" className="h-full">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-accent-subtle text-accent">
                {getValueIcon(value.icon)}
              </div>
              <h3 className="text-title font-medium text-fg-primary mb-2">{value.title}</h3>
              <p className="text-regular text-fg-tertiary">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section size="lg" background="none">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-display font-medium text-fg-primary mb-6">
              By the numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-hero font-medium text-fg-primary mb-2">{stat.value}</div>
                <div className="text-small text-fg-tertiary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section size="lg" background="level-1">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <Badge variant="accent" className="mb-6 inline-block" size="md">
              Our principles
            </Badge>
            <h2 className="text-display font-medium text-fg-primary mb-6">
              How we operate
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Ship Fast, Iterate Faster', desc: 'Velocity compounds. We optimize for learning cycles, not perfect first attempts.', icon: ArrowRight },
              { title: 'AI-Native by Default', desc: 'Every workflow we build assumes AI participation. Humans direct, agents execute.', icon: Brain },
              { title: 'Craft Over Commodity', desc: 'Details differentiate. Animation, micro-interactions, error states \u2014 they&apos;re features, not polish.', icon: Diamond },
              { title: 'Radical Transparency', desc: 'Open process, open pricing, open source when possible. No black boxes.', icon: Eye },
            ].map((item, i) => (
              <Card key={item.title} variant="outlined" padding="lg" className="flex gap-4">
                <div className="flex-shrink-0 size-10 items-center justify-center rounded-lg bg-accent-subtle text-accent">
                  <item.icon size={20} weight="light" />
                </div>
                <div>
                  <h3 className="text-title font-medium text-fg-primary mb-1">{item.title}</h3>
                  <p className="text-regular text-fg-tertiary">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section size="lg" background="none">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-display font-medium text-fg-primary mb-6">
              Trusted by the best
            </h2>
            <p className="text-large text-fg-secondary leading-relaxed">
              Teams at leading companies choose Lifi Studio for their most critical products.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {CLIENTS.map((client) => (
              <span key={client.name} className="text-small text-fg-tertiary font-medium">{client.name}</span>
            ))}
          </div>
        </div>
      </Section>

      <Section size="lg" background="level-1">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-display font-medium text-fg-primary mb-6">
              What our clients say
            </h2>
          </div>
          <div className="grid-auto max-w-5xl mx-auto">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.author} variant="default" padding="lg" className="relative">
                <Quotes size={32} weight="light" className="text-accent/20 mb-6" />
                <blockquote className="text-large text-fg-primary mb-8 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fallback={testimonial.author.split(' ').map(n => n[0]).join('')}
                    size="lg"
                  />
                  <div>
                    <div className="text-regular font-medium text-fg-primary">{testimonial.author}</div>
                    <div className="text-small text-fg-tertiary">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section size="lg" background="none">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-display font-medium text-fg-primary mb-6">
              Ready to work together?
            </h2>
            <p className="text-large text-fg-secondary mb-10 leading-relaxed">
              Let&apos;s build something remarkable.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-regular font-medium text-white hover:bg-accent-hover transition-all duration-200 active:scale-[0.98] shadow-lg shadow-accent/25"
            >
              Start a project
              <ArrowRight size={18} weight="fill" />
            </Link>
          </div>
        </div>
      </Section>
    </PageContainer>
  )
}