import type { Metadata } from 'next'
import { Code, Palette, Gear, Rocket, ArrowRight, Check } from '@phosphor-icons/react/ssr'
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
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Human-centered interfaces that balance aesthetics with conversion. Research-driven design that users love.',
    features: ['Wireframing & Prototyping', 'Design Systems', 'User Research', 'Interaction Design', 'Usability Testing'],
    color: '#06b6d4',
  },
  {
    icon: Gear,
    title: 'Automation',
    description: 'Smart workflows powered by AI and no-code tools. Automate repetitive tasks and focus on growth.',
    features: ['n8n Workflows', 'AI Integration', 'CRM Automation', 'Data Pipelines', 'Chatbots'],
    color: '#f59e0b',
  },
  {
    icon: Rocket,
    title: 'Digital Strategy',
    description: 'Data-driven roadmaps that align technology, design, and business goals for maximum impact.',
    features: ['Tech Stack Advisory', 'Growth Strategy', 'SEO & Analytics', 'Performance Audits', 'Digital Transformation'],
    color: '#10b981',
  },
]

export default function ServicesPage() {
  return (
    <div className="page-container pt-32 sm:pt-36 pb-24">
      <div className="mb-16 sm:mb-20 max-w-[600px]">
        <Badge variant="accent" className="mb-4">Services</Badge>
        <h1 className="text-hero text-fg-primary mb-4">What we offer.</h1>
        <p className="text-regular text-fg-tertiary max-w-[480px]">
          Comprehensive digital services tailored to your business needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="group rounded-xl border border-line-tertiary bg-bg-level-1 p-6 sm:p-8 transition-all duration-300 hover:border-line-primary hover:bg-bg-level-2"
          >
            <div
              className="size-12 rounded-xl flex items-center justify-center mb-6"
              style={{ backgroundColor: `${service.color}15` }}
            >
              <service.icon size={26} style={{ color: service.color }} weight="duotone" />
            </div>
            <h2 className="text-title text-fg-primary mb-3">{service.title}</h2>
            <p className="text-regular text-fg-tertiary mb-6 leading-relaxed">{service.description}</p>
            <ul className="space-y-2.5">
              {service.features.map((f) => (
                <li key={f} className="text-small text-fg-secondary flex items-center gap-2.5">
                  <Check size={14} className="text-accent flex-shrink-0" weight="bold" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
