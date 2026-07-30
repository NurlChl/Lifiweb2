'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react'
import { Button } from '@/components/ui/Button'

export function CTASection() {
  return (
    <section className="section-padding border-t border-line-tertiary">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl border border-line-tertiary bg-bg-level-1 p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />

          <h2 className="text-display text-fg-primary tracking-[-0.03em]">
            Ready to build something great?
          </h2>
          <p className="mt-4 text-regular text-fg-tertiary max-w-[400px] mx-auto">
            Let's discuss your project and create something extraordinary together.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href="/contact">
              <Button size="lg" className="group">
                Start a Project
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">Learn More</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
