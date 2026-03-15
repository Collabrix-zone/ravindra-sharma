"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
  "44+ years of total medical experience",
  "25 years as an independent cardiac surgeon",
  "~7,000 open heart surgeries performed",
  "~5,000 CABG surgeries (75% off-pump beating heart)",
  "~2,000 valve & congenital heart surgeries",
  "Trained under Dr. N. Trehan at Escorts Heart Institute",
  "MCh from CMC Vellore under Prof. Stanley John",
  "International exposure at Uppsala University Hospital, Sweden",
];

const QUALIFICATIONS = [
  { year: "1981", degree: "MBBS", institution: "J.L.N. Medical College, Ajmer" },
  { year: "1985", degree: "MS (General Surgery)", institution: "J.L.N. Medical College, Ajmer" },
  { year: "1992", degree: "MCh (Thoracic Surgery)", institution: "CMC Hospital, Vellore" },
];

export default function AboutSection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-[#080C18] relative overflow-hidden"
      aria-labelledby="about-section-heading"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Profile card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm mb-6">
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
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="font-playfair text-3xl font-bold text-[#C41E3A]" aria-label="44 plus years experience">44+</p>
                  <p className="font-inter text-xs text-[#CBD5E0] mt-1">Years Experience</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="font-playfair text-3xl font-bold text-[#D4AF37]" aria-label="7000 plus surgeries">7,000+</p>
                  <p className="font-inter text-xs text-[#CBD5E0] mt-1">Open Heart Surgeries</p>
                </div>
              </div>
            </div>

            {/* Qualifications */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="font-playfair text-lg font-bold text-white mb-5">Academic Qualifications</h3>
              <dl className="space-y-4">
                {QUALIFICATIONS.map((q) => (
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
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
              About Dr. Sharma
            </p>
            <h2
              id="about-section-heading"
              className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              A Legacy of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C41E3A] to-[#D4AF37]">
                Healing Hearts
              </span>
            </h2>

            <p className="font-inter text-base text-[#CBD5E0] leading-relaxed mb-4">
              Dr. Ravindra Kumar Sharma is the Director of Cardiothoracic and Vascular Surgery (CTVS) at Eternal Hospital, Jaipur — one of India's most experienced cardiac surgeons. With over 44 years of medical experience and 25 years as an independent cardiac surgeon, he has transformed cardiac care in Rajasthan.
            </p>

            <p className="font-inter text-base text-[#CBD5E0] leading-relaxed mb-8">
              Trained under the legendary Dr. N. Trehan at Escorts Heart Institute and under Prof. Stanley John at CMC Vellore, with international exposure at Uppsala University Hospital, Sweden — Dr. Sharma brings unparalleled expertise to every patient.
            </p>

            <ul className="mb-8 space-y-3" role="list" aria-label="Professional highlights">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C41E3A] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="font-inter text-sm text-[#CBD5E0] leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 font-inter text-base font-semibold text-white bg-gradient-to-r from-[#C41E3A] to-[#a01830] hover:from-[#D4AF37] hover:to-[#b8952d] px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#C41E3A]/25 hover:shadow-[#D4AF37]/25 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18] min-h-[52px]"
            >
              Meet Dr. Sharma
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
