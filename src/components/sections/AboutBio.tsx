'use client'
import { motion } from 'framer-motion'
import { CheckCircle2, GraduationCap, Globe } from 'lucide-react'

const qualifications = [
  { year: '1981', degree: 'MBBS', institution: 'J.L.N. Medical College, Ajmer' },
  { year: '1985', degree: 'MS (General Surgery)', institution: 'J.L.N. Medical College, Ajmer' },
  { year: '1992', degree: 'MCh (Thoracic Surgery)', institution: 'C.M.C. Hospital, Vellore' },
]

const highlights = [
  '44+ years of total medical experience',
  '25 years as an independent cardiac surgeon',
  'Trained under Dr. N. Trehan at Escorts Heart Institute, New Delhi',
  'Trained under Prof. Stanley John at CMC Vellore',
  'International exposure at University Hospital Uppsala, Sweden',
  '~7,000 open heart surgeries performed',
  'Expert in minimally invasive cardiac procedures',
]

export function AboutBio() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-[#0D1120]"
      aria-labelledby="bio-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: Bio text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="bio-heading"
            className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight"
          >
            A Legacy of <span className="text-[#C41E3A]">Healing Hearts</span>
          </h2>
          <p className="font-inter text-base text-[#CBD5E0] leading-relaxed mb-6">
            Dr. Ravindra Kumar Sharma is the Director of Cardiothoracic and Vascular Surgery (CTVS) at Eternal Hospital, Jaipur. With over 44 years of medical experience and 25 years as an independent cardiac surgeon, he has transformed the landscape of cardiac care in Rajasthan.
          </p>
          <p className="font-inter text-base text-[#CBD5E0] leading-relaxed mb-8">
            Having performed approximately 7,000 open heart surgeries — including ~5,000 Coronary Artery Bypass Surgeries (75% on beating heart) and ~2,000 valve/congenital heart surgeries — Dr. Sharma brings unparalleled expertise to every patient.
          </p>

          <ul className="space-y-3" role="list" aria-label="Professional highlights">
            {highlights.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#C41E3A] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="font-inter text-sm text-[#CBD5E0] leading-relaxed">{h}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Profile card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C41E3A] to-[#D4AF37] flex items-center justify-center text-white font-playfair text-2xl font-bold flex-shrink-0"
                aria-hidden="true"
              >
                RS
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold text-white">Dr. R.K. Sharma</h3>
                <p className="font-inter text-sm text-[#CBD5E0]">Director, CTVS</p>
                <p className="font-inter text-sm text-[#C41E3A]">Eternal Hospital, Jaipur</p>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <dd className="font-playfair text-3xl font-bold text-[#C41E3A]" aria-label="44 plus years experience">44+</dd>
                <dt className="font-inter text-xs text-[#CBD5E0] mt-1">Years Experience</dt>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <dd className="font-playfair text-3xl font-bold text-[#D4AF37]" aria-label="7000 plus surgeries">7,000+</dd>
                <dt className="font-inter text-xs text-[#CBD5E0] mt-1">Surgeries</dt>
              </div>
            </dl>
          </div>

          {/* Qualifications */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="font-playfair text-lg font-bold text-white mb-5 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
              Academic Qualifications
            </h3>
            <dl className="space-y-4">
              {qualifications.map((q) => (
                <div key={q.year} className="flex gap-4 items-start">
                  <dt>
                    <span className="font-inter text-xs text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-1 rounded font-semibold whitespace-nowrap">{q.year}</span>
                  </dt>
                  <dd>
                    <p className="font-inter text-sm font-semibold text-white">{q.degree}</p>
                    <p className="font-inter text-xs text-[#CBD5E0]">{q.institution}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* International */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex items-center gap-4">
            <Globe className="w-8 h-8 text-[#D4AF37] flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="font-inter text-sm font-semibold text-white">International Exposure</p>
              <p className="font-inter text-xs text-[#CBD5E0]">University Hospital Uppsala, Sweden</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
