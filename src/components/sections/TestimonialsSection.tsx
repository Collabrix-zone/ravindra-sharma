"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, Star, ArrowRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Ramesh Gupta",
    location: "Jaipur",
    treatment: "Bypass Surgery (CABG)",
    rating: 5,
    review: "Dr. Sharma performed my bypass surgery with exceptional skill. His calm demeanour and expertise gave our family tremendous confidence. I am fully recovered within 3 months.",
  },
  {
    name: "Sunita Devi",
    location: "Ajmer",
    treatment: "Valve Replacement",
    rating: 5,
    review: "My husband needed urgent valve replacement. Dr. Sharma explained everything clearly and the operation was a complete success. The post-operative care was excellent.",
  },
  {
    name: "Mahesh Kumar Joshi",
    location: "Kota",
    treatment: "Off-Pump CABG",
    rating: 5,
    review: "After being told I needed open heart surgery, I was terrified. Dr. Sharma's experience and compassion put me at ease. The beating heart technique meant faster recovery.",
  },
  {
    name: "Priya Sharma",
    location: "Bikaner",
    treatment: "Congenital Heart Surgery",
    rating: 5,
    review: "My father had a complex congenital condition other doctors said was too risky. Dr. Sharma took on the case and performed a miracle. We drove from Bikaner for him.",
  },
  {
    name: "Anil Verma",
    location: "Jodhpur",
    treatment: "Triple Vessel CABG",
    rating: 5,
    review: "Triple vessel disease at 58. Dr. Sharma performed off-pump CABG and I was discharged in 6 days. His surgical precision and the team at Eternal Hospital are world-class.",
  },
  {
    name: "Rajendra Prasad",
    location: "Jaipur",
    treatment: "Bypass Surgery",
    rating: 5,
    review: "At 72, many doctors were hesitant. Dr. Sharma assessed me thoroughly and proceeded with confidence. Four months later I am walking 3 km daily. Truly exceptional.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "fill-[#D4AF37] text-[#D4AF37]" : "text-white/15"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function InitialBadge({ name }: { name: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-playfair text-white flex-shrink-0"
      style={{ background: "linear-gradient(135deg, #C41E3A 0%, #D4AF37 100%)" }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-[#080C18] relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#C41E3A]/5 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-inter text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-3"
          >
            Patient Stories
          </motion.p>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Lives{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C41E3A] to-[#D4AF37]">
              Transformed
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-inter text-base text-[#64748B] leading-relaxed"
          >
            Real experiences from patients across Rajasthan who chose Dr. Sharma for their cardiac care.
          </motion.p>
        </div>

        {/* Rating summary banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-12 py-5 px-6 rounded-2xl mx-auto"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            maxWidth: "600px",
          }}
        >
          <div className="flex items-center gap-3">
            <p className="font-playfair text-4xl font-bold text-white">4.9</p>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" aria-hidden="true" />)}
              </div>
              <p className="font-inter text-xs text-[#64748B]">Average rating</p>
            </div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" aria-hidden="true" />
          <div className="text-center">
            <p className="font-playfair text-2xl font-bold text-white">500+</p>
            <p className="font-inter text-xs text-[#64748B] mt-0.5">Happy patients</p>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" aria-hidden="true" />
          <div className="text-center">
            <p className="font-playfair text-2xl font-bold text-white">99%</p>
            <p className="font-inter text-xs text-[#64748B] mt-0.5">Satisfaction rate</p>
          </div>
        </motion.div>

        {/* Testimonials grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
          {TESTIMONIALS.map((t, i) => (
            <li key={i}>
              <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex flex-col h-full rounded-2xl p-6 transition-all duration-300 hover:border-white/15"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                aria-label={`Review by ${t.name} from ${t.location}`}
              >
                {/* Quote icon */}
                <Quote
                  className="w-8 h-8 mb-4 flex-shrink-0"
                  style={{ color: "rgba(196,30,58,0.4)" }}
                  aria-hidden="true"
                />

                {/* Review text */}
                <blockquote className="font-inter text-sm text-[#94A3B8] leading-[1.75] flex-1 mb-5">
                  &ldquo;{t.review}&rdquo;
                </blockquote>

                {/* Divider */}
                <div className="border-t border-white/[0.06] pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <InitialBadge name={t.name} />
                    <div className="flex-1 min-w-0">
                      <cite className="not-italic">
                        <p className="font-inter text-sm font-semibold text-white truncate">{t.name}</p>
                        <p className="font-inter text-xs text-[#64748B]">{t.location}</p>
                      </cite>
                    </div>
                    <StarRating rating={t.rating} />
                  </div>
                  <span
                    className="inline-block font-inter text-xs px-2.5 py-1 rounded-full mt-1"
                    style={{ background: "rgba(196,30,58,0.1)", color: "#F87171" }}
                  >
                    {t.treatment}
                  </span>
                </div>
              </motion.article>
            </li>
          ))}
        </ul>

        {/* CTA link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-[#94A3B8] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] rounded-sm min-h-[44px] px-2"
          >
            Read all patient reviews <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
