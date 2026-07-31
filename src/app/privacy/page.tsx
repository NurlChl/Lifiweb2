'use client'

import { motion } from 'motion/react'
import { PageContainer } from '@/components/layout/PageContainer'
import { Section } from '@/components/layout/Section'
import { revealVariants } from '@/lib/animations'

export default function PrivacyPage() {
  return (
    <PageContainer>
      <Section size="xl" background="level-1">
        <div className="container-main max-w-3xl">
          <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
            <h1 className="text-display font-medium text-fg-primary mb-4">Privacy Policy</h1>
            <p className="text-small text-fg-quaternary mb-12">Last updated: January 1, 2025</p>

            <div className="prose-invert">
              <h2>1. Information We Collect</h2>
              <p>We collect information you provide when using our services: name, email, project details, and usage data.</p>

              <h2>2. How We Use Information</h2>
              <p>To deliver services, communicate updates, improve our products, and ensure platform security.</p>

              <h2>3. Data Sharing</h2>
              <p>We never sell your data. We may share with trusted processors (hosting, analytics) under strict agreements.</p>

              <h2>4. Your Rights</h2>
              <p>Access, correct, delete, or export your data anytime. Email privacy@lifistudio.id.</p>

              <h2>5. Cookies</h2>
              <p>Essential cookies only. No tracking cookies or third-party ad scripts.</p>

              <h2>6. Security</h2>
              <p>AES-256 encryption at rest, TLS 1.3 in transit. SOC 2 Type II certified infrastructure.</p>
            </div>
          </motion.div>
        </div>
      </Section>
    </PageContainer>
  )
}