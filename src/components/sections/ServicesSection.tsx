"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const SERVICES = [
  {
    icon: "🔬",
    title: "Laparoscopic Surgery",
    description:
      "Minimally invasive procedures for faster recovery, reduced pain, and shorter hospital stays using the latest laparoscopic technology.",
    href: "/services",
  },
  {
    icon: "🎗️",
    title: "Cancer Surgery",
    description:
      "Comprehensive oncological surgical care including gastrointestinal, breast, and thyroid cancer with precision and compassion.",
    href: "/services",
  },
  {
    icon: "🏥",
    title: "General Surgery",
    description:
      "Expert management of acute and elective general surgical conditions, from appendectomy to complex abdominal procedures.",
    href: "/services",
  },
  {
    icon: "🔭",
    title: "Endoscopy",
    description:
      "Diagnostic and therapeutic endoscopic procedures including colonoscopy and upper GI endoscopy for accurate diagnosis.",
    href: "/services",
  },
  {
    icon: "🩺",
    title: "Hernia Repair",
    description:
      "Advanced open and laparoscopic hernia repair techniques tailored to each patient for optimal outcomes.",
    href: "/services",
  },
  {
    icon: "🫀",
    title: "Emergency Surgery",
    description:
      "Round-the-clock emergency surgical care for trauma, acute abdominal emergencies, and critical conditions.",
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
    <section className="py-24 lg:py-32 bg-[#080C18] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C41E3A]/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="What We Offer"
            title={"Surgical Excellence\nAcross Specialties"}
            subtitle="Comprehensive surgical services delivered with world-class precision and genuine care for every patient."
            className="max-w-xl"
          />
          <Link href="/services">
            <Button variant="outline">View All Services</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <Link
                href={service.href}
                className="group block h-full rounded-2xl border border-white/5 bg-white/[0.03] p-8 hover:bg-white/[0.07] hover:border-[#C41E3A]/30 transition-all duration-300"
              >
                <span className="text-4xl mb-5 block">{service.icon}</span>
                <h3 className="font-playfair text-xl font-semibold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>
                <p className="font-inter text-sm text-[#A0AEC0] leading-relaxed">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-inter text-sm font-medium text-[#C41E3A] group-hover:gap-3 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
