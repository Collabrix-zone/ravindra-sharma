'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Send } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-7231044444\n0141-3120000',
    href: 'tel:+917231044444',
    color: '#C41E3A',
    ariaLabel: 'Call +91 72310 44444',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Eternal Hospital, Near Airport Circle,\nSanganer, Jaipur, Rajasthan 302011',
    href: 'https://maps.google.com/?q=Eternal+Hospital+Sanganer+Jaipur',
    color: '#D4AF37',
    ariaLabel: 'Get directions to Eternal Hospital, Jaipur',
  },
  {
    icon: Clock,
    label: 'OPD Hours',
    value: 'Monday – Saturday\n10:00 AM – 4:00 PM',
    href: undefined,
    color: '#34D399',
    ariaLabel: undefined,
  },
]

export function ContactClient() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 sm:pb-20 bg-[#080C18]"
        aria-labelledby="contact-hero-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#C41E3A]/5 via-transparent to-[#D4AF37]/5" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#C41E3A]/10 border border-[#C41E3A]/30 rounded-full px-4 py-2 text-sm text-[#F87171] mb-6 font-inter font-medium"
            role="text"
          >
            Get in Touch
          </motion.div>
          <motion.h1
            id="contact-hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]"
          >
            Contact <span className="text-[#C41E3A]">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-inter text-base sm:text-lg text-[#CBD5E0] max-w-2xl mx-auto leading-relaxed"
          >
            Reach out to Dr. Sharma&apos;s team at Eternal Hospital, Jaipur for appointments, queries, or emergency consultations.
          </motion.p>
        </div>
      </section>

      <section
        className="py-16 sm:py-20 lg:py-24 bg-[#0D1120]"
        aria-labelledby="contact-info-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="contact-info-heading" className="sr-only">Contact information and message form</h2>

          {/* Contact cards */}
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16" role="list">
            {contactInfo.map((c, i) => {
              const Icon = c.icon
              const cardContent = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all h-full"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${c.color}15` }}
                    aria-hidden="true"
                  >
                    <Icon className="w-6 h-6" style={{ color: c.color }} aria-hidden="true" />
                  </div>
                  <p className="font-inter text-xs text-[#CBD5E0] mb-2">{c.label}</p>
                  <p className="font-inter text-sm text-white font-semibold whitespace-pre-line">{c.value}</p>
                </motion.div>
              )

              return (
                <li key={c.label}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={c.ariaLabel}
                      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] rounded-2xl"
                    >
                      {cardContent}
                    </a>
                  ) : (
                    cardContent
                  )}
                </li>
              )
            })}
          </ul>

          {/* Contact form */}
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div
                className="text-center py-16"
                role="alert"
                aria-live="polite"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <Send className="w-8 h-8 text-green-400" aria-hidden="true" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="font-inter text-[#CBD5E0]">We will get back to you shortly.</p>
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                <h3 className="font-playfair text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form
                  onSubmit={e => { e.preventDefault(); setSubmitted(true) }}
                  className="space-y-5"
                  noValidate
                >
                  <div>
                    <label htmlFor="contact-name" className="font-inter text-sm font-medium text-[#CBD5E0] mb-2 block">
                      Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                    </label>
                    <input
                      id="contact-name"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1120] transition-colors placeholder:text-white/30 min-h-[48px]"
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="font-inter text-sm font-medium text-[#CBD5E0] mb-2 block">
                      Email <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                    </label>
                    <input
                      id="contact-email"
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1120] transition-colors placeholder:text-white/30 min-h-[48px]"
                      placeholder="your@email.com"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="font-inter text-sm font-medium text-[#CBD5E0] mb-2 block">
                      Message <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1120] transition-colors resize-none placeholder:text-white/30"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#C41E3A] to-[#a01830] hover:from-[#D4AF37] hover:to-[#b8952d] text-white font-inter font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1120] min-h-[52px]"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
