import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section'
import { PageContainer } from '@/components/layout/PageContainer'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Mailbox, Phone, MapPin, ChatText, CheckCircle, WarningCircle, Spinner } from '@phosphor-icons/react/ssr'
import { ArrowRight } from '@phosphor-icons/react/ssr'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Lifi Studio',
  description: 'Start a project with Lifi Studio. We respond within 24 hours.',
  openGraph: {
    title: 'Contact — Lifi Studio',
    description: 'Start a project with Lifi Studio. We respond within 24 hours.',
  },
}

const contactInfo = [
  {
    icon: Mailbox,
    label: 'Email',
    value: 'hello@lifistudio.id',
    href: 'mailto:hello@lifistudio.id',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+62 823-3890-5637',
    href: 'https://wa.me/6282338905637',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mojokerto, East Java, Indonesia (WIB/UTC+7)',
    href: null,
  },
  {
    icon: ChatText,
    label: 'Response time',
    value: 'Within 24 hours on business days',
    href: null,
  },
]

const faqs = [
  {
    q: 'What&apos;s your typical project timeline?',
    a: 'Most projects ship in 6-12 weeks. Discovery takes 2 weeks, design 3-4 weeks, build 4-6 weeks. We give you a detailed timeline after the strategy workshop.',
  },
  {
    q: 'Do you work with existing teams?',
    a: 'Yes. We embed with your team, set up shared tooling, and transfer knowledge throughout. Our goal is to make your team faster, not dependent.',
  },
  {
    q: 'What&apos;s included in your pricing?',
    a: 'Strategy workshop, design system, development, testing, deployment, 30-day support, and documentation. No hidden fees. We quote fixed-price per phase.',
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Yes. After launch, we offer monthly retainers for feature work, maintenance, and team enablement. You only pay for what you need.',
  },
]

export default function ContactPage() {
  return (
    <PageContainer>
      <Section size="xl" background="level-1">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <Badge variant="accent" className="mb-6 inline-block" size="md">
            Get in touch
          </Badge>
          <h1 className="text-display font-medium text-fg-primary mb-6">
            Let&apos;s build something remarkable.
          </h1>
          <p className="text-large text-fg-secondary max-w-2xl mx-auto leading-relaxed">
            Tell us about your project. We&apos;ll respond within 24 hours with next steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((item, i) => (
              <Card key={item.label} variant="default" padding="lg" className="h-full">
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-accent-subtle text-accent">
                  <item.icon size={20} weight="light" />
                </div>
                <h3 className="text-title font-medium text-fg-primary mb-2">{item.label}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-regular text-fg-secondary hover:text-accent transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-regular text-fg-tertiary">{item.value}</p>
                )}
              </Card>
            ))}
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section size="lg" background="none">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-display font-medium text-fg-primary mb-6">
              Common questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none p-6 bg-bg-level-1 border border-line-tertiary rounded-xl hover:border-line-primary transition-colors">
                  <span className="text-regular font-medium text-fg-primary pr-8">{faq.q}</span>
                  <WarningCircle size={20} weight="light" className="text-accent flex-shrink-0" />
                </summary>
                <div className="p-6 pt-0 text-regular text-fg-tertiary leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section size="lg" background="level-1">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-display font-medium text-fg-primary mb-6">
              Ready to start?
            </h2>
            <p className="text-large text-fg-secondary mb-10 leading-relaxed">
              Book a free strategy call. No pitch, just clarity on what&apos;s possible.
            </p>
            <a
              href="https://calendly.com/lifistudio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-regular font-medium text-white hover:bg-accent-hover transition-all duration-200 active:scale-[0.98] shadow-lg shadow-accent/25"
            >
              Book a call
              <ArrowRight size={18} weight="fill" />
            </a>
          </div>
        </div>
      </Section>
    </PageContainer>
  )
}