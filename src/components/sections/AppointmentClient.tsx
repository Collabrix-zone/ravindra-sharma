'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'

const opd = [
  { day: 'Monday', time: '10:00 AM – 4:00 PM', available: true },
  { day: 'Tuesday', time: '10:00 AM – 4:00 PM', available: true },
  { day: 'Wednesday', time: '10:00 AM – 4:00 PM', available: true },
  { day: 'Thursday', time: '10:00 AM – 4:00 PM', available: true },
  { day: 'Friday', time: '10:00 AM – 4:00 PM', available: true },
  { day: 'Saturday', time: '10:00 AM – 4:00 PM', available: true },
  { day: 'Sunday', time: 'Closed', available: false },
]

export function AppointmentClient() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', issue: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 sm:pb-20 bg-[#080C18]"
        aria-labelledby="appointment-hero-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#C41E3A]/5 via-transparent to-[#D4AF37]/5" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#C41E3A]/10 border border-[#C41E3A]/30 rounded-full px-4 py-2 text-sm text-[#F87171] mb-6 font-inter font-medium"
            role="text"
          >
            Consultations
          </motion.div>
          <motion.h1
            id="appointment-hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]"
          >
            Book an <span className="text-[#C41E3A]">Appointment</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-inter text-base sm:text-lg md:text-xl text-[#CBD5E0] max-w-2xl mx-auto leading-relaxed"
          >
            Consult directly with Dr. R.K. Sharma at Eternal Hospital, Jaipur. Walk-in available during OPD hours or submit a request below.
          </motion.p>
        </div>
      </section>

      <section
        className="py-16 sm:py-20 lg:py-24 bg-[#0D1120]"
        aria-labelledby="appointment-form-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact cards */}
            <div className="space-y-4">
              <a
                href="tel:+917231044444"
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#C41E3A]/30 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] min-h-[80px]"
                aria-label="Call +91 72310 44444 for appointment"
              >
                <div className="w-12 h-12 bg-[#C41E3A]/10 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Phone className="w-5 h-5 text-[#C41E3A]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-inter text-xs text-[#CBD5E0] mb-0.5">Call for Appointment</p>
                  <p className="font-inter text-base font-semibold text-white">+91-7231044444</p>
                  <p className="font-inter text-sm text-[#CBD5E0]">0141-3120000</p>
                </div>
              </a>

              <a
                href="https://wa.me/917231044444"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-green-500/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] min-h-[80px]"
                aria-label="WhatsApp Dr. Sharma for a quick response"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <MessageCircle className="w-5 h-5 text-green-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-inter text-xs text-[#CBD5E0] mb-0.5">WhatsApp</p>
                  <p className="font-inter text-base font-semibold text-white">Message on WhatsApp</p>
                  <p className="font-inter text-sm text-[#CBD5E0]">Quick response for queries</p>
                </div>
              </a>

              <address className="not-italic flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-inter text-xs text-[#CBD5E0] mb-0.5">Hospital Address</p>
                  <p className="font-inter text-sm font-semibold text-white">Eternal Hospital</p>
                  <p className="font-inter text-sm text-[#CBD5E0]">
                    Near Airport Circle, Sanganer,<br />Jaipur, Rajasthan 302011
                  </p>
                </div>
              </address>
            </div>

            {/* OPD schedule */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-playfair text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
                OPD Schedule
              </h3>
              <dl className="space-y-2">
                {opd.map((d) => (
                  <div
                    key={d.day}
                    className={`flex items-center justify-between py-2 border-b border-white/5 last:border-0 ${!d.available ? 'opacity-40' : ''}`}
                  >
                    <dt className="font-inter text-sm text-white">{d.day}</dt>
                    <dd className={`font-inter text-sm font-semibold ${d.available ? 'text-[#D4AF37]' : 'text-[#CBD5E0]'}`}>
                      {d.time}
                      {!d.available && <span className="sr-only"> (closed)</span>}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Map link */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#C41E3A]/10 to-[#D4AF37]/10 flex flex-col items-center justify-center gap-3">
                <MapPin className="w-10 h-10 text-[#D4AF37]" aria-hidden="true" />
                <div className="text-center">
                  <p className="font-inter text-sm text-white font-semibold">Eternal Hospital, Jaipur</p>
                  <a
                    href="https://maps.google.com/?q=Eternal+Hospital+Sanganer+Jaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-xs text-[#C41E3A] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] rounded-sm"
                    aria-label="Open Eternal Hospital location in Google Maps"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center" role="alert" aria-live="polite">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                    <CheckCircle className="w-10 h-10 text-green-400" aria-hidden="true" />
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-white mb-3">Request Submitted!</h3>
                  <p className="font-inter text-[#CBD5E0] max-w-sm mx-auto">
                    Our team will contact you within 24 hours to confirm your appointment. For urgent cases, please call{' '}
                    <a
                      href="tel:+917231044444"
                      className="text-[#C41E3A] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] rounded-sm"
                    >
                      +91-7231044444
                    </a>.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                <h2
                  id="appointment-form-heading"
                  className="font-playfair text-2xl font-bold text-white mb-6"
                >
                  Request Appointment
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="appt-name" className="font-inter text-sm font-medium text-[#CBD5E0] mb-2 block">
                      Full Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                    </label>
                    <input
                      id="appt-name"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your full name"
                      autoComplete="name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1120] transition-colors placeholder:text-white/30 min-h-[48px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="appt-phone" className="font-inter text-sm font-medium text-[#CBD5E0] mb-2 block">
                      Phone Number <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                    </label>
                    <input
                      id="appt-phone"
                      required
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      placeholder="+91 XXXXX XXXXX"
                      autoComplete="tel"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1120] transition-colors placeholder:text-white/30 min-h-[48px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="appt-email" className="font-inter text-sm font-medium text-[#CBD5E0] mb-2 block">
                      Email Address
                    </label>
                    <input
                      id="appt-email"
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="your@email.com"
                      autoComplete="email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1120] transition-colors placeholder:text-white/30 min-h-[48px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="appt-issue" className="font-inter text-sm font-medium text-[#CBD5E0] mb-2 block">
                      Describe Your Condition <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                    </label>
                    <textarea
                      id="appt-issue"
                      required
                      rows={5}
                      value={form.issue}
                      onChange={e => setForm(f => ({ ...f, issue: e.target.value }))}
                      placeholder="Please briefly describe your symptoms or condition..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1120] transition-colors resize-none placeholder:text-white/30"
                    />
                  </div>
                  {error && (
                    <p className="font-inter text-sm text-red-400 text-center" role="alert">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-[#C41E3A] to-[#a01830] hover:from-[#D4AF37] hover:to-[#b8952d] text-white font-inter font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1120] min-h-[52px] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    {submitting ? 'Submitting...' : 'Submit Appointment Request'}
                  </button>
                  <p className="font-inter text-xs text-[#CBD5E0] text-center">
                    For urgent matters, please call directly:{' '}
                    <a
                      href="tel:+917231044444"
                      className="text-[#C41E3A] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] rounded-sm"
                    >
                      +91-7231044444
                    </a>
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
