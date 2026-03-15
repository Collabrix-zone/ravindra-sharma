"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, GraduationCap, Award, Globe } from "lucide-react";

const HIGHLIGHTS = [
  "44+ years total experience, 25+ years independent practice",
  "~7,000 open heart surgeries including CABG and valve",
  "75% CABG surgeries performed on beating heart",
  "Trained under Dr. N. Trehan at Escorts Heart Institute",
  "MCh from CMC Vellore under Prof. Stanley John",
  "International fellowship — Uppsala University Hospital, Sweden",
];

const QUALS = [
  { year: "1981", degree: "MBBS", place: "J.L.N. Medical College, Ajmer" },
  { year: "1985", degree: "MS (General Surgery)", place: "J.L.N. Medical College, Ajmer" },
  { year: "1992", degree: "MCh (Thoracic Surgery)", place: "CMC Hospital, Vellore" },
];

export default function AboutSection() {
  return (
    <section
      className="w-full bg-[#0D1120] border-t border-white/[0.06]"
      aria-labelledby="about-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Profile card */}
            <div
              className="rounded-2xl p-6 border border-white/[0.1]"
              style={{ background: 'linear-gradient(135deg, rgba(196,30,58,0.1) 0%, rgba(212,175,55,0.06) 60%, rgba(8,12,24,0.4) 100%)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold font-playfair text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #C41E3A 0%, #D4AF37 100%)' }}
                  aria-hidden="true"
                >
                  RKS
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-bold text-white">Dr. R.K. Sharma</h3>
                  <p className="font-inter text-sm text-[#94A3B8]">Director, CTVS</p>
                  <p className="font-inter text-sm font-medium" style={{ color: '#C41E3A' }}>Eternal Hospital, Jaipur</p>
                </div>
              </div>
              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "44+", l: "Years Experience", c: "#C41E3A" },
                  { n: "7,000+", l: "Open Surgeries", c: "#D4AF37" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-xl p-4 text-center border border-white/[0.06]"
                    style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                  >
                    <p className="font-playfair text-2xl font-bold" style={{ color: s.c }}>{s.n}</p>
                    <p className="font-inter text-xs text-[#64748B] mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic qualifications */}
            <div
              className="rounded-2xl p-6 border border-white/[0.07]"
              style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
            >
              <h3 className="font-inter text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-5 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" aria-hidden="true" />
                Academic Qualifications
              </h3>
              <dl className="space-y-4">
                {QUALS.map((q) => (
                  <div key={q.year} className="flex items-start gap-3">
                    <dt>
                      <span
                        className="font-inter text-xs font-bold px-2 py-1 rounded-md whitespace-nowrap block"
                        style={{ backgroundColor: 'rgba(212,175,55,0.12)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.2)' }}
                      >
                        {q.year}
                      </span>
                    </dt>
                    <dd>
                      <p className="font-inter text-sm font-semibold text-white">{q.degree}</p>
                      <p className="font-inter text-xs text-[#64748B] mt-0.5">{q.place}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Training */}
            <div
              className="rounded-2xl p-6 border border-white/[0.07] space-y-4"
              style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
            >
              <h3 className="font-inter text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-1">Training &amp; Fellowships</h3>
              {[
                { Icon: Award, text: "Trained at Escorts Heart Institute under Dr. N. Trehan" },
                { Icon: Globe, text: "International fellowship at Uppsala University Hospital, Sweden" },
              ].map((item, i) => {
                const { Icon } = item;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.2)' }} aria-hidden="true">
                      <Icon className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                    </div>
                    <p className="font-inter text-sm text-[#94A3B8] leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-inter text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-3">
              About Dr. Sharma
            </p>
            <h2
              id="about-heading"
              className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            >
              A Legacy of{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #C41E3A, #D4AF37)' }}>
                Healing Hearts
              </span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="font-inter text-base text-[#94A3B8] leading-[1.8]">
                Dr. Ravindra Kumar Sharma is the Director of Cardiothoracic and Vascular Surgery (CTVS) at Eternal Hospital, Jaipur — one of India&apos;s most experienced cardiac surgeons with over 44 years of total medical experience and 25 years as an independent cardiac surgeon.
              </p>
              <p className="font-inter text-base text-[#94A3B8] leading-[1.8]">
                Having performed approximately 7,000 open heart surgeries — including ~5,000 CABG procedures (75% on a beating heart) and ~2,000 valve and congenital heart surgeries — Dr. Sharma has transformed cardiac care across Rajasthan.
              </p>
            </div>

            {/* Highlights */}
            <ul className="space-y-3 mb-10" role="list" aria-label="Professional highlights">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C41E3A] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="font-inter text-sm text-[#94A3B8] leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 font-inter text-sm font-semibold text-white px-8 py-4 rounded-full min-h-[52px] transition-all duration-300 hover:opacity-90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1120]"
              style={{ background: 'linear-gradient(135deg, #C41E3A 0%, #a01830 100%)', boxShadow: '0 6px 24px rgba(196,30,58,0.25)' }}
            >
              Meet Dr. Sharma <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
