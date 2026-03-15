"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 7000, suffix: "+", label: "Open Heart Surgeries", description: "Including CABG, valve & aortic procedures" },
  { value: 44, suffix: "+", label: "Years of Experience", description: "Four decades of cardiac surgical mastery" },
  { value: 5000, suffix: "+", label: "CABG Surgeries", description: "75% performed on beating heart" },
  { value: 2000, suffix: "+", label: "Valve Surgeries", description: "Mitral, aortic, tricuspid & more" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <strong ref={ref} className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C41E3A] to-[#D4AF37] block">
      {count.toLocaleString("en-IN")}
      {suffix}
    </strong>
  );
}

export default function StatsSection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-[#0D1120] relative overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#C41E3A]/5 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading — visually hidden but accessible */}
        <h2 id="stats-heading" className="sr-only">Key statistics about Dr. Ravindra Kumar Sharma</h2>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm text-center hover:border-white/20 transition-all duration-300"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <dt className="font-inter text-sm sm:text-base font-semibold text-white mt-2">{stat.label}</dt>
              <dd className="font-inter text-xs sm:text-sm text-[#CBD5E0] mt-1 hidden sm:block leading-relaxed">{stat.description}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
