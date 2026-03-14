'use client'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const memberships = [
  'Life Member — Association of Thoracic and Cardiovascular Surgeons of India',
  'Life Member — Cardiological Society of India (Nagpur Chapter)',
  'Life Member — Private Medical Practitioner Society, Jaipur',
]

export function Memberships() {
  return (
    <section className="py-20 bg-[#0d1120]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-playfair text-4xl font-bold text-white mb-12">
          Professional <span className="text-[#D4AF37]">Memberships</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {memberships.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-[#D4AF37]/20 rounded-2xl p-6 flex flex-col items-center gap-4"
            >
              <Award className="w-8 h-8 text-[#D4AF37]" />
              <p className="font-inter text-sm text-[#A0AEC0] text-center leading-relaxed">{m}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
