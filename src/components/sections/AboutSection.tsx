"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, Award, Globe, ArrowRight } from "lucide-react";

const CREDENTIALS = [
  {
    icon: GraduationCap,
    title: "MCh Thoracic Surgery",
    subtitle: "CMC Hospital, Vellore — under Prof. Stanley John",
  },
  {
    icon: Award,
    title: "Trained under Dr. N. Trehan",
    subtitle: "Escorts Heart Institute, New Delhi",
  },
  {
    icon: Globe,
    title: "International Fellowship",
    subtitle: "Uppsala University Hospital, Sweden",
  },
];

const HIGHLIGHTS = [
  { val: "44+", label: "Years Total Experience" },
  { val: "25+", label: "Years as Independent Surgeon" },
  { val: "7,000+", label: "Open Heart Surgeries" },
  { val: "75%", label: "CABG Off-Pump (Beating Heart)" },
];

export default function AboutSection() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D1120 0%, #0A0F1E 50%, #0D1120 100%)" }}
      aria-labelledby="about-section-heading"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/6 blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#C41E3A]/5 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main profile card */}
            <div
              className="rounded-3xl overflow-hidden p-8 mb-5 relative"
              style={{
                background: "linear-gradient(135deg, rgba(196,30,58,0.12) 0%, rgba(212,175,55,0.08) 50%, rgba(8,12,24,0.5) 100%)",
                border: "1px solid rgba(196,30,58,0.25)",
              }}
            >
              {/* Avatar */}
              <div className="flex items-center gap-5 mb-8">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold font-playfair text-white flex-shrink-0 shadow-lg"
                  style={{ background: "linear-gradient(135deg, #C41E3A 0%, #D4AF37 100%)" }}
                  aria-hidden="true"
                >
                  RKS
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-white">Dr. Ravindra Kumar Sharma</h3>
                  <p className="font-inter text-sm text-[#94A3B8] mt-0.5">Director, CTVS</p>
                  <p className="font-inter text-sm font-medium mt-0.5" style={{ color: "#C41E3A" }}>Eternal Hospital, Jaipur</p>
                </div>
              </div>

              {/* Quick stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {HIGHLIGHTS.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-xl p-4 text-center"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <p className="font-playfair text-2xl font-bold text-white">{h.val}</p>
                    <p className="font-inter text-xs text-[#64748B] mt-1 leading-tight">{h.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials */}
            <div
              className="rounded-2xl p-6 space-y-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h3 className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
                Training &amp; Credentials
              </h3>
              {CREDENTIALS.map((c, i) => {
                const { icon: Icon } = c;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.2)" }}
                      aria-hidden="true"
                    >
                      <Icon className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-inter text-sm font-semibold text-white">{c.title}</p>
                      <p className="font-inter text-xs text-[#64748B] mt-0.5 leading-relaxed">{c.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-inter text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-3">
              About Dr. Sharma
            </p>
            <h2
              id="about-section-heading"
              className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.15]"
            >
              A Legacy of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C41E3A] to-[#D4AF37]">
                Healing Hearts
              </span>
            </h2>

            <div className="space-y-5 mb-8">
              <p className="font-inter text-base text-[#94A3B8] leading-[1.8]">
                Dr. Ravindra Kumar Sharma is the Director of Cardiothoracic and Vascular Surgery (CTVS) at Eternal Hospital, Jaipur — one of India&apos;s most experienced cardiac surgeons with over 44 years of total medical experience.
              </p>
              <p className="font-inter text-base text-[#94A3B8] leading-[1.8]">
                With 25 years as an independent cardiac surgeon, he has performed over 7,000 open heart surgeries and transformed cardiac care in Rajasthan. His mastery of the beating-heart CABG technique — used in 75% of his bypass surgeries — significantly reduces risk, blood transfusion, and recovery time.
              </p>
              <p className="font-inter text-base text-[#94A3B8] leading-[1.8]">
                Trained under the legendary Dr. N. Trehan at Escorts Heart Institute and under Prof. Stanley John at CMC Vellore, with international exposure at Uppsala University Hospital, Sweden — Dr. Sharma brings unparalleled expertise and global perspective to every patient.
              </p>
            </div>

            {/* Academic qualifications */}
            <div className="mb-8 space-y-3">
              <p className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-[#64748B] mb-3">Academic Qualifications</p>
              {[
                { year: "1981", degree: "MBBS", institution: "J.L.N. Medical College, Ajmer" },
                { year: "1985", degree: "MS (General Surgery)", institution: "J.L.N. Medical College, Ajmer" },
                { year: "1992", degree: "MCh (Thoracic Surgery)", institution: "CMC Hospital, Vellore" },
              ].map((q) => (
                <div key={q.year} className="flex items-center gap-4">
                  <span
                    className="font-inter text-xs font-bold px-2.5 py-1.5 rounded-lg flex-shrink-0"
                    style={{ background: "rgba(212,175,55,0.12)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.2)" }}
                  >
                    {q.year}
                  </span>
                  <div>
                    <span className="font-inter text-sm font-semibold text-white">{q.degree}</span>
                    <span className="font-inter text-xs text-[#64748B] ml-2">{q.institution}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 font-inter text-sm font-semibold text-white bg-gradient-to-r from-[#C41E3A] to-[#a01830] hover:from-[#D4AF37] hover:to-[#b8952d] px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#C41E3A]/20 hover:shadow-[#D4AF37]/20 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1120] min-h-[52px]"
            >
              Meet Dr. Sharma
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
