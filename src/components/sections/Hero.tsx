'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight, Sparkle } from '@phosphor-icons/react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="page-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-line-tertiary bg-bg-level-1 px-4 py-1.5 text-mini text-fg-tertiary mb-8">
              <Sparkle size={14} weight="fill" className="text-accent" />
              Digital Solutions Agency
            </div>

            <h1 className="text-[clamp(2.5rem,5vw,64px)] leading-[1] font-[510] tracking-[-0.044em] text-fg-primary text-balance">
              Build products that{' '}
              <span className="text-fg-tertiary">stand out.</span>
            </h1>

            <p className="mt-6 text-large text-fg-secondary max-w-[480px] leading-relaxed">
              From concept to launch — we design and develop premium digital experiences
              that drive real business growth.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/contact">
                <Button size="lg" className="group">
                  Start a Project
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Mockup / Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl border border-line-tertiary bg-bg-level-1 overflow-hidden">
              <div className="h-full p-4 flex flex-col gap-3">
                {/* Mockup top bar */}
                <div className="flex items-center gap-2 pb-3 border-b border-line-tertiary">
                  <div className="size-2 rounded-full bg-red-500/50" />
                  <div className="size-2 rounded-full bg-yellow-500/50" />
                  <div className="size-2 rounded-full bg-green-500/50" />
                  <div className="ml-4 flex-1 h-6 rounded-md bg-bg-level-2 flex items-center px-3">
                    <span className="text-tiny text-fg-quaternary">lifistudio.id</span>
                  </div>
                </div>
                {/* Mockup content */}
                <div className="flex-1 grid grid-cols-5 gap-3">
                  <div className="col-span-2 space-y-3">
                    <div className="h-4 w-3/4 rounded bg-bg-level-2" />
                    <div className="h-8 w-full rounded-lg bg-accent/10 border border-accent/20 flex items-center px-3">
                      <span className="text-tiny text-accent">Project Alpha</span>
                    </div>
                    <div className="h-8 w-full rounded-lg bg-bg-level-2" />
                    <div className="h-8 w-full rounded-lg bg-bg-level-2" />
                  </div>
                  <div className="col-span-3 space-y-3">
                    <div className="h-4 w-1/2 rounded bg-bg-level-2" />
                    <div className="h-20 rounded-lg bg-bg-level-2 p-3 space-y-2">
                      <div className="h-3 w-3/4 rounded bg-bg-level-3" />
                      <div className="h-3 w-1/2 rounded bg-bg-level-3" />
                    </div>
                    <div className="flex gap-2">
                      <div className="h-6 w-16 rounded-full bg-bg-level-2" />
                      <div className="h-6 w-20 rounded-full bg-bg-level-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow */}
            <div className="absolute -inset-x-8 -inset-y-4 -z-10 bg-accent/5 rounded-[32px] blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
