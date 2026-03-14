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
    <section className="py-24 bg-[#0d1120]">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl font-bold text-white mb-6">
            A Legacy of <span className="text-[#C41E3A]">Healing Hearts</span>
          </h2>
          <p className="font-inter text-[#A0AEC0] leading-relaxed mb-6">
            Dr. Ravindra Kumar Sharma is the Director of Cardiothoracic and Vascular Surgery (CTVS) at Eternal Hospital, Jaipur. With over 44 years of medical experience and 25 years as an independent cardiac surgeon, he has transformed the landscape of cardiac care in Rajasthan.
          </p>
          <p className="font-inter text-[#A0AEC0] leading-relaxed mb-8">
            Having performed approximately 7,000 open heart surgeries — including ~5,000 Coronary Artery Bypass Surgeries (75% on beating heart) and ~2,000 valve/congenital heart surgeries — Dr. Sharma brings unparalleled expertise to every patient.
          </p>

          <div className="space-y-3">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#C41E3A] flex-shrink-0 mt-0.5" />
                <span className="font-inter text-[#A0AEC0] text-sm">{h}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Profile card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C41E3A] to-[#D4AF37] flex items-center justify-center text-white font-playfair text-2xl font-bold">
                RS
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold text-white">Dr. R.K. Sharma</h3>
                <p className="font-inter text-sm text-[#A0AEC0]">Director, CTVS</p>
                <p className="font-inter text-sm text-[#C41E3A]">Eternal Hospital, Jaipur</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="font-playfair text-3xl font-bold text-[#C41E3A]">44+</div>
                <div className="font-inter text-xs text-[#A0AEC0]">Years Experience</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="font-playfair text-3xl font-bold text-[#D4AF37]">7,000+</div>
                <div className="font-inter text-xs text-[#A0AEC0]">Surgeries</div>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="font-playfair text-xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
              Academic Qualifications
            </h3>
            <div className="space-y-4">
              {qualifications.map((q, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="font-inter text-xs text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-1 rounded font-semibold whitespace-nowrap">{q.year}</span>
                  <div>
                    <div className="font-inter text-sm font-semibold text-white">{q.degree}</div>
                    <div className="font-inter text-xs text-[#A0AEC0]">{q.institution}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* International */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex items-center gap-4">
            <Globe className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
            <div>
              <div className="font-inter text-sm font-semibold text-white">International Exposure</div>
              <div className="font-inter text-xs text-[#A0AEC0]">University Hospital Uppsala, Sweden</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
