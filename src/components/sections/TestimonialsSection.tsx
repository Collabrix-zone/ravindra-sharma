"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const TESTIMONIALS = [
  {
    name: "Priya Mehta",
    treatment: "Laparoscopic Cholecystectomy",
    rating: 5,
    review:
      "Dr. Sharma's expertise and calm demeanour put me completely at ease before surgery. My recovery was remarkably quick. I'm back to normal life within 10 days. Truly grateful.",
    location: "Mumbai",
  },
  {
    name: "Ramesh Gupta",
    treatment: "Colon Cancer Surgery",
    rating: 5,
    review:
      "After my cancer diagnosis, I was terrified. Dr. Sharma explained everything patiently, performed a complex surgery flawlessly, and his team's care during recovery was exceptional.",
    location: "Delhi",
  },
  {
    name: "Sunita Verma",
    treatment: "Hernia Repair (Laparoscopic)",
    rating: 5,
    review:
      "I had been suffering from hernia for 2 years before meeting Dr. Sharma. The minimally invasive procedure meant I had almost no pain and was discharged in just one day. Outstanding!",
    location: "Jaipur",
  },
  {
    name: "Arjun Kapoor",
    treatment: "Emergency Appendectomy",
    rating: 5,
    review:
      "I came in at 2 AM with severe pain. Dr. Sharma operated immediately and saved me from complications. The entire team was professional and reassuring throughout.",
    location: "Pune",
  },
  {
    name: "Kavitha Rao",
    treatment: "Thyroid Surgery",
    rating: 5,
    review:
      "Dr. Sharma was meticulous, thorough, and incredibly kind. He addressed all my worries pre-surgery and the outcome was perfect. The scar is minimal and healing beautifully.",
    location: "Hyderabad",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-[#D4AF37]" : "text-white/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
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
    <section className="py-24 lg:py-32 bg-[#050810] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C41E3A]/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="Patient Stories"
          title="Voices of Recovery"
          subtitle="Real experiences from patients whose lives have been transformed through expert surgical care."
          centered
          className="mb-16"
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 text-center"
              >
                <StarRating rating={TESTIMONIALS[active].rating} />
                <blockquote className="mt-6 font-playfair text-xl text-white leading-relaxed italic">
                  &ldquo;{TESTIMONIALS[active].review}&rdquo;
                </blockquote>
                <div className="mt-8">
                  <p className="font-inter font-semibold text-white">{TESTIMONIALS[active].name}</p>
                  <p className="font-inter text-sm text-[#D4AF37] mt-1">{TESTIMONIALS[active].treatment}</p>
                  <p className="font-inter text-xs text-[#A0AEC0] mt-1">{TESTIMONIALS[active].location}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C41E3A] hover:text-[#C41E3A] transition-colors"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-[#C41E3A]" : "w-2 bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#C41E3A] hover:text-[#C41E3A] transition-colors"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
