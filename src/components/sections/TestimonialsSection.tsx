"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Ramesh Gupta",
    treatment: "CABG (Bypass Surgery)",
    rating: 5,
    review:
      "Dr. Sharma performed my bypass surgery with exceptional skill. His calm demeanour and expertise gave our family tremendous confidence. I am fully recovered and back to normal life within 3 months. Truly the best cardiac surgeon in Jaipur.",
    location: "Jaipur",
  },
  {
    name: "Sunita Devi",
    treatment: "Valve Replacement",
    rating: 5,
    review:
      "My husband needed urgent valve replacement surgery. Dr. Sharma explained everything clearly and the operation was a complete success. The post-operative care under his guidance was excellent. We are forever grateful.",
    location: "Ajmer",
  },
  {
    name: "Mahesh Kumar Joshi",
    treatment: "Off-Pump CABG",
    rating: 5,
    review:
      "After being told I needed open heart surgery, I was terrified. Dr. R.K. Sharma's experience and compassionate approach put me at ease. The beating heart technique he used meant faster recovery. Highly recommend him.",
    location: "Kota",
  },
  {
    name: "Priya Sharma",
    treatment: "Congenital Heart Surgery",
    rating: 5,
    review:
      "My father had a complex congenital heart condition that several doctors said was too risky to operate on. Dr. Sharma took on the case and performed a miracle. We drove from Bikaner because we trusted no one else.",
    location: "Bikaner",
  },
  {
    name: "Anil Verma",
    treatment: "Triple Vessel CABG",
    rating: 5,
    review:
      "Triple vessel disease at 58 years old. Dr. Sharma performed off-pump CABG and I was discharged in 6 days. His surgical precision and the team at Eternal Hospital are world-class. Cannot thank him enough.",
    location: "Jodhpur",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-[#D4AF37]" : "text-white/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-[#0D1120] relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C41E3A]/5 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-3"
          >
            Patient Stories
          </motion.p>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            Voices of Recovery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-inter text-base sm:text-lg text-[#CBD5E0] max-w-2xl mx-auto"
          >
            Real experiences from patients whose lives have been transformed through expert cardiac surgical care.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Testimonial card */}
          <div
            className="relative min-h-[320px] sm:min-h-[280px]"
            role="region"
            aria-label="Testimonials carousel"
            aria-live="polite"
          >
            <AnimatePresence mode="wait">
              <motion.article
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 text-center backdrop-blur-sm"
                aria-label={`Testimonial from ${TESTIMONIALS[active].name}`}
              >
                <StarRating rating={TESTIMONIALS[active].rating} />
                <blockquote className="mt-6 font-playfair text-lg sm:text-xl text-white leading-relaxed italic">
                  &ldquo;{TESTIMONIALS[active].review}&rdquo;
                </blockquote>
                <footer className="mt-8">
                  <cite className="not-italic">
                    <p className="font-inter font-semibold text-white">{TESTIMONIALS[active].name}</p>
                    <p className="font-inter text-sm text-[#D4AF37] mt-1">{TESTIMONIALS[active].treatment}</p>
                    <p className="font-inter text-xs text-[#CBD5E0] mt-1">{TESTIMONIALS[active].location}</p>
                  </cite>
                </footer>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C41E3A] hover:text-[#C41E3A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1120] min-w-[44px] min-h-[44px]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation dots">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to testimonial ${i + 1}: ${t.name}`}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] ${
                    i === active ? "w-8 bg-[#C41E3A]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C41E3A] hover:text-[#C41E3A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1120] min-w-[44px] min-h-[44px]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
