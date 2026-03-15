'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Calendar, ChevronDown, Shield } from 'lucide-react'

const ECGHeartbeat = dynamic(() => import('@/components/3d/ECGHeartbeat'), {
  ssr: false,
  loading: () => <div className="w-full h-full" aria-hidden="true" />,
})

const BADGES = [
  "7,000+ Open Heart Surgeries",
  "44+ Years Experience",
  "Director CTVS, Eternal Hospital",
]

export default function Hero() {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917231044444"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18]"
        style={{ background: "#25D366", boxShadow: "0 8px 24px rgba(37,211,102,0.35)" }}
        aria-label="Chat with Dr. Sharma on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true" focusable="false">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <section
        className="relative min-h-screen flex flex-col overflow-hidden"
        style={{ background: "#080C18" }}
        aria-labelledby="hero-heading"
      >
        {/* 3D Background */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <ECGHeartbeat className="w-full h-full opacity-40" />
        </div>

        {/* Multi-layer gradient */}
        <div className="absolute inset-0 z-[1]" aria-hidden="true" style={{ background: "linear-gradient(180deg, rgba(8,12,24,0.75) 0%, rgba(8,12,24,0.25) 40%, rgba(8,12,24,0.85) 80%, #080C18 100%)" }} />
        <div className="absolute inset-0 z-[1]" aria-hidden="true" style={{ background: "linear-gradient(90deg, rgba(8,12,24,0.7) 0%, transparent 40%, transparent 60%, rgba(8,12,24,0.7) 100%)" }} />

        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#C41E3A]/8 blur-[120px] z-[1] pointer-events-none" aria-hidden="true" />

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-40">
          <div className="max-w-4xl mx-auto text-center w-full">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-inter font-medium mb-8"
              style={{
                background: "rgba(196,30,58,0.12)",
                border: "1px solid rgba(196,30,58,0.35)",
                color: "#FDA4AF",
              }}
              role="text"
            >
              <Shield className="w-3.5 h-3.5 text-[#C41E3A]" aria-hidden="true" />
              Director, CTVS — Eternal Hospital, Jaipur
            </motion.div>

            {/* Main heading */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-playfair font-bold text-white leading-[1.1] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}
            >
              Dr. Ravindra
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #C41E3A 0%, #E05A6A 40%, #D4AF37 100%)" }}
              >
                Kumar Sharma
              </span>
            </motion.h1>

            {/* Sub heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-inter text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
              style={{ color: "#94A3B8" }}
            >
              Rajasthan&apos;s most trusted cardiac surgeon.
              <span className="block mt-1 text-[#64748B] text-sm sm:text-base">
                44+ years of excellence · 7,000+ lives saved
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
            >
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 font-inter font-semibold text-white px-8 py-4 rounded-full transition-all duration-300 min-h-[52px] w-full sm:w-auto text-base hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18]"
                style={{
                  background: "linear-gradient(135deg, #C41E3A 0%, #a01830 100%)",
                  boxShadow: "0 8px 32px rgba(196,30,58,0.35)",
                }}
              >
                <Calendar className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                Book Appointment
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 font-inter font-semibold text-white border border-white/25 hover:border-white/50 hover:bg-white/5 px-8 py-4 rounded-full transition-all duration-200 min-h-[52px] w-full sm:w-auto text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18]"
              >
                About Dr. Sharma
              </Link>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex items-center justify-center gap-2"
            >
              <a
                href="tel:+917231044444"
                className="inline-flex items-center gap-2 font-inter text-sm text-[#64748B] hover:text-[#94A3B8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] rounded-sm px-2 py-1 min-h-[44px]"
                aria-label="Call +91 72310 44444"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                +91-7231044444
              </a>
              <span className="text-white/15 text-xs">·</span>
              <span className="font-inter text-xs text-[#4A5568]">Mon–Sat, 10AM–4PM</span>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="relative z-10"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(8,12,24,0.85)",
            backdropFilter: "blur(16px)",
          }}
          role="region"
          aria-label="Key statistics"
        >
          <dl className="max-w-5xl mx-auto px-4 sm:px-6 py-5 sm:py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x-0 md:divide-x divide-white/5">
            {[
              { value: "7,000+", label: "Open Heart Surgeries" },
              { value: "44+", label: "Years Experience" },
              { value: "5,000+", label: "CABG Surgeries" },
              { value: "2,000+", label: "Valve Surgeries" },
            ].map((s, i) => (
              <div key={i} className="px-2">
                <dd className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C41E3A] to-[#D4AF37]">
                  {s.value}
                </dd>
                <dt className="font-inter text-xs text-[#4A5568] mt-1">{s.label}</dt>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-28 sm:bottom-32 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 pointer-events-none"
          aria-hidden="true"
        >
          <span className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/20">Scroll</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
            <ChevronDown className="w-4 h-4 text-white/20" />
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
