"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const CREDENTIALS = [
  "MBBS – All India Institute of Medical Sciences (AIIMS)",
  "MS (General Surgery) – AIIMS, New Delhi",
  "Fellowship in Laparoscopic Surgery – Germany",
  "Fellowship in Oncosurgery – Tata Memorial Hospital",
];

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#080C18] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder / decorative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden bg-gradient-to-br from-[#C41E3A]/20 to-[#D4AF37]/10 border border-white/10 aspect-[4/5] flex items-center justify-center">
              <div className="text-center p-12">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#C41E3A] to-[#D4AF37] mx-auto mb-6 flex items-center justify-center">
                  <span className="text-5xl">👨‍⚕️</span>
                </div>
                <p className="font-playfair text-2xl font-bold text-white">Dr. Ravindra Sharma</p>
                <p className="font-inter text-sm text-[#D4AF37] mt-2 tracking-wider uppercase">
                  MS, FACS — Senior Consultant
                </p>
              </div>
            </div>
            {/* Decorative card */}
            <div className="absolute -bottom-6 -right-6 bg-[#C41E3A] rounded-2xl p-6 z-20 shadow-2xl">
              <p className="font-playfair text-4xl font-bold text-white">20+</p>
              <p className="font-inter text-xs text-white/80 uppercase tracking-wider mt-1">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeading
              eyebrow="About Dr. Sharma"
              title="A Surgeon Dedicated to Your Well-being"
              subtitle="With over two decades of surgical practice and thousands of successful procedures, Dr. Ravindra Sharma is a trusted name in advanced surgical care."
              className="mb-8"
            />

            <p className="font-inter text-[#A0AEC0] leading-relaxed mb-8">
              Dr. Sharma combines cutting-edge surgical techniques with a deeply empathetic approach to patient care.
              Trained at the finest institutions in India and abroad, he specialises in laparoscopic, oncological,
              and emergency surgery — always placing the patient&apos;s wellbeing at the heart of every decision.
            </p>

            <div className="mb-8 space-y-3">
              {CREDENTIALS.map((c) => (
                <div key={c} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="font-inter text-sm text-[#A0AEC0]">{c}</span>
                </div>
              ))}
            </div>

            <Link href="/about">
              <Button>Meet Dr. Sharma</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
