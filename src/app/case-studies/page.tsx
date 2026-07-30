'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { PageContainer } from '@/components/layout/PageContainer'
import { Section } from '@/components/layout/Section'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { revealVariants, staggerContainer, staggerItem } from '@/lib/animations'
import { ArrowRight, Check, GithubLogo, ArrowSquareOut, Monitor, DeviceMobile, Cpu, Database } from '@phosphor-icons/react/ssr'

const caseStudies = [
  {
    slug: 'fintech-dashboard',
    title: 'Fintech Dashboard Platform',
    tagline: 'React + Node.js dashboard for wealth management',
    description: 'Built a comprehensive portfolio management platform with real-time data, compliance reporting, and multi-tenant architecture. Reduced reporting time from hours to minutes.',
    image: '/case-studies/fintech-dashboard.jpg',
    tags: ['FinTech', 'SaaS', 'Enterprise'],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind', 'Prisma'],
    results: [
      { label: 'Reporting time', value: '-92%' },
      { label: 'User adoption', value: '+340%' },
      { label: 'Compliance audit', value: 'Passed' },
    ],
    featured: true,
  },
  {
    slug: 'health-telemedicine',
    title: 'Telemedicine Mobile App',
    tagline: 'React Native app for remote patient care',
    description: 'Cross-platform telemedicine app with video consultations, prescription management, and HIPAA-compliant data handling. Shipped to App Store & Play Store in 12 weeks.',
    image: '/case-studies/telemedicine.jpg',
    tags: ['HealthTech', 'Mobile', 'HIPAA'],
    tech: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Twilio'],
    results: [
      { label: 'App Store rating', value: '4.8★' },
      { label: 'Consultation volume', value: '50K+/mo' },
      { label: 'Crash-free sessions', value: '99.9%' },
    ],
    featured: true,
  },
  {
    slug: 'ecommerce-marketplace',
    title: 'B2B Marketplace Platform',
    tagline: 'Multi-vendor marketplace for industrial supplies',
    description: 'Scalable marketplace connecting 2000+ suppliers with enterprise buyers. Complex pricing, RFQ workflows, and ERP integrations.',
    image: '/case-studies/marketplace.jpg',
    tags: ['E-commerce', 'B2B', 'Marketplace'],
    tech: ['Next.js', 'GraphQL', 'PostgreSQL', 'Redis', 'Kubernetes'],
    results: [
      { label: 'GMV Year 1', value: '$12M+' },
      { label: 'Suppliers onboarded', value: '2,000+' },
      { label: 'Avg order value', value: '+67%' },
    ],
    featured: true,
  },
  {
    slug: 'ai-content-platform',
    title: 'AI Content Generation Platform',
    tagline: 'Generative AI for marketing teams',
    description: 'Platform for creating, reviewing, and publishing AI-generated content at scale. Custom model fine-tuning, brand voice controls, and approval workflows.',
    image: '/case-studies/ai-content.jpg',
    tags: ['AI/ML', 'SaaS', 'Marketing'],
    tech: ['Next.js', 'Python', 'LangChain', 'OpenAI', 'Vercel AI SDK'],
    results: [
      { label: 'Content output', value: '10x faster' },
      { label: 'Cost per asset', value: '-85%' },
      { label: 'Team adoption', value: '94%' },
    ],
    featured: false,
  },
  {
    slug: 'logistics-tracking',
    title: 'Logistics Tracking System',
    tagline: 'Real-time fleet & shipment visibility',
    description: 'IoT-enabled tracking platform for 500+ vehicle fleet. Live GPS, predictive ETAs, automated exceptions, and driver mobile app.',
    image: '/case-studies/logistics.jpg',
    tags: ['Logistics', 'IoT', 'Real-time'],
    tech: ['React', 'Go', 'TimescaleDB', 'MQTT', 'Mapbox'],
    results: [
      { label: 'On-time delivery', value: '+23%' },
      { label: 'Fuel savings', value: '15% YoY' },
      { label: 'Support tickets', value: '-60%' },
    ],
    featured: false,
  },
  {
    slug: 'edtech-platform',
    title: 'EdTech Learning Platform',
    tagline: 'Cohort-based learning with live sessions',
    description: 'Interactive learning platform with live streaming, breakout rooms, assignments, and progress tracking. Serves 50K+ learners globally.',
    image: '/case-studies/edtech.jpg',
    tags: ['EdTech', 'Video', 'Real-time'],
    tech: ['Next.js', 'WebRTC', 'PostgreSQL', 'Mux', 'Tailwind'],
    results: [
      { label: 'Course completion', value: '78%' },
      { label: 'NPS score', value: '72' },
      { label: 'Concurrent users', value: '10K+' },
    ],
    featured: false,
  },
]

export default function CaseStudiesPage() {
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
              Work that speaks for itself.
              <span className="relative">
                {' '}Real products, real impact.
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-accent/30 -z-10" />
              </span>
            </h1>
            <p className="text-large text-fg-secondary max-w-2xl mx-auto leading-relaxed">
              We don&apos;t just build features — we ship outcomes. Every project here started with a problem
              and ended with measurable results.
            </p>
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {caseStudies.map((study, i) => (
              <motion.article
                key={study.slug}
                variants={staggerItem}
                className={`grid lg:grid-cols-3 gap-8 lg:gap-12 items-start ${i % 2 === 0 ? '' : 'lg:[grid-template-areas:_\\"img_content\\"_]'}`}
                style={{ gridTemplateAreas: i % 2 === 0 ? '"img content"' : '"content img"' }}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-bg-level-2 lg:col-span-1" style={{ gridArea: 'img' }}>
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/10 to-green/10">
                    <span className="text-fg-tertiary text-small">Case study image</span>
                  </div>
                  {study.featured && (
                    <Badge variant="accent" className="absolute top-4 left-4" size="sm">
                      Featured
                    </Badge>
                  )}
                </div>

                <div className="lg:col-span-2 space-y-6" style={{ gridArea: 'content' }}>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="outline" size="sm">{tag}</Badge>
                    ))}
                  </div>

                  <h2 className="text-display font-medium text-fg-primary">{study.title}</h2>
                  <p className="text-title text-fg-tertiary font-medium">{study.tagline}</p>
                  <p className="text-regular text-fg-secondary leading-relaxed">{study.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((t) => (
                      <span key={t} className="text-micro text-fg-quaternary bg-bg-level-2 px-2.5 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-line-tertiary">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-h3 font-medium text-fg-primary">{result.value}</div>
                        <div className="text-micro text-fg-tertiary mt-0.5">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link href={`/case-studies/${study.slug}`}>
                      <Button variant="outline" size="sm">View case study <ArrowRight size={14} weight="light" /></Button>
                    </Link>
                    <Link href={`https://github.com/lifistudio/${study.slug}`} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm"><GithubLogo size={14} weight="light" /> Code</Button>
                    </Link>
                    <Link href={`https://${study.slug}.lifistudio.id`} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm"><ArrowSquareOut size={14} weight="light" /> Live</Button>
                    </Link>
                  </div>
                </div>
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
            <h2 className="text-display font-medium text-fg-primary mb-6">Want to see more?</h2>
            <p className="text-large text-fg-secondary mb-10 leading-relaxed">
              We have 15+ more case studies across FinTech, HealthTech, EdTech, Logistics, and AI.
              Let&apos;s chat about the ones most relevant to your industry.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">Start a conversation</Button>
            </Link>
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
            <h2 className="text-display font-medium text-fg-primary mb-6">Our expertise spans</h2>
            <p className="text-large text-fg-secondary leading-relaxed">
              Deep domain knowledge means faster ramp-up, fewer mistakes, and better architectural decisions from day one.
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
              { icon: Monitor, title: 'Web Applications', desc: 'Next.js, React, Vue, TypeScript. SSR, SSG, ISR, PWA.' },
              { icon: DeviceMobile, title: 'Mobile Apps', desc: 'React Native, Expo, iOS/Android. Store deployment, OTA updates.' },
              { icon: Cpu, title: 'Backend & APIs', desc: 'Node.js, Go, Python. REST, GraphQL, tRPC, WebSockets.' },
              { icon: Database, title: 'Data & AI', desc: 'PostgreSQL, MongoDB, Redis, Vector DBs. RAG, fine-tuning, agents.' },
            ].map((item, i) => (
              <motion.div key={item.title} variants={staggerItem}>
                <Card variant="default" padding="lg" className="h-full text-center">
                  <item.icon size={32} weight="light" className="text-accent mx-auto mb-4" />
                  <h3 className="text-h3 font-medium text-fg-primary mb-2">{item.title}</h3>
                  <p className="text-regular text-fg-tertiary">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>
    </PageContainer>
  )
}