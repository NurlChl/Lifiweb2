'use client'

import { motion } from 'motion/react'
import { PageContainer } from '@/components/layout/PageContainer'
import { Section } from '@/components/layout/Section'
import { revealVariants } from '@/lib/animations'

export default function TermsPage() {
  return (
    <PageContainer>
      <Section size="xl" background="level-1">
        <div className="container-main max-w-3xl">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
            <h1 className="text-display font-medium text-fg-primary mb-4">Terms of Service</h1>
            <p className="text-small text-fg-quaternary mb-12">Last updated: January 1, 2025</p>

            <div className="prose-invert">
              <h2>1. Services</h2>
              <p>We provide product engineering, design, and AI integration services. Scope is defined per engagement.</p>

              <h2>2. Intellectual Property</h2>
              <p>Upon full payment, you own all deliverables. We retain the right to display work in our portfolio.</p>

              <h2>3. Payments</h2>
              <p>Invoiced monthly or per milestone. Net-30 terms. Late payments incur 1.5% monthly interest.</p>

              <h2>4. Confidentiality</h2>
              <p>Both parties protect confidential information for 3 years after project completion.</p>

              <h2>5. Limitation of Liability</h2>
              <p>Liability capped at total fees paid. Not liable for indirect or consequential damages.</p>

              <h2>6. Termination</h2>
              <p>Either party may terminate with 30 days notice. You own all work delivered up to termination date.</p>
            </div>
          </motion.div>
        </div>
      </Section>
    </PageContainer>
  )
}