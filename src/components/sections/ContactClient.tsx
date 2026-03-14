'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, Send, Clock } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91-7231044444\n0141-3120000', href: 'tel:+917231044444', color: '#C41E3A' },
  { icon: MapPin, label: 'Address', value: 'Eternal Hospital, Near Airport Circle,\nSanganer, Jaipur, Rajasthan 302011', href: 'https://maps.google.com/?q=Eternal+Hospital+Sanganer+Jaipur', color: '#D4AF37' },
  { icon: Clock, label: 'OPD Hours', value: 'Monday – Saturday\n10:00 AM – 4:00 PM', color: '#34D399' },
]

export function ContactClient() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#080C18]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C41E3A]/5 via-transparent to-[#D4AF37]/5" />
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-[#C41E3A]/10 border border-[#C41E3A]/30 rounded-full px-4 py-1.5 text-sm text-[#C41E3A] mb-6 font-inter">
            Get in Touch
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            Contact <span className="text-[#C41E3A]">Us</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-24 bg-[#0d1120]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((c, i) => {
              const Icon = c.icon
              const content = (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${c.color}15` }}>
                    <Icon className="w-6 h-6" style={{ color: c.color }} />
                  </div>
                  <div className="font-inter text-xs text-[#A0AEC0] mb-2">{c.label}</div>
                  <div className="font-inter text-sm text-white font-semibold whitespace-pre-line">{c.value}</div>
                </motion.div>
              )
              return c.href ? <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{content}</a> : content
            })}
          </div>

          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="font-inter text-[#A0AEC0]">We will get back to you shortly.</p>
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="font-playfair text-2xl font-bold text-white mb-6">Send a Message</h2>
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} className="space-y-5">
                  <div>
                    <label className="font-inter text-sm text-[#A0AEC0] mb-2 block">Name *</label>
                    <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-white text-sm focus:outline-none focus:border-[#C41E3A]/50 transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="font-inter text-sm text-[#A0AEC0] mb-2 block">Email *</label>
                    <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-white text-sm focus:outline-none focus:border-[#C41E3A]/50 transition-colors" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="font-inter text-sm text-[#A0AEC0] mb-2 block">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-white text-sm focus:outline-none focus:border-[#C41E3A]/50 transition-colors resize-none" placeholder="How can we help?" />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-[#C41E3A] to-[#a01830] text-white font-inter font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.02]">
                    <Send className="w-4 h-4" /> Send Message
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
