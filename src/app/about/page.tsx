import type { Metadata } from 'next'
import { Badge } from '@/components/ui/Badge'
import { Code, Palette, Gear, Rocket, Users, Target, Lightbulb, Star } from '@phosphor-icons/react/ssr'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Lifi Studio — our mission, values, and approach to digital craftsmanship.',
}

const values = [
  { icon: Target, title: 'Precision', desc: 'Every pixel, every line of code, every interaction — crafted with intention.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We stay ahead of the curve, bringing the latest technologies to every project.' },
  { icon: Users, title: 'Partnership', desc: 'Your success is our success. We work as an extension of your team.' },
  { icon: Star, title: 'Quality', desc: 'No shortcuts. Every deliverable meets the highest standards of excellence.' },
]

export default function AboutPage() {
  return (
    <div className="page-container pt-32 sm:pt-36 pb-24">
      <div className="max-w-[600px] mb-20">
        <Badge variant="accent" className="mb-4">About</Badge>
        <h1 className="text-hero text-fg-primary mb-6">About Us</h1>
        <p className="text-large text-fg-secondary leading-relaxed">
          Lifi Studio is a digital agency specializing in web development, UI/UX design, and automation.
          We help businesses build modern, performant digital products that drive growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mb-20">
        <div className="rounded-xl border border-line-tertiary bg-bg-level-1 p-8">
          <h2 className="text-title text-fg-primary mb-4">Our Approach</h2>
          <p className="text-regular text-fg-secondary leading-relaxed mb-4">
            We combine technical excellence with thoughtful design — every project
            is crafted with attention to detail, performance, and user experience.
          </p>
          <p className="text-regular text-fg-secondary leading-relaxed">
            From concept to launch, we partner with you to create digital products
            that make a lasting impact. No cookie-cutter solutions, just purposeful craftsmanship.
          </p>
        </div>
        <div className="rounded-xl border border-line-tertiary bg-bg-level-1 p-8">
          <h2 className="text-title text-fg-primary mb-4">Why Choose Us</h2>
          <ul className="space-y-3">
            {[
              'End-to-end service — from strategy to deployment',
              'Modern tech stack for optimal performance',
              'Data-driven design decisions',
              'Transparent communication & agile workflow',
            ].map((item) => (
              <li key={item} className="text-regular text-fg-secondary flex items-start gap-3">
                <span className="mt-1.5 size-1.5 rounded-full bg-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line-tertiary pt-16">
        <div className="mb-12">
          <span className="text-mini text-accent font-medium uppercase tracking-[0.15em] mb-4 block">Our Values</span>
          <h2 className="text-display text-fg-primary">What drives us.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-line-tertiary bg-bg-level-1 p-6 hover:border-line-primary hover:bg-bg-level-2 transition-all duration-300">
              <v.icon size={24} className="text-accent mb-4" weight="duotone" />
              <h3 className="text-title text-fg-primary mb-2">{v.title}</h3>
              <p className="text-regular text-fg-tertiary">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
