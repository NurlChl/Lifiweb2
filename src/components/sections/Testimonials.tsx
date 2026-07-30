'use client'

import { motion } from 'motion/react'
import { Avatar } from '@/components/ui/Avatar'
import { Card } from '@/components/ui/Card'
import { TESTIMONIALS, revealVariants, staggerContainer, staggerItem } from '@/lib/constants'
import { Quotes } from '@phosphor-icons/react/ssr'

export function Testimonials() {
  return (
    <section className="section" aria-labelledby="testimonials-heading">
      <div className="container-main">
        <motion.div
          className="mx-auto max-w-3xl text-center mb-20"
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 id="testimonials-heading" className="text-display font-medium text-fg-primary mb-6">
            Trusted by teams that ship
          </h2>
          <p className="text-large text-fg-secondary max-w-2xl mx-auto leading-relaxed">
            Don&apos;t take our word for it. Here&apos;s what our clients say about working with us.
          </p>
        </motion.div>

        <motion.div
          className="grid-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.article
              key={testimonial.author}
              variants={staggerItem}
            >
              <Card variant="default" padding="xl" className="h-full relative">
                <Quotes size={32} weight="light" className="text-accent/20 mb-6" />
                <blockquote className="text-large text-fg-primary mb-8 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fallback={testimonial.author.split(' ').map(n => n[0]).join('')}
                    size="lg"
                  />
                  <div>
                    <div className="text-regular font-medium text-fg-primary">{testimonial.author}</div>
                    <div className="text-small text-fg-tertiary">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}