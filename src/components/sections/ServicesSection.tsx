"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, Heart, Shield, Minimize2, Network, Baby, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    Icon: Activity,
    color: "#C41E3A",
    title: "Bypass Surgery (CABG)",
    description: "Coronary Artery Bypass Grafting with 75% off-pump beating heart technique. Reduced complications, faster recovery, lower stroke risk.",
    tag: "Most Common",
  },
  {
    Icon: Heart,
    color: "#D4AF37",
    title: "Valve Surgery",
    description: "Repair-first philosophy for mitral, aortic, tricuspid and pulmonary valves. Minimally invasive techniques when appropriate.",
    tag: "Speciality",
  },
  {
    Icon: Shield,
    color: "#60A5FA",
    title: "Aortic Surgery",
    description: "Complex aortic aneurysm and dissection repair including root procedures, ascending aorta, and arch reconstruction under circulatory arrest.",
    tag: "",
  },
  {
    Icon: Minimize2,
    color: "#34D399",
    title: "Minimally Invasive",
    description: "Video-assisted cardiac procedures with smaller incisions, reduced pain, shorter hospital stays, and faster return to daily life.",
    tag: "",
  },
  {
    Icon: Network,
    color: "#A78BFA",
    title: "Peripheral Vascular",
    description: "Peripheral arterial disease, carotid artery surgery, and venous disorders — bypass, endarterectomy, endovascular interventions.",
    tag: "",
  },
  {
    Icon: Baby,
    color: "#F472B6",
    title: "Congenital Heart",
    description: "Surgical correction of ASD, VSD, Tetralogy of Fallot, PDA and structural defects in children and adults.",
    tag: "",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-[#080C18] relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C41E3A]/5 blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/5 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-inter text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-3"
            >
              Specializations
            </motion.p>
            <motion.h2
              id="services-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15]"
            >
              Cardiac Surgery{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C41E3A] to-[#D4AF37]">
                  Services
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#C41E3A] to-[#D4AF37] opacity-40" aria-hidden="true" />
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 font-inter text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-xl"
            >
              World-class cardiac care with 44+ years of precision and compassion.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex-shrink-0"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-[#C41E3A] border border-[#C41E3A]/50 hover:bg-[#C41E3A] hover:text-white hover:border-[#C41E3A] px-6 py-3 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18] min-h-[44px]"
            >
              View All Services <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        {/* Services grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
          {SERVICES.map((service, i) => {
            const { Icon } = service;
            return (
              <li key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="h-full"
                >
                  <Link
                    href="/services"
                    className="group relative flex flex-col h-full rounded-2xl p-6 sm:p-7 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18] overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      style={{ background: `radial-gradient(circle at 20% 80%, ${service.color}10 0%, transparent 60%)` }}
                      aria-hidden="true"
                    />
                    {/* Top accent line on hover */}
                    <div
                      className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(90deg, transparent, ${service.color}80, transparent)` }}
                      aria-hidden="true"
                    />

                    {/* Header */}
                    <div className="flex items-start justify-between mb-5 relative z-10">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${service.color}18`, border: `1px solid ${service.color}35` }}
                        aria-hidden="true"
                      >
                        <Icon className="w-5 h-5" style={{ color: service.color }} aria-hidden="true" />
                      </div>
                      {service.tag && (
                        <span
                          className="font-inter text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{ background: `${service.color}18`, color: service.color }}
                        >
                          {service.tag}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <h3 className="relative z-10 font-playfair text-lg font-bold text-white mb-3 group-hover:text-[#E2E8F0] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="relative z-10 font-inter text-sm text-[#64748B] group-hover:text-[#94A3B8] leading-relaxed flex-1 transition-colors">
                      {service.description}
                    </p>

                    {/* Learn more */}
                    <div className="relative z-10 mt-5 flex items-center gap-2 font-inter text-xs font-semibold transition-all duration-200 group-hover:gap-3" style={{ color: service.color }}>
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
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
