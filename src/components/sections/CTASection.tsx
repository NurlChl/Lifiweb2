'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react'

export function CTASection() {
  return (
    <section className="section-padding border-t border-line-tertiary">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl border border-line-tertiary bg-gradient-to-b from-bg-level-1 to-bg-primary p-10 sm:p-16 md:p-24 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/8 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none" />

          <div className="relative">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-mini text-accent font-medium uppercase tracking-[0.15em] mb-6"
            >
              Let&apos;s Collaborate
            </motion.span>
            <h2 className="text-display text-fg-primary tracking-[-0.03em]">
              Ready to build something great?
            </h2>
            <p className="mt-4 text-regular text-fg-tertiary max-w-[400px] mx-auto">
              Let&apos;s discuss your project and create something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-regular font-medium text-white hover:bg-accent-hover transition-colors duration-200"
                >
                  Start a Project
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </motion.span>
              </Link>
              <Link href="/about">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full border border-line-primary px-6 py-3 text-regular font-medium text-fg-secondary hover:text-fg-primary hover:bg-bg-level-2 transition-all duration-200"
                >
                  Learn More
                </motion.span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
