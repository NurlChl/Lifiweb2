'use client'

import { motion } from 'motion/react'
import { PageContainer } from '@/components/layout/PageContainer'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Download, Palette, Image, TextT, FileCode, Sparkle } from '@phosphor-icons/react/ssr'
import { revealVariants, staggerContainer, staggerItem } from '@/lib/animations'

const assets = [
  { icon: Palette, title: 'Brand Logo', desc: 'Primary, mono, and icon variants in PNG and SVG', type: 'ZIP' },
  { icon: TextT, title: 'Typography', desc: 'Typeface files and CSS import snippets', type: 'ZIP' },
  { icon: Image, title: 'Social Cards', desc: 'OG image templates for Twitter and LinkedIn', type: 'FIG' },
  { icon: FileCode, title: 'Design Tokens', desc: 'JSON, CSS vars, and Tailwind config', type: 'ZIP' },
]

export default function BrandPage() {
  return (
    <PageContainer>
      <Section size="xl" background="level-1">
        <div className="container-main">
          <motion.div className="mx-auto max-w-3xl text-center mb-20" variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
            <Badge variant="accent" className="mb-6 inline-block" size="md">Press Kit</Badge>
            <h1 className="text-display font-medium text-fg-primary mb-6">Brand kit.</h1>
            <p className="text-large text-fg-secondary max-w-2xl mx-auto leading-relaxed">Everything you need to reference Lifi Studio in your materials.</p>
          </motion.div>

          <motion.div className="grid-auto max-w-3xl mx-auto" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
            {assets.map((a) => (
              <motion.article key={a.title} variants={staggerItem}>
                <Card variant="default" padding="xl" className="h-full flex flex-col">
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-accent-subtle text-accent mb-4"><a.icon size={24} weight="light" /></div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-title font-medium text-fg-primary">{a.title}</h3>
                    <Badge variant="default" size="sm">{a.type}</Badge>
                  </div>
                  <p className="text-regular text-fg-tertiary mb-6 flex-1">{a.desc}</p>
                  <button className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors font-medium text-small">
                    <Download size={14} weight="light" /> Download
                  </button>
                </Card>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Section>
    </PageContainer>
  )
}