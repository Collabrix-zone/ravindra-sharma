'use client'
import { motion } from 'framer-motion'

export function AboutHero() {
  return (
    <section
      className="relative pt-32 pb-16 sm:pb-20 bg-[#080C18] overflow-hidden"
      aria-labelledby="about-hero-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#C41E3A]/5 via-transparent to-[#D4AF37]/5" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#C41E3A]/10 border border-[#C41E3A]/30 rounded-full px-4 py-2 text-sm text-[#F87171] mb-6 font-inter font-medium"
          role="text"
        >
          About the Doctor
        </motion.div>
        <motion.h1
          id="about-hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]"
        >
          Dr. Ravindra Kumar Sharma
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-inter text-base sm:text-lg md:text-xl text-[#CBD5E0] max-w-3xl mx-auto leading-relaxed"
        >
          Director, Cardiothoracic and Vascular Surgery (CTVS) at Eternal Hospital, Jaipur —
          one of India&apos;s most experienced cardiac surgeons with over four decades of excellence.
        </motion.p>
      </div>
    </section>
  )
}
