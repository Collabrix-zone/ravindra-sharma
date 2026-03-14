"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const ParticleBackground = dynamic(
  () => import("@/components/3d/ParticleBackground"),
  { ssr: false }
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080C18]">
      <ParticleBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C41E3A]/10 via-transparent to-[#D4AF37]/5 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#080C18] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-[#D4AF37]" />
            <span className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Senior Consultant Surgeon
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6"
          >
            Healing with{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C41E3A] to-[#D4AF37]">
                Precision
              </span>
            </span>
            <br />& Compassion
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-inter text-lg md:text-xl text-[#A0AEC0] leading-relaxed max-w-2xl mb-10"
          >
            Dr. Ravindra Sharma brings over 20 years of surgical excellence in laparoscopic,
            oncological, and general surgery — transforming complex cases into success stories.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link href="/appointment">
              <Button size="lg">Book an Appointment</Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">Explore Services</Button>
            </Link>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-10"
          >
            {[
              { value: "20+", label: "Years Experience" },
              { value: "10,000+", label: "Surgeries Performed" },
              { value: "98%", label: "Success Rate" },
              { value: "5,000+", label: "Happy Patients" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-playfair text-3xl font-bold text-white">{stat.value}</p>
                <p className="font-inter text-xs text-[#A0AEC0] mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-inter text-xs tracking-widest uppercase text-[#A0AEC0]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10 bg-gradient-to-b from-[#D4AF37] to-transparent"
        />
      </motion.div>
    </section>
  );
}
