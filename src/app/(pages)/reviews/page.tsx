"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";

const REVIEWS = [
  { name: "Priya Mehta", location: "Mumbai", rating: 5, treatment: "Laparoscopic Cholecystectomy", date: "January 2025", review: "Dr. Sharma's expertise completely transformed my experience. I was terrified going into surgery but his calm, reassuring nature put me at ease. I was discharged in under 24 hours and back to normal life in 10 days. Truly exceptional." },
  { name: "Ramesh Gupta", location: "Delhi", rating: 5, treatment: "Colon Cancer Surgery", date: "November 2024", review: "After a devastating cancer diagnosis, I thought my life was over. Dr. Sharma sat with me for over an hour explaining every aspect of the procedure. The surgery was flawless. I am now cancer-free. I owe him my life." },
  { name: "Sunita Verma", location: "Jaipur", rating: 5, treatment: "Hernia Repair", date: "October 2024", review: "Two years of constant discomfort resolved in one day. The laparoscopic hernia repair was painless and I was walking the same evening. Dr. Sharma is simply the best surgeon I have ever encountered." },
  { name: "Arjun Kapoor", location: "Pune", rating: 5, treatment: "Emergency Appendectomy", date: "September 2024", review: "I arrived at 2 AM in unbearable pain. Dr. Sharma operated within the hour and saved me from a rupture. The entire team was professional and reassuring. Outstanding emergency care." },
  { name: "Kavitha Rao", location: "Hyderabad", rating: 5, treatment: "Thyroid Surgery", date: "August 2024", review: "The scar from my thyroidectomy is barely visible. Dr. Sharma was meticulous and thorough, addressed every concern I had, and the outcome exceeded expectations. Highly recommend." },
  { name: "Deepak Nair", location: "Kochi", rating: 5, treatment: "Laparoscopic Appendectomy", date: "July 2024", review: "Fast, efficient, and nearly painless. I came in on a Friday and was home by Sunday. Dr. Sharma's skill with laparoscopic techniques is unmatched. Zero complications." },
  { name: "Anjali Singh", location: "Lucknow", rating: 5, treatment: "Breast Cancer Surgery", date: "June 2024", review: "Dr. Sharma performed my lumpectomy with such precision that my recovery was remarkably smooth. His compassion throughout made a frightening experience manageable. Forever grateful." },
  { name: "Mohammed Farhan", location: "Hyderabad", rating: 5, treatment: "Gallbladder Removal", date: "May 2024", review: "Highly professional, knowledgeable, and caring. Explained everything in simple terms. The surgery went perfectly and I had zero complications. I recommend Dr. Sharma to everyone." },
  { name: "Meera Joshi", location: "Nashik", rating: 5, treatment: "Colonoscopy + Polypectomy", date: "April 2024", review: "The procedure was completely comfortable — I barely noticed it was happening. Dr. Sharma caught and removed a polyp early. His attention to detail may well have saved my life." },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? "text-[#D4AF37]" : "text-white/20"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#080C18] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/8 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-4">Patient Testimonials</p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Stories of Recovery
            </h1>
            <p className="font-inter text-xl text-[#A0AEC0] leading-relaxed">
              Real experiences from patients whose lives have been changed through expert surgical care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="py-12 bg-gradient-to-r from-[#C41E3A] to-[#a01830]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { value: "4.9/5", label: "Average Rating" },
              { value: "5,000+", label: "Happy Patients" },
              { value: "98%", label: "Would Recommend" },
              { value: "10,000+", label: "Surgeries Performed" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-playfair text-4xl font-bold text-white">{s.value}</p>
                <p className="font-inter text-sm text-white/70 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-[#080C18]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-7 flex flex-col gap-4"
              >
                <Stars count={r.rating} />
                <blockquote className="font-inter text-sm text-[#A0AEC0] leading-relaxed flex-1 italic">
                  &ldquo;{r.review}&rdquo;
                </blockquote>
                <div className="border-t border-white/5 pt-4">
                  <p className="font-inter font-semibold text-white text-sm">{r.name}</p>
                  <p className="font-inter text-xs text-[#D4AF37] mt-0.5">{r.treatment}</p>
                  <div className="flex justify-between items-center mt-1">
                    <p className="font-inter text-xs text-[#A0AEC0]">{r.location}</p>
                    <p className="font-inter text-xs text-[#A0AEC0]">{r.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
