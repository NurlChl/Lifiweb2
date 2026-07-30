'use client'

import { motion } from 'motion/react'
import { Code, Palette, Gear, Rocket, ArrowRight } from '@phosphor-icons/react'
import Link from 'next/link'

const features = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'High-performance web applications using Next.js, React, and modern architectures. From landing pages to full SaaS platforms.',
    tags: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
    color: '#7170ff',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Human-centered interfaces that balance aesthetics with conversion. Research-driven design that users love.',
    tags: ['Figma', 'Prototyping', 'Design Systems'],
    color: '#06b6d4',
  },
  {
    icon: Gear,
    title: 'Automation',
    description: 'Smart workflows powered by AI and no-code tools. Automate repetitive tasks and focus on growth.',
    tags: ['n8n', 'AI Agents', 'CRM'],
    color: '#f59e0b',
  },
  {
    icon: Rocket,
    title: 'Digital Strategy',
    description: 'Data-driven roadmaps that align technology, design, and business goals for maximum impact.',
    tags: ['SEO', 'Analytics', 'Growth'],
    color: '#10b981',
  },
]

export function Features() {
  return (
    <section className="section-padding border-t border-line-tertiary overflow-hidden">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-mini text-accent font-medium uppercase tracking-[0.15em] mb-4"
          >
            What We Do
          </motion.span>
          <h2 className="text-display text-fg-primary tracking-[-0.03em] max-w-[600px]">
            End-to-end digital craftsmanship.
          </h2>
          <p className="mt-4 text-regular text-fg-tertiary max-w-[500px]">
            Every project is an opportunity to push boundaries and deliver measurable impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group relative rounded-xl border border-line-tertiary bg-bg-level-1 p-6 sm:p-8 transition-all duration-300 hover:border-line-primary hover:bg-bg-level-2"
            >
              <div
                className="size-10 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon size={22} className="transition-transform duration-300 group-hover:scale-110" style={{ color: feature.color }} weight="duotone" />
              </div>
              <h3 className="text-title text-fg-primary mb-3">{feature.title}</h3>
              <p className="text-regular text-fg-tertiary leading-relaxed mb-5">{feature.description}</p>
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag) => (
                  <span key={tag} className="text-tiny px-2 py-1 rounded-md bg-bg-level-2 text-fg-quaternary border border-line-tertiary">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-regular text-fg-tertiary hover:text-accent transition-colors duration-200"
          >
            Explore all services
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
