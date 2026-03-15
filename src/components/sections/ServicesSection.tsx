"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, Heart, Shield, Minimize2, Network, Baby, ArrowRight } from "lucide-react";

const SERVICES = [
  { Icon: Activity, color: "#C41E3A", title: "Bypass Surgery (CABG)", tag: "Most Common", description: "Off-pump beating heart technique used in 75% of ~5,000 CABG surgeries. Reduced complications, faster recovery, lower stroke risk." },
  { Icon: Heart, color: "#D4AF37", title: "Valve Surgery", tag: "Speciality", description: "Repair-first philosophy for mitral, aortic, tricuspid and pulmonary valves. Minimally invasive techniques when appropriate." },
  { Icon: Shield, color: "#60A5FA", title: "Aortic Surgery", tag: "", description: "Complex aortic aneurysm and dissection repair — root procedures, ascending aorta and arch reconstruction." },
  { Icon: Minimize2, color: "#34D399", title: "Minimally Invasive", tag: "", description: "Video-assisted procedures with smaller incisions, less pain, shorter stays, and faster return to daily life." },
  { Icon: Network, color: "#A78BFA", title: "Peripheral Vascular", tag: "", description: "Peripheral arterial disease, carotid artery disease, venous disorders — bypass, endarterectomy, endovascular." },
  { Icon: Baby, color: "#F472B6", title: "Congenital Heart", tag: "", description: "Surgical correction of ASD, VSD, Tetralogy of Fallot, PDA and structural heart defects in children and adults." },
];

export default function ServicesSection() {
  return (
    <section
      className="w-full bg-[#080C18] border-t border-white/[0.06]"
      aria-labelledby="services-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="font-inter text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-3"
            >
              Specializations
            </motion.p>
            <motion.h2
              id="services-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
            >
              Cardiac Surgery{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #C41E3A, #D4AF37)' }}>
                Services
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-inter text-base text-[#94A3B8] leading-relaxed"
            >
              World-class cardiac care with 44+ years of precision and compassion.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.3 }}
            className="flex-shrink-0"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-inter text-sm font-semibold px-6 py-3 rounded-full border border-[#C41E3A]/50 text-[#C41E3A] hover:bg-[#C41E3A] hover:text-white hover:border-[#C41E3A] transition-all duration-200 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18]"
            >
              View All <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {SERVICES.map((s, i) => {
            const { Icon } = s;
            return (
              <li key={s.title}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="h-full"
                >
                  <Link
                    href="/services"
                    className="group flex flex-col h-full rounded-2xl p-6 border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18]"
                    style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                    aria-label={`Learn more about ${s.title}`}
                  >
                    {/* Icon row */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${s.color}18`, border: `1px solid ${s.color}35` }}
                        aria-hidden="true"
                      >
                        <Icon className="w-5 h-5" style={{ color: s.color }} aria-hidden="true" />
                      </div>
                      {s.tag && (
                        <span
                          className="font-inter text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: `${s.color}18`, color: s.color }}
                        >
                          {s.tag}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <h3 className="font-playfair text-lg font-bold text-white mb-3 leading-snug group-hover:text-[#E2E8F0] transition-colors">
                      {s.title}
                    </h3>
                    <p className="font-inter text-sm text-[#64748B] leading-relaxed flex-1">
                      {s.description}
                    </p>

                    {/* Arrow */}
                    <div className="mt-5 flex items-center gap-1.5 font-inter text-xs font-semibold group-hover:gap-2.5 transition-all duration-200" style={{ color: s.color }}>
                      Learn more <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                  </Link>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
