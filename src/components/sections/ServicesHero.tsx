'use client'
import { motion } from 'framer-motion'

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 bg-[#080C18] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#C41E3A]/5 via-transparent to-[#D4AF37]/5" />
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-[#C41E3A]/10 border border-[#C41E3A]/30 rounded-full px-4 py-1.5 text-sm text-[#C41E3A] mb-6 font-inter">
          Specializations
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
          Cardiac Surgery <span className="text-[#C41E3A]">Services</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="font-inter text-xl text-[#A0AEC0] max-w-3xl mx-auto">
          World-class cardiac care across all major heart and vascular conditions — delivered with precision, compassion, and 44+ years of expertise.
        </motion.p>
      </div>
    </section>
  )
}
