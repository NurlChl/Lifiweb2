'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { revealVariants } from '@/lib/animations'
import { ArrowRight } from '@phosphor-icons/react/ssr'

export function CTA() {
  return (
    <section className="section relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 id="cta-heading" className="text-hero font-medium text-fg-primary mb-6">
            Built for the future.{' '}
            <span className="relative">
              Available today.
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-accent/30 -z-10" />
            </span>
          </h2>
          <p className="text-large text-fg-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Ready to ship faster with AI-native workflows? Let&apos;s build something remarkable together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-regular font-medium text-white hover:bg-accent-hover transition-all duration-200 active:scale-[0.98] shadow-lg shadow-accent/25"
            >
              Start a project
              <ArrowRight size={18} weight="fill" className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line-primary px-8 py-4 text-regular font-medium text-fg-secondary hover:bg-bg-level-1 hover:text-fg-primary hover:border-line-secondary transition-all duration-200"
            >
              Learn more
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}