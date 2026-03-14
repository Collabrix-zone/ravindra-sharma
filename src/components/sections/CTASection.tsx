"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#080C18] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#C41E3A]/15 via-transparent to-[#D4AF37]/10 pointer-events-none" />
      <div className="absolute inset-0 border-y border-white/5 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight"
        >
          Your Health Deserves the Best Care
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 font-inter text-lg text-[#A0AEC0] max-w-xl mx-auto"
        >
          Schedule a consultation with Dr. Ravindra Sharma and receive personalised surgical care tailored to your needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <Link href="/appointment">
            <Button size="lg">Book an Appointment</Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">Contact Us</Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          {[
            { icon: "📞", label: "+91 12345 67890" },
            { icon: "📍", label: "City Hospital, New Delhi" },
            { icon: "🕐", label: "Mon – Sat, 9AM – 6PM" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span className="font-inter text-sm text-[#A0AEC0]">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
