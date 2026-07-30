import type { Metadata } from 'next'
import Link from 'next/link'
import { Target, Lightbulb, Users, Heart, Globe, ArrowRight } from '@phosphor-icons/react/ssr'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Lifi Studio — our mission, values, and approach to digital craftsmanship.',
}

const values = [
  {
    icon: Target,
    title: 'Precision',
    desc: 'Every pixel, every line of code, every interaction — crafted with intention. We don\'t ship good enough.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'We stay ahead of the curve, bringing the latest tools and techniques to every project we touch.',
  },
  {
    icon: Users,
    title: 'Partnership',
    desc: 'Your success is ours. We embed with your team, move as one, and ship together.',
  },
  {
    icon: Heart,
    title: 'Craft',
    desc: 'Design and engineering in harmony. Beautiful interfaces backed by clean, maintainable code.',
  },
]

const stats = [
  { label: 'Years in business', value: '4+' },
  { label: 'Projects delivered', value: '40+' },
  { label: 'Happy clients', value: '25+' },
  { label: 'Team members', value: '8' },
]

export default function AboutPage() {
  return (
    <div className="page-container pt-32 sm:pt-36 pb-24">
      {/* Hero */}
      <div className="mb-20 max-w-[680px]">
        <Badge variant="accent" className="mb-4">About</Badge>
        <h1 className="text-hero text-fg-primary mb-5">
          Building digital products{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#a78bfa]">
            that matter.
          </span>
        </h1>
        <p className="text-large text-fg-tertiary max-w-[520px] leading-relaxed">
          Lifi Studio is a small digital agency focused on web development, UI/UX design, and automation.
          We partner with businesses to create modern, performant digital products that drive real growth.
        </p>
      </div>

      {/* Mission */}
      <div className="rounded-xl border border-line-tertiary bg-gradient-to-b from-bg-level-1/80 to-bg-level-1 p-8 sm:p-12 mb-20">
        <div className="max-w-[640px]">
          <span className="text-mini text-accent font-medium uppercase tracking-[0.15em] mb-4 block">Our Mission</span>
          <h2 className="text-display text-fg-primary mb-5">
            We believe great products come from{' '}
            <span className="text-fg-secondary">deep collaboration</span> and{' '}
            <span className="text-fg-secondary">obsessive attention to detail.</span>
          </h2>
          <p className="text-regular text-fg-tertiary leading-relaxed">
            Every project starts with understanding — your audience, your goals, your constraints.
            From there we design and build with intention, treating every component, every animation,
            every micro-interaction as a chance to earn the user&apos;s trust.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden border border-line-tertiary mb-20">
        {stats.map((s) => (
          <div key={s.label} className="bg-bg-level-1 p-8 text-center">
            <p className="text-hero text-fg-primary mb-1">{s.value}</p>
            <p className="text-small text-fg-tertiary">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="mb-20">
        <span className="text-mini text-accent font-medium uppercase tracking-[0.15em] mb-4 block">Our Values</span>
        <h2 className="text-display text-fg-primary mb-10">What drives us.</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {values.map((v) => (
            <div
              key={v.title}
              className="group rounded-xl border border-line-tertiary bg-bg-level-1 p-6 sm:p-8 hover:border-line-primary hover:bg-bg-level-2 transition-all duration-300"
            >
              <v.icon size={24} className="text-accent mb-5" weight="duotone" />
              <h3 className="text-title text-fg-primary mb-2">{v.title}</h3>
              <p className="text-regular text-fg-tertiary leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl border border-line-tertiary bg-bg-level-1 p-8 sm:p-12 text-center">
        <Globe size={28} className="text-accent mx-auto mb-5" weight="duotone" />
        <h2 className="text-display text-fg-primary mb-3">Let&apos;s build something great.</h2>
        <p className="text-regular text-fg-tertiary mb-8 max-w-[420px] mx-auto">
          Have a project in mind? We&apos;d love to hear about it.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-regular font-medium text-white hover:bg-accent-hover transition-all duration-200 shadow-sm"
        >
          Get in Touch
          <ArrowRight size={16} weight="bold" />
        </Link>
      </div>
    </div>
  )
}
