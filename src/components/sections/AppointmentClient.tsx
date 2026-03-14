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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#080C18]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C41E3A]/5 via-transparent to-[#D4AF37]/5" />
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-[#C41E3A]/10 border border-[#C41E3A]/30 rounded-full px-4 py-1.5 text-sm text-[#C41E3A] mb-6 font-inter">
            Consultations
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            Book an <span className="text-[#C41E3A]">Appointment</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="font-inter text-xl text-[#A0AEC0] max-w-2xl mx-auto">
            Consult directly with Dr. R.K. Sharma at Eternal Hospital, Jaipur. Walk-in available during OPD hours or submit a request below.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-[#0d1120]">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          {/* Left: info panel */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            {/* Contact cards */}
            <div className="space-y-4">
              <a href="tel:+917231044444" className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#C41E3A]/30 transition-all group">
                <div className="w-12 h-12 bg-[#C41E3A]/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#C41E3A]" />
                </div>
                <div>
                  <div className="font-inter text-xs text-[#A0AEC0] mb-0.5">Call for Appointment</div>
                  <div className="font-inter text-base font-semibold text-white">+91-7231044444</div>
                  <div className="font-inter text-sm text-[#A0AEC0]">0141-3120000</div>
                </div>
              </a>

              <a href="https://wa.me/917231044444" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-green-500/30 transition-all">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="font-inter text-xs text-[#A0AEC0] mb-0.5">WhatsApp</div>
                  <div className="font-inter text-base font-semibold text-white">Message on WhatsApp</div>
                  <div className="font-inter text-sm text-[#A0AEC0]">Quick response for queries</div>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="font-inter text-xs text-[#A0AEC0] mb-0.5">Hospital Address</div>
                  <div className="font-inter text-sm font-semibold text-white">Eternal Hospital</div>
                  <div className="font-inter text-sm text-[#A0AEC0]">Near Airport Circle, Sanganer,<br />Jaipur, Rajasthan 302011</div>
                </div>
              </div>
            </div>

            {/* OPD schedule */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-playfair text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#D4AF37]" />
                OPD Schedule
              </h3>
              <div className="space-y-2">
                {opd.map((d, i) => (
                  <div key={i} className={`flex items-center justify-between py-2 border-b border-white/5 last:border-0 ${!d.available ? 'opacity-40' : ''}`}>
                    <span className="font-inter text-sm text-white">{d.day}</span>
                    <span className={`font-inter text-sm font-semibold ${d.available ? 'text-[#D4AF37]' : 'text-[#A0AEC0]'}`}>{d.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#C41E3A]/10 to-[#D4AF37]/10 flex flex-col items-center justify-center gap-3">
                <MapPin className="w-10 h-10 text-[#D4AF37]" />
                <div className="text-center">
                  <div className="font-inter text-sm text-white font-semibold">Eternal Hospital, Jaipur</div>
                  <a href="https://maps.google.com/?q=Eternal+Hospital+Sanganer+Jaipur" target="_blank" rel="noopener noreferrer" className="font-inter text-xs text-[#C41E3A] hover:underline">
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-white mb-3">Request Submitted!</h3>
                  <p className="font-inter text-[#A0AEC0] max-w-sm mx-auto">Our team will contact you within 24 hours to confirm your appointment. For urgent cases, please call <a href="tel:+917231044444" className="text-[#C41E3A]">+91-7231044444</a>.</p>
                </div>
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="font-playfair text-2xl font-bold text-white mb-6">Request Appointment</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-inter text-sm text-[#A0AEC0] mb-2 block">Full Name *</label>
                    <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Your full name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-white text-sm focus:outline-none focus:border-[#C41E3A]/50 transition-colors" />
                  </div>
                  <div>
                    <label className="font-inter text-sm text-[#A0AEC0] mb-2 block">Phone Number *</label>
                    <input required type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="+91 XXXXX XXXXX" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-white text-sm focus:outline-none focus:border-[#C41E3A]/50 transition-colors" />
                  </div>
                  <div>
                    <label className="font-inter text-sm text-[#A0AEC0] mb-2 block">Email Address</label>
                    <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="your@email.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-white text-sm focus:outline-none focus:border-[#C41E3A]/50 transition-colors" />
                  </div>
                  <div>
                    <label className="font-inter text-sm text-[#A0AEC0] mb-2 block">Describe Your Condition *</label>
                    <textarea required rows={5} value={form.issue} onChange={e => setForm(f => ({ ...f, issue: e.target.value }))} placeholder="Please briefly describe your symptoms or condition..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-white text-sm focus:outline-none focus:border-[#C41E3A]/50 transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-[#C41E3A] to-[#a01830] hover:from-[#D4AF37] hover:to-[#b8952d] text-white font-inter font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02]">
                    <Send className="w-4 h-4" />
                    Submit Appointment Request
                  </button>
                  <p className="font-inter text-xs text-[#A0AEC0] text-center">For urgent matters, please call directly: <a href="tel:+917231044444" className="text-[#C41E3A]">+91-7231044444</a></p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
