"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, Heart, Shield, Minimize2, Network, Baby } from "lucide-react";

const SERVICES = [
  {
    Icon: Activity,
    iconColor: "#C41E3A",
    title: "Bypass Surgery (CABG)",
    description:
      "Coronary Artery Bypass Grafting performed with 75% off-pump beating heart technique, reducing complications and accelerating recovery.",
    href: "/services",
  },
  {
    Icon: Heart,
    iconColor: "#D4AF37",
    title: "Valve Surgery",
    description:
      "Comprehensive mitral, aortic, tricuspid and pulmonary valve repair and replacement using a repair-first philosophy.",
    href: "/services",
  },
  {
    Icon: Shield,
    iconColor: "#60A5FA",
    title: "Aortic Surgery",
    description:
      "Complex aortic aneurysm and dissection repair including aortic root procedures, ascending aorta and arch reconstruction.",
    href: "/services",
  },
  {
    Icon: Minimize2,
    iconColor: "#34D399",
    title: "Minimally Invasive Surgery",
    description:
      "Video-assisted cardiac procedures with smaller incisions, reduced pain, shorter hospital stays and faster return to normal life.",
    href: "/services",
  },
  {
    Icon: Network,
    iconColor: "#A78BFA",
    title: "Peripheral Vascular Surgery",
    description:
      "Treatment of peripheral arterial disease, carotid artery disease and venous disorders — bypass, endarterectomy, endovascular interventions.",
    href: "/services",
  },
  {
    Icon: Baby,
    iconColor: "#F472B6",
    title: "Congenital Heart Surgery",
    description:
      "Surgical correction of ASD, VSD, Tetralogy of Fallot, PDA and other structural heart defects in children and adults.",
    href: "/services",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function ServicesSection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-[#080C18] relative overflow-hidden"
      aria-labelledby="services-section-heading"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C41E3A]/5 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-3"
            >
              Specializations
            </motion.p>
            <motion.h2
              id="services-section-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Cardiac Surgery
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C41E3A] to-[#D4AF37]">
                Services
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 font-inter text-base sm:text-lg text-[#CBD5E0] leading-relaxed"
            >
              World-class cardiac care delivered with precision, compassion, and 44+ years of expertise.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center font-inter text-sm font-semibold border border-[#C41E3A] text-[#C41E3A] hover:bg-[#C41E3A] hover:text-white px-6 py-3 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18] min-h-[44px]"
            >
              View All Services
            </Link>
          </motion.div>
        </div>

        {/* Services grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6" role="list">
          {SERVICES.map((service, i) => {
            const { Icon } = service;
            return (
              <li key={service.title}>
                <motion.div
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                  className="h-full"
                >
                  <Link
                    href={service.href}
                    className="group flex flex-col h-full rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18]"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                      style={{ backgroundColor: `${service.iconColor}15`, border: `1px solid ${service.iconColor}30` }}
                      aria-hidden="true"
                    >
                      <Icon className="w-6 h-6" style={{ color: service.iconColor }} aria-hidden="true" />
                    </div>

                    <h3 className="font-playfair text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-inter text-sm text-[#CBD5E0] leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <span
                      className="mt-5 inline-flex items-center gap-2 font-inter text-sm font-semibold text-[#C41E3A] group-hover:gap-3 transition-all"
                      aria-hidden="true"
                    >
                      Learn more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
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
