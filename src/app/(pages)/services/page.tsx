"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

const SERVICES = [
  {
    icon: "🔬",
    title: "Laparoscopic Surgery",
    tag: "Minimally Invasive",
    description:
      "Laparoscopic (keyhole) surgery uses small incisions and a camera to perform complex procedures with minimal trauma. Benefits include less pain, faster recovery, reduced hospital stay, and smaller scars. Dr. Sharma is among India&apos;s most experienced laparoscopic surgeons.",
    procedures: ["Laparoscopic Cholecystectomy", "Laparoscopic Appendectomy", "Laparoscopic Hernia Repair", "Laparoscopic Colectomy", "Fundoplication"],
  },
  {
    icon: "🎗️",
    title: "Cancer Surgery",
    tag: "Oncosurgery",
    description:
      "Surgical oncology forms the cornerstone of cancer treatment. Dr. Sharma specialises in curative and palliative surgical procedures for gastrointestinal, breast, thyroid, and other cancers, using organ-preserving techniques wherever possible.",
    procedures: ["Gastrectomy", "Colectomy for Colon Cancer", "Mastectomy & Breast Conservation", "Thyroidectomy", "Whipple Procedure"],
  },
  {
    icon: "🏥",
    title: "General Surgery",
    tag: "Core Specialty",
    description:
      "Comprehensive management of a wide range of acute and elective surgical conditions. Dr. Sharma&apos;s general surgery practice covers everything from routine procedures to highly complex cases.",
    procedures: ["Appendectomy", "Hemorrhoidectomy", "Fistula Surgery", "Pilonidal Sinus", "Skin & Soft Tissue Surgery"],
  },
  {
    icon: "🔭",
    title: "Endoscopy",
    tag: "Diagnostic & Therapeutic",
    description:
      "Advanced endoscopic procedures for accurate diagnosis and non-surgical treatment of upper and lower gastrointestinal conditions. State-of-the-art equipment ensures precision and patient comfort.",
    procedures: ["Upper GI Endoscopy", "Colonoscopy", "ERCP", "Endoscopic Polypectomy", "Capsule Endoscopy"],
  },
  {
    icon: "🩺",
    title: "Hernia Repair",
    tag: "Reconstructive",
    description:
      "Hernia repair using both open and laparoscopic mesh techniques, customised to the patient&apos;s anatomy and clinical needs. Minimally invasive repairs offer rapid return to daily activities.",
    procedures: ["Inguinal Hernia Repair", "Umbilical Hernia", "Incisional Hernia", "Hiatus Hernia", "Ventral Hernia"],
  },
  {
    icon: "🫀",
    title: "Emergency Surgery",
    tag: "24/7 Available",
    description:
      "Life-saving emergency surgical care available around the clock. Dr. Sharma and his team are equipped to handle acute abdominal emergencies, trauma, and post-operative complications with urgency and expertise.",
    procedures: ["Perforated Peptic Ulcer", "Acute Appendicitis", "Bowel Obstruction", "Trauma Surgery", "Abdominal Abscess Drainage"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#080C18] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/8 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
              Surgical Specialities
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Our Services
            </h1>
            <p className="font-inter text-xl text-[#A0AEC0] leading-relaxed">
              Comprehensive surgical care across six specialities — delivered with world-class precision, modern technology, and genuine compassion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 pb-24 bg-[#080C18]">
        <div className="container mx-auto px-6 lg:px-12 space-y-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i % 2 === 0 ? 0 : 0.1 }}
              className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8 hover:border-[#C41E3A]/20 transition-colors"
            >
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{service.icon}</span>
                  <div>
                    <span className="font-inter text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">{service.tag}</span>
                    <h2 className="font-playfair text-2xl font-bold text-white">{service.title}</h2>
                  </div>
                </div>
                <p className="font-inter text-[#A0AEC0] leading-relaxed" dangerouslySetInnerHTML={{ __html: service.description }} />
              </div>
              <div>
                <p className="font-inter text-xs font-semibold uppercase tracking-widest text-[#A0AEC0] mb-4">Procedures Include</p>
                <ul className="space-y-2">
                  {service.procedures.map((p) => (
                    <li key={p} className="flex items-center gap-2 font-inter text-sm text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A] flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/appointment">
                    <Button size="sm" variant="outline">Book Consultation</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
