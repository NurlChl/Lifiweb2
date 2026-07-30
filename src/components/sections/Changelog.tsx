'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { UPDATES } from '@/lib/constants'
import { formatDate } from '@/lib/utils'
import { revealVariants, staggerContainer, staggerItem } from '@/lib/animations'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'

export function Changelog() {
  return (
    <section className="section" aria-labelledby="changelog-heading">
      <div className="container-main">
        <motion.div
          className="mx-auto max-w-3xl text-center mb-20"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 id="changelog-heading" className="text-display font-medium text-fg-primary mb-6">
            Updates
          </h2>
          <p className="text-large text-fg-secondary max-w-2xl mx-auto leading-relaxed">
            Continuous improvements, new features, and bug fixes. We ship weekly.
          </p>
        </motion.div>

        <motion.div
          className="grid-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {UPDATES.map((update) => (
            <motion.article
              key={update.slug}
              variants={staggerItem}
              className="group"
            >
              <Card variant="default" padding="lg" className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="accent" size="sm">{update.category}</Badge>
                  <time className="text-mini text-fg-quaternary" dateTime={update.date}>
                    {formatDate(update.date)}
                  </time>
                </div>
                <h3 className="text-title font-medium text-fg-primary mb-2 group-hover:text-accent transition-colors">
                  {update.title}
                </h3>
                <p className="text-regular text-fg-tertiary mb-6">
                  {update.description}
                </p>
                <Link
                  href={`/updates/${update.slug}`}
                  className="inline-flex items-center gap-1.5 text-small font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  Read more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </Card>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href="/updates" className="inline-flex items-center gap-2 bg-transparent text-fg-secondary border border-line-primary hover:bg-bg-level-1 hover:text-fg-primary px-6 py-3 text-small font-medium rounded-full transition-all duration-150">
            View all updates
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}