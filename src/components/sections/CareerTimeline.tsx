'use client'
import { motion } from 'framer-motion'

const timeline = [
  { year: '1981', event: 'MBBS from J.L.N. Medical College, Ajmer', type: 'education' },
  { year: '1985', event: 'MS (General Surgery) from J.L.N. Medical College, Ajmer', type: 'education' },
  { year: '1985–92', event: 'Trained at Escorts Heart Institute under the legendary Dr. N. Trehan, New Delhi', type: 'training' },
  { year: '1992', event: 'MCh (Thoracic Surgery) from CMC Hospital, Vellore under Prof. Stanley John', type: 'education' },
  { year: '1993', event: 'International fellowship at University Hospital Uppsala, Sweden', type: 'international' },
  { year: '2000', event: 'Established independent cardiac surgery practice in Jaipur', type: 'milestone' },
  { year: '2024', event: 'Director, CTVS — Eternal Hospital, Jaipur — 7,000+ surgeries performed', type: 'milestone' },
]

const typeColors: Record<string, string> = {
  education: '#D4AF37',
  training: '#C41E3A',
  international: '#60A5FA',
  milestone: '#34D399',
}

export function CareerTimeline() {
  return (
    <section className="py-24 bg-[#080C18]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
            Career <span className="text-[#C41E3A]">Journey</span>
          </h2>
          <p className="font-inter text-[#A0AEC0] mt-4">Four decades of dedication to cardiac surgery</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C41E3A] via-[#D4AF37] to-[#C41E3A] opacity-30" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} pl-20 md:pl-0`}
              >
                <div className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full border-2 -translate-x-1/2 top-1.5"
                  style={{ borderColor: typeColors[item.type], backgroundColor: '#080C18' }}
                />
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="font-inter text-sm font-bold" style={{ color: typeColors[item.type] }}>{item.year}</span>
                  <p className="font-inter text-[#A0AEC0] text-sm mt-1 leading-relaxed">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
