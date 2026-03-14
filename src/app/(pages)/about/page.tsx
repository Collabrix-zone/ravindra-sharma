"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

const TIMELINE = [
  { year: "1998", title: "MBBS – AIIMS New Delhi", desc: "Graduated with distinction from India's premier medical institution." },
  { year: "2002", title: "MS General Surgery – AIIMS", desc: "Completed post-graduation specialising in general and gastrointestinal surgery." },
  { year: "2004", title: "Fellowship – Laparoscopic Surgery, Germany", desc: "Advanced training in minimally invasive techniques at the University of Heidelberg." },
  { year: "2006", title: "Fellowship – Oncosurgery, Tata Memorial", desc: "Specialised training in surgical oncology under leading cancer surgeons." },
  { year: "2007", title: "Senior Consultant, City Hospital Delhi", desc: "Joined as senior consultant, building one of Delhi's most trusted surgical practices." },
  { year: "2015+", title: "10,000+ Surgeries Milestone", desc: "Reached a landmark achievement with consistently outstanding patient outcomes." },
];

const VALUES = [
  { icon: "🎯", title: "Precision", desc: "Every incision, every decision — made with meticulous surgical accuracy." },
  { icon: "❤️", title: "Compassion", desc: "Treating every patient with empathy, dignity, and genuine human care." },
  { icon: "🔬", title: "Innovation", desc: "Continuously adopting the latest minimally invasive techniques and technology." },
  { icon: "🤝", title: "Integrity", desc: "Transparent communication and honest guidance at every step of your care." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#080C18] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C41E3A]/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
              About the Surgeon
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Dr. Ravindra Sharma
            </h1>
            <p className="font-inter text-xl text-[#A0AEC0] leading-relaxed">
              Senior Consultant Surgeon with 20+ years of expertise in laparoscopic, oncological,
              and general surgery — combining precision technique with compassionate patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio + Photo */}
      <section className="py-20 bg-[#080C18]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Photo card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              <div className="rounded-3xl bg-gradient-to-br from-[#C41E3A]/20 to-[#D4AF37]/10 border border-white/10 p-10 text-center">
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#C41E3A] to-[#D4AF37] mx-auto flex items-center justify-center text-6xl mb-6">
                  👨‍⚕️
                </div>
                <h2 className="font-playfair text-2xl font-bold text-white">Dr. Ravindra Sharma</h2>
                <p className="font-inter text-sm text-[#D4AF37] mt-2 tracking-wide uppercase">MS, FACS</p>
                <div className="mt-6 space-y-2 text-left">
                  {[
                    ["Speciality", "Laparoscopic & Oncosurgery"],
                    ["Experience", "20+ Years"],
                    ["Location", "City Hospital, New Delhi"],
                    ["Languages", "Hindi, English"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between text-sm">
                      <span className="font-inter text-[#A0AEC0]">{k}</span>
                      <span className="font-inter text-white font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Bio text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-3 space-y-5"
            >
              <p className="font-inter text-[#A0AEC0] leading-relaxed">
                Dr. Ravindra Sharma is one of India&apos;s most respected surgeons, known for his mastery of
                complex laparoscopic and oncological procedures. Trained at the All India Institute of Medical
                Sciences (AIIMS) — the country&apos;s most prestigious medical institution — he subsequently
                completed advanced fellowships in Germany and at Tata Memorial Hospital.
              </p>
              <p className="font-inter text-[#A0AEC0] leading-relaxed">
                Over his two-decade career, Dr. Sharma has performed more than 10,000 surgical procedures,
                maintaining a remarkable 98% success rate. His approach uniquely blends technical precision
                with genuine patient empathy — every patient receives not just expert surgical care, but also
                honest counsel and emotional support through their journey.
              </p>
              <p className="font-inter text-[#A0AEC0] leading-relaxed">
                A committed teacher and researcher, Dr. Sharma has published numerous papers in peer-reviewed
                journals and regularly speaks at national and international surgical conferences. He is also
                a Fellow of the American College of Surgeons (FACS) and a member of the Association of Surgeons of India.
              </p>
              <div className="pt-4">
                <Link href="/appointment">
                  <Button>Book a Consultation</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#050810]">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading
            eyebrow="Career Journey"
            title="A Path Built on Excellence"
            subtitle="From AIIMS to international fellowships — a career defined by continuous learning and patient-first care."
            className="mb-16"
          />
          <div className="relative border-l border-[#C41E3A]/30 ml-4 space-y-10">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-8"
              >
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#C41E3A] border-2 border-[#080C18]" />
                <span className="font-inter text-xs font-bold text-[#D4AF37] uppercase tracking-widest">{item.year}</span>
                <h3 className="font-playfair text-xl text-white font-semibold mt-1">{item.title}</h3>
                <p className="font-inter text-sm text-[#A0AEC0] mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#080C18]">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading
            eyebrow="Core Philosophy"
            title="What Guides Every Surgery"
            centered
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 text-center"
              >
                <span className="text-4xl">{v.icon}</span>
                <h3 className="font-playfair text-xl font-semibold text-white mt-4 mb-2">{v.title}</h3>
                <p className="font-inter text-sm text-[#A0AEC0]">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
