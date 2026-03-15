"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, Star, ArrowRight } from "lucide-react";

const REVIEWS = [
  { name: "Ramesh Gupta", loc: "Jaipur", proc: "Bypass Surgery (CABG)", stars: 5, text: "Dr. Sharma performed my bypass surgery with exceptional skill. His calm demeanor and expertise gave our family tremendous confidence. I am fully recovered within 3 months. Truly the best." },
  { name: "Sunita Devi", loc: "Ajmer", proc: "Valve Replacement", stars: 5, text: "My husband needed urgent valve replacement. Dr. Sharma explained everything clearly and the operation was a complete success. The post-operative care was excellent. We are forever grateful." },
  { name: "Mahesh Kumar Joshi", loc: "Kota", proc: "Off-Pump CABG", stars: 5, text: "After being told I needed open heart surgery, I was terrified. Dr. Sharma's experience and compassion put me at ease. The beating heart technique meant faster recovery. Highly recommend." },
  { name: "Priya Sharma", loc: "Bikaner", proc: "Congenital Heart Surgery", stars: 5, text: "My father had a complex congenital condition other doctors called too risky. Dr. Sharma took on the case and performed a miracle. We drove from Bikaner because we trusted no one else." },
  { name: "Anil Verma", loc: "Jodhpur", proc: "Triple Vessel CABG", stars: 5, text: "Triple vessel disease at 58. Dr. Sharma performed off-pump CABG and I was discharged in 6 days. His surgical precision and the team at Eternal Hospital are world-class." },
  { name: "Rajendra Prasad", loc: "Jaipur", proc: "Bypass Surgery", stars: 5, text: "At 72, many doctors hesitated. Dr. Sharma assessed me thoroughly and proceeded with confidence. Four months later I am walking 3 km daily. A truly exceptional surgeon." },
];

export default function TestimonialsSection() {
  return (
    <section
      className="w-full bg-[#080C18] border-t border-white/[0.06]"
      aria-labelledby="testimonials-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="font-inter text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-3"
          >
            Patient Stories
          </motion.p>
          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Lives{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #C41E3A, #D4AF37)' }}>
              Transformed
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-inter text-base text-[#64748B] leading-relaxed"
          >
            Real experiences from patients across Rajasthan who chose Dr. Sharma for cardiac care.
          </motion.p>
        </div>

        {/* Rating banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-12 py-5 px-6 rounded-2xl border border-white/[0.07] max-w-lg mx-auto"
          style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
        >
          <div className="flex items-center gap-3">
            <p className="font-playfair text-4xl font-bold text-white">4.9</p>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" aria-hidden="true" />)}
              </div>
              <p className="font-inter text-xs text-[#64748B]">Average rating</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" aria-hidden="true" />
          <div className="text-center">
            <p className="font-playfair text-2xl font-bold text-white">500+</p>
            <p className="font-inter text-xs text-[#64748B] mt-0.5">Reviews</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/10" aria-hidden="true" />
          <div className="text-center">
            <p className="font-playfair text-2xl font-bold text-white">99%</p>
            <p className="font-inter text-xs text-[#64748B] mt-0.5">Satisfaction</p>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {REVIEWS.map((r, i) => {
            const initials = r.name.split(" ").map((n) => n[0]).join("").slice(0, 2);
            return (
              <li key={i}>
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex flex-col h-full rounded-2xl p-6 border border-white/[0.08] transition-all duration-300 hover:border-white/[0.14]"
                  style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                  aria-label={`Review by ${r.name}`}
                >
                  {/* Quote */}
                  <Quote className="w-7 h-7 mb-4 flex-shrink-0" style={{ color: 'rgba(196,30,58,0.35)' }} aria-hidden="true" />

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4" role="img" aria-label={`${r.stars} out of 5 stars`}>
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" aria-hidden="true" />
                    ))}
                  </div>

                  {/* Review text */}
                  <blockquote className="font-inter text-sm text-[#94A3B8] leading-[1.75] flex-1 mb-6">
                    &ldquo;{r.text}&rdquo;
                  </blockquote>

                  {/* Footer */}
                  <div className="border-t border-white/[0.06] pt-4 flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold font-playfair text-white flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #C41E3A 0%, #D4AF37 100%)' }}
                      aria-hidden="true"
                    >
                      {initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <cite className="not-italic">
                        <p className="font-inter text-sm font-semibold text-white truncate">{r.name}</p>
                        <p className="font-inter text-xs text-[#64748B]">{r.loc}</p>
                      </cite>
                    </div>
                    <span
                      className="font-inter text-xs px-2 py-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: 'rgba(196,30,58,0.1)', color: '#F87171' }}
                    >
                      {r.proc.split("(")[0].trim()}
                    </span>
                  </div>
                </motion.article>
              </li>
            );
          })}
        </ul>

        {/* More reviews link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 font-inter text-sm font-medium text-[#64748B] hover:text-[#94A3B8] transition-colors min-h-[44px] px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] rounded-sm"
          >
            Read all patient reviews <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
