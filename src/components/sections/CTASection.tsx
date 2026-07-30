'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react'

export function CTASection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl border border-line-tertiary bg-gradient-to-b from-bg-level-1 to-bg-primary p-10 sm:p-16 md:p-24 text-center overflow-hidden"
        >
          {/* Background gradient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-accent/5 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent pointer-events-none" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative max-w-[720px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display text-fg-primary tracking-[-0.03em] text-balance"
            >
              Built for the future.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#a78bfa]">
                Available today.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-regular text-fg-tertiary max-w-[520px] mx-auto leading-relaxed"
            >
              Strategic design and engineering for teams that refuse to compromise.
              Let&apos;s build something that matters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap justify-center gap-4 mt-10"
            >
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
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full border border-line-primary px-6 py-3 text-regular font-medium text-fg-secondary hover:text-fg-primary hover:bg-bg-level-2 transition-all duration-200"
                >
                  Contact Sales
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
