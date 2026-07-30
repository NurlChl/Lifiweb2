import type { Metadata } from 'next'
import Link from 'next/link'
import { Code, Palette, Gear, Rocket, Check, ArrowRight, Star } from '@phosphor-icons/react/ssr'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our services — web development, UI/UX design, automation, and digital strategy.',
}

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'High-performance web applications using Next.js, React, and modern architectures. From landing pages to full SaaS platforms.',
    features: ['Next.js & React', 'Tailwind CSS', 'API Integration', 'Performance Optimization', 'Headless CMS'],
    color: '#7170ff',
    popular: true,
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Human-centered interfaces that balance aesthetics with conversion. Research-driven design that users love.',
    features: ['Wireframing & Prototyping', 'Design Systems', 'User Research', 'Interaction Design', 'Usability Testing'],
    color: '#06b6d4',
    popular: false,
  },
  {
    icon: Gear,
    title: 'Automation',
    description: 'Smart workflows powered by AI and no-code tools. Automate repetitive tasks and focus on growth.',
    features: ['n8n Workflows', 'AI Integration', 'CRM Automation', 'Data Pipelines', 'Chatbots'],
    color: '#f59e0b',
    popular: false,
  },
  {
    icon: Rocket,
    title: 'Digital Strategy',
    description: 'Data-driven roadmaps that align technology, design, and business goals for maximum impact.',
    features: ['Tech Stack Advisory', 'Growth Strategy', 'SEO & Analytics', 'Performance Audits', 'Digital Transformation'],
    color: '#10b981',
    popular: false,
  },
]

export default function ServicesPage() {
  return (
    <div className="page-container pt-32 sm:pt-36 pb-24">
      {/* Header */}
      <div className="mb-16 sm:mb-20 max-w-[600px]">
        <Badge variant="accent" className="mb-4">Services</Badge>
        <h1 className="text-hero text-fg-primary mb-4">
          What we{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#a78bfa]">
            offer.
          </span>
        </h1>
        <p className="text-regular text-fg-tertiary max-w-[480px]">
          Comprehensive digital services tailored to your business needs.
        </p>
      </div>

      {/* Services Grid — Linear Pricing Style */}
      <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className={`relative group rounded-xl border p-6 sm:p-8 transition-all duration-300 flex flex-col ${
              service.popular
                ? 'border-accent/30 hover:border-accent/60 bg-gradient-to-b from-bg-level-1/80 to-bg-level-1 shadow-[0_0_40px_-12px_rgba(113,112,255,0.12)]'
                : 'border-line-tertiary bg-bg-level-1 hover:border-line-primary hover:bg-bg-level-2'
            }`}
          >
            {/* Popular badge */}
            {service.popular && (
              <div className="absolute -top-3 left-6">
                <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-0.5 text-tiny font-medium text-white whitespace-nowrap shadow-sm">
                  <Star size={10} weight="fill" />
                  Most Popular
                </span>
              </div>
            )}

            {/* Icon */}
            <div
              className="size-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundColor: `${service.color}15` }}
            >
              <service.icon size={24} style={{ color: service.color }} weight="duotone" />
            </div>

            {/* Content */}
            <h2 className="text-title text-fg-primary mb-3">{service.title}</h2>
            <p className="text-regular text-fg-tertiary mb-6 leading-relaxed flex-1">{service.description}</p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {service.features.map((f) => (
                <li key={f} className="text-small text-fg-secondary flex items-center gap-2.5">
                  <span className="size-4 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-accent" weight="bold" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center gap-2 w-full rounded-lg py-2.5 text-small font-medium transition-all duration-200 ${
                service.popular
                  ? 'bg-accent text-white hover:bg-accent-hover shadow-sm'
                  : 'border border-line-primary text-fg-secondary hover:text-fg-primary hover:bg-bg-level-2'
              }`}
            >
              Get Started
              <ArrowRight size={14} weight="bold" className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 text-center">
        <p className="text-small text-fg-tertiary mb-4">Not sure which service fits your project?</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-line-primary px-6 py-3 text-regular font-medium text-fg-secondary hover:text-fg-primary hover:bg-bg-level-2 transition-all duration-200"
        >
          Let&apos;s Talk
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
