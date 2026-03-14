'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Calendar, ChevronDown } from 'lucide-react'

const ECGHeartbeat = dynamic(() => import('@/components/3d/ECGHeartbeat'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-navy-dark" />
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
      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/917231044444"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#080C18]">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <ECGHeartbeat className="w-full h-full opacity-60" />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#080C18]/80 via-transparent to-[#080C18]" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#080C18]/60 via-transparent to-[#080C18]/60" />

        {/* Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center px-4 pt-24 pb-32">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#C41E3A]/10 border border-[#C41E3A]/30 rounded-full px-4 py-1.5 text-sm text-[#C41E3A] mb-6 font-inter"
            >
              <span className="w-2 h-2 bg-[#C41E3A] rounded-full animate-pulse" />
              Director, CTVS — Eternal Hospital, Jaipur
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            >
              Dr. Ravindra
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C41E3A] to-[#D4AF37]">
                Kumar Sharma
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-inter text-lg md:text-xl text-[#A0AEC0] mb-10 max-w-2xl mx-auto"
            >
              44+ Years of Excellence in Cardiac Surgery<br />
              <span className="text-white/70">7,000+ Open Heart Surgeries Performed</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/appointment"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#C41E3A] to-[#a01830] hover:from-[#D4AF37] hover:to-[#b8952d] text-white font-inter font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#C41E3A]/30 hover:shadow-[#D4AF37]/30 hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white font-inter font-semibold px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
              >
                Learn More
              </Link>
            </motion.div>

            <motion.a
              href="tel:+917231044444"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="inline-flex items-center gap-2 mt-6 text-[#A0AEC0] hover:text-white transition-colors font-inter text-sm"
            >
              <Phone className="w-4 h-4" />
              +91-7231044444
            </motion.a>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-md"
        >
          <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="font-playfair text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C41E3A] to-[#D4AF37]">
                  {s.value}
                </div>
                <div className="font-inter text-sm text-[#A0AEC0] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40"
        >
          <span className="font-inter text-xs uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
