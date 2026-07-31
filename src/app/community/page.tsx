'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { PageContainer } from '@/components/layout/PageContainer'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Users, ChatCircle, Calendar, GithubLogo, TwitterLogo, LinkedinLogo, DiscordLogo, ArrowRight, Star, Code, Heart, Clock } from '@phosphor-icons/react/ssr'
import { revealVariants, staggerContainer, staggerItem } from '@/lib/animations'

interface Event {
  title: string
  date: string
  time: string
  type: 'AMA' | 'Showcase' | 'Workshop' | 'Social'
  description: string
  rsvpLink: string
}

const events: Event[] = [
  {
    title: 'Monthly Builder Showcase',
    date: 'First Friday of every month',
    time: '4:00 PM WIB',
    type: 'Showcase',
    description: 'Community members demo what they\'re building. 5-min slots, live feedback.',
    rsvpLink: 'https://discord.gg/lifistudio',
  },
  {
    title: 'AI Workflows AMA',
    date: 'January 24, 2025',
    time: '2:00 PM WIB',
    type: 'AMA',
    description: 'Ask us anything about building AI agents, RAG pipelines, and eval frameworks.',
    rsvpLink: 'https://discord.gg/lifistudio',
  },
  {
    title: 'Design System Office Hours',
    date: 'February 7, 2025',
    time: '3:00 PM WIB',
    type: 'Workshop',
    description: 'Hands-on session: tokens, components, and Storybook setup from scratch.',
    rsvpLink: 'https://discord.gg/lifistudio',
  },
]

const communityStats = [
  { value: '2.4K+', label: 'Members' },
  { value: '50+', label: 'Projects shipped' },
  { value: '12', label: 'AMAs hosted' },
  { value: '8', label: 'Countries represented' },
]

export default function CommunityPage() {
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
              Community
            </Badge>
            <h1 className="text-display font-medium text-fg-primary mb-6">
              Build together, ship faster.
            </h1>
            <p className="text-large text-fg-secondary max-w-2xl mx-auto leading-relaxed">
              A curated network of product engineers, designers, and founders. Weekly AMAs, monthly showcases, and a private Discord for deep discussions.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {communityStats.map((stat, i) => (
              <motion.div key={stat.label} variants={staggerItem} className="text-center">
                <div className="text-hero font-medium text-fg-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-small text-fg-tertiary">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mx-auto max-w-3xl text-center mt-16"
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <Link href="https://discord.gg/lifistudio" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Join Discord <ArrowRight size={18} weight="fill" />
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
              Upcoming events
            </h2>
            <p className="text-large text-fg-secondary leading-relaxed">
              Live sessions with our team and community. All free, all recorded.
            </p>
          </motion.div>

          <motion.div
            className="grid-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {events.map((event) => (
              <motion.article key={event.title} variants={staggerItem}>
                <Card variant="default" padding="xl" className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="default"
                      size="sm"
                      className={`bg-${event.type === 'AMA' ? 'accent' : event.type === 'Showcase' ? 'green' : event.type === 'Workshop' ? 'amber' : 'purple'}-subtle text-${event.type === 'AMA' ? 'accent' : event.type === 'Showcase' ? 'green' : event.type === 'Workshop' ? 'amber' : 'purple'}`}
                    >
                      {event.type}
                    </Badge>
                  </div>
                  <h3 className="text-title font-medium text-fg-primary mb-3">{event.title}</h3>
                  <p className="text-regular text-fg-tertiary mb-6 flex-1">{event.description}</p>
                  <div className="flex items-center gap-4 text-small text-fg-quaternary mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} weight="light" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} weight="light" />
                      {event.time}
                    </span>
                  </div>
                  <Link
                    href={event.rsvpLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover transition-colors font-medium mt-auto"
                  >
                    RSVP on Discord
                    <ArrowRight size={14} weight="fill" className="transition-transform group-hover:translate-x-1" />
                  </Link>
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
            <h2 className="text-display font-medium text-fg-primary mb-6">
              What members say
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Star, label: 'High-signal discussions', desc: 'No noise, just builders sharing what works' },
                { icon: Code, label: 'Code reviews & pair programming', desc: 'Get eyes on your PRs from experienced engineers' },
                { icon: Heart, label: 'Genuine connections', desc: 'Find co-founders, collaborators, and friends' },
              ].map((item) => (
                <div key={item.label} className="text-center p-6">
                  <div className="inline-flex size-14 items-center justify-center rounded-xl bg-accent-subtle text-accent mb-4">
                    <item.icon size={24} weight="light" />
                  </div>
                  <h4 className="text-h4 font-medium text-fg-primary mb-2">{item.label}</h4>
                  <p className="text-regular text-fg-tertiary">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link href="https://discord.gg/lifistudio" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg">
                  Join Discord <ArrowRight size={18} weight="fill" />
                </Button>
              </Link>
              <Link href="https://github.com/lifistudio" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  Follow on GitHub
                </Button>
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