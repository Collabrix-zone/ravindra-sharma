"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Dramatic background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0D0812 0%, #140B0E 30%, #0D0812 70%, #080C18 100%)",
        }}
        aria-hidden="true"
      />
      {/* Glow orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#C41E3A]/10 blur-[140px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/8 blur-[120px] pointer-events-none" aria-hidden="true" />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-inter font-medium mb-6"
          style={{
            background: "rgba(196,30,58,0.12)",
            border: "1px solid rgba(196,30,58,0.3)",
            color: "#F87171",
          }}
          role="text"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A] animate-pulse flex-shrink-0" aria-hidden="true" />
          OPD: Monday – Saturday, 10 AM – 4 PM
        </motion.div>

        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
        >
          Your Heart Deserves
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C41E3A] via-[#E05A6A] to-[#D4AF37]">
            Expert Care
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-base sm:text-lg text-[#64748B] max-w-xl mx-auto leading-relaxed mb-10"
        >
          Consult Dr. Ravindra Kumar Sharma at Eternal Hospital, Jaipur. 44+ years of expertise, 7,000+ lives saved.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            href="/appointment"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto font-inter text-base font-semibold text-white px-8 py-4 rounded-full transition-all duration-300 min-h-[52px] hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0812] shadow-xl"
            style={{
              background: "linear-gradient(135deg, #C41E3A 0%, #a01830 100%)",
              boxShadow: "0 8px 32px rgba(196,30,58,0.35)",
            }}
          >
            Book an Appointment
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <a
            href="tel:+917231044444"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto font-inter text-base font-semibold text-white border border-white/25 hover:border-white/50 hover:bg-white/5 px-8 py-4 rounded-full transition-all duration-200 min-h-[52px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0812]"
            aria-label="Call Dr. Sharma at +91 72310 44444"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            +91-7231044444
          </a>
        </motion.div>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-3"
        >
          {[
            { Icon: MapPin, text: "Eternal Hospital, Near Airport Circle, Sanganer, Jaipur", href: "https://maps.google.com/?q=Eternal+Hospital+Sanganer+Jaipur", label: "Directions to Eternal Hospital" },
            { Icon: Clock, text: "Mon – Sat, 10:00 AM – 4:00 PM", href: undefined, label: undefined },
          ].map((item, i) => {
            const { Icon } = item;
            const content = (
              <span className="flex items-start gap-2 font-inter text-sm text-[#64748B] hover:text-[#94A3B8] transition-colors">
                <Icon className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{item.text}</span>
              </span>
            );
            return item.href ? (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] rounded-sm">
                {content}
              </a>
            ) : (
              <div key={i}>{content}</div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
