'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Calendar, ChevronDown } from 'lucide-react'

const ECGHeartbeat = dynamic(() => import('@/components/3d/ECGHeartbeat'), {
  ssr: false,
  loading: () => <div className="w-full h-full" aria-hidden="true" />,
})

const stats = [
  { value: '7,000+', label: 'Open Heart Surgeries' },
  { value: '44+', label: 'Years Experience' },
  { value: '5,000+', label: 'CABG Surgeries' },
  { value: '2,000+', label: 'Valve Surgeries' },
]

export default function Hero() {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917231044444"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18]"
        aria-label="Chat with Dr. Sharma on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" aria-hidden="true" focusable="false">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <section
        className="relative min-h-screen flex flex-col overflow-hidden bg-[#080C18]"
        aria-labelledby="hero-heading"
      >
        {/* 3D Background */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <ECGHeartbeat className="w-full h-full opacity-50" />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#080C18]/70 via-[#080C18]/30 to-[#080C18]" aria-hidden="true" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#080C18]/80 via-transparent to-[#080C18]/80" aria-hidden="true" />

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-36">
          <div className="max-w-4xl mx-auto text-center w-full">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#C41E3A]/10 border border-[#C41E3A]/40 rounded-full px-4 py-2 text-sm text-[#F87171] mb-6 font-inter font-medium"
              role="text"
            >
              <span className="w-2 h-2 bg-[#C41E3A] rounded-full animate-pulse" aria-hidden="true" />
              Director, CTVS — Eternal Hospital, Jaipur
            </motion.div>

            {/* Heading */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-playfair text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
            >
              Dr. Ravindra
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C41E3A] to-[#D4AF37]">
                Kumar Sharma
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-inter text-base sm:text-lg md:text-xl text-[#CBD5E0] mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              44+ Years of Excellence in Cardiac Surgery
              <span className="block text-white/70 mt-1 text-sm sm:text-base">7,000+ Open Heart Surgeries Performed</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C41E3A] to-[#a01830] hover:from-[#D4AF37] hover:to-[#b8952d] text-white font-inter font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#C41E3A]/25 hover:shadow-[#D4AF37]/25 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18] min-h-[52px] w-full sm:w-auto text-base"
              >
                <Calendar className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                Book Appointment
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-inter font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18] min-h-[52px] w-full sm:w-auto text-base"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Phone link */}
            <motion.a
              href="tel:+917231044444"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-2 mt-6 text-[#CBD5E0] hover:text-white transition-colors font-inter text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] rounded-sm px-2 py-1 min-h-[44px]"
              aria-label="Call +91 72310 44444"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              +91-7231044444
            </motion.a>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative z-10 border-t border-white/10 bg-[#080C18]/80 backdrop-blur-md"
          role="region"
          aria-label="Key statistics"
        >
          <dl className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <dd className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C41E3A] to-[#D4AF37]">
                  {s.value}
                </dd>
                <dt className="font-inter text-xs sm:text-sm text-[#CBD5E0] mt-1">{s.label}</dt>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-36 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/30 pointer-events-none"
          aria-hidden="true"
        >
          <span className="font-inter text-xs uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
