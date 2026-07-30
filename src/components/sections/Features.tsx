'use client'

import { motion } from 'motion/react'
import { Code, Palette, Gear, Rocket } from '@phosphor-icons/react'

const features = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, performant web applications built with Next.js, Tailwind, and cutting-edge tech.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Human-centered design that balances aesthetics with usability and conversion.',
  },
  {
    icon: Gear,
    title: 'Automation',
    description: 'Streamline operations with AI-powered workflows and intelligent integrations.',
  },
  {
    icon: Rocket,
    title: 'Digital Strategy',
    description: 'Data-driven roadmaps that align technology with your business goals.',
  },
]

export function Features() {
  return (
    <section className="section-padding border-t border-line-tertiary">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-mini text-accent font-medium uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h2 className="text-display text-fg-primary tracking-[-0.03em]">
            End-to-end digital craftsmanship.
          </h2>
          <p className="mt-4 text-regular text-fg-tertiary max-w-[500px]">
            Every project is an opportunity to push boundaries and deliver measurable impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-xl border border-line-tertiary bg-bg-level-1 p-8 transition-all duration-300 hover:border-line-primary hover:bg-bg-level-2"
            >
              <feature.icon size={24} className="text-accent mb-6" weight="duotone" />
              <h3 className="text-title text-fg-primary mb-3">{feature.title}</h3>
              <p className="text-regular text-fg-tertiary leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
