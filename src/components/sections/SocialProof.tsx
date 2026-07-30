'use client'

import { motion, type Transition } from 'motion/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { CLIENTS } from '@/lib/constants'
import { revealVariants, staggerContainer, staggerItem, ease } from '@/lib/animations'

export function SocialProof() {
  return (
    <section 
      className="border-y border-line-tertiary py-16"
      aria-label="Trusted by"
    >
      <div className="container-main">
        <motion.p
          className="text-mini text-fg-quaternary text-center mb-10 uppercase tracking-[0.12em]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: ease as Transition['ease'] }}
        >
          Trusted by teams at
        </motion.p>
        
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {CLIENTS.map((client, i) => (
            <motion.span
              key={client.name}
              variants={staggerItem}
              className="opacity-40 hover:opacity-100 transition-opacity duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-small text-fg-tertiary font-medium">{client.name}</span>
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}