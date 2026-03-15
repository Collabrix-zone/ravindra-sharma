"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

const contactDetails = [
  { Icon: Phone, label: "+91-7231044444", href: "tel:+917231044444", ariaLabel: "Call +91 72310 44444" },
  { Icon: MapPin, label: "Eternal Hospital, Sanganer, Jaipur", href: "https://maps.google.com/?q=Eternal+Hospital+Sanganer+Jaipur", ariaLabel: "Get directions to Eternal Hospital, Jaipur" },
  { Icon: Clock, label: "Mon – Sat, 10AM – 4PM", href: undefined, ariaLabel: undefined },
];

export default function CTASection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-[#080C18] relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#C41E3A]/10 via-transparent to-[#D4AF37]/8 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 border-y border-white/5 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-4"
        >
          Take the First Step
        </motion.p>

        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight"
        >
          Your Heart Deserves
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C41E3A] to-[#D4AF37]">
            Expert Care
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 font-inter text-base sm:text-lg text-[#CBD5E0] max-w-xl mx-auto leading-relaxed"
        >
          Schedule a consultation with Dr. Ravindra Kumar Sharma and receive personalised cardiac care tailored to your needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/appointment"
            className="inline-flex items-center justify-center font-inter text-base font-semibold text-white bg-gradient-to-r from-[#C41E3A] to-[#a01830] hover:from-[#D4AF37] hover:to-[#b8952d] px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#C41E3A]/25 hover:shadow-[#D4AF37]/25 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18] min-h-[52px] w-full sm:w-auto"
          >
            Book an Appointment
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-inter text-base font-semibold border-2 border-white/30 hover:border-white/60 text-white hover:bg-white/5 px-8 py-4 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18] min-h-[52px] w-full sm:w-auto"
          >
            Contact Us
          </Link>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4"
          role="list"
          aria-label="Contact information"
        >
          {contactDetails.map((item) => {
            const { Icon } = item;
            const content = (
              <span className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-[#C41E3A] flex-shrink-0" aria-hidden="true" />
                <span className="font-inter text-sm text-[#CBD5E0]">{item.label}</span>
              </span>
            );
            return (
              <li key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={item.ariaLabel}
                    className="inline-flex items-center gap-2 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] rounded-sm min-h-[44px] px-1"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-center min-h-[44px]">{content}</div>
                )}
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
