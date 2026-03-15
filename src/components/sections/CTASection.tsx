"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="w-full bg-[#0D1120] border-t border-white/[0.06]"
      aria-labelledby="cta-heading"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-inter font-medium mb-6 border"
          style={{ backgroundColor: 'rgba(196,30,58,0.1)', borderColor: 'rgba(196,30,58,0.25)', color: '#FDA4AF' }}
          role="text"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A] animate-pulse flex-shrink-0" aria-hidden="true" />
          OPD: Monday – Saturday, 10 AM – 4 PM
        </motion.div>

        {/* Heading */}
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
        >
          Your Heart Deserves
          <br />
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #C41E3A, #E8566A 45%, #D4AF37)' }}>
            Expert Care
          </span>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-inter text-base sm:text-lg text-[#64748B] max-w-xl mx-auto leading-relaxed mb-10"
        >
          Consult Dr. Ravindra Kumar Sharma at Eternal Hospital, Jaipur. 44+ years of expertise, 7,000+ lives saved.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            href="/appointment"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto font-inter text-base font-semibold text-white px-8 py-4 rounded-full min-h-[52px] transition-all duration-300 hover:opacity-90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1120]"
            style={{ background: 'linear-gradient(135deg, #C41E3A 0%, #a01830 100%)', boxShadow: '0 8px 32px rgba(196,30,58,0.3)' }}
          >
            Book an Appointment <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <a
            href="tel:+917231044444"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto font-inter text-base font-semibold text-white border border-white/25 hover:border-white/50 hover:bg-white/5 px-8 py-4 rounded-full min-h-[52px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1120]"
            aria-label="Call Dr. Sharma at +91 72310 44444"
          >
            <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            +91-7231044444
          </a>
        </motion.div>

        {/* Contact info strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          <a
            href="https://maps.google.com/?q=Eternal+Hospital+Sanganer+Jaipur"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-inter text-sm text-[#64748B] hover:text-[#94A3B8] transition-colors min-h-[44px] px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] rounded-sm"
            aria-label="Directions to Eternal Hospital, Jaipur"
          >
            <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" aria-hidden="true" />
            Eternal Hospital, Near Airport Circle, Sanganer, Jaipur
          </a>
          <div className="flex items-center gap-2 font-inter text-sm text-[#64748B] min-h-[44px]">
            <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0" aria-hidden="true" />
            Mon – Sat, 10:00 AM – 4:00 PM
          </div>
        </motion.div>
      </div>
    </section>
  );
}
