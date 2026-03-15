"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Heart, Clock } from "lucide-react";

const STATS = [
  { value: 7000, suffix: "+", label: "Open Heart Surgeries", icon: Heart, color: "#C41E3A" },
  { value: 44, suffix: "+", label: "Years Experience", icon: Clock, color: "#D4AF37" },
  { value: 5000, suffix: "+", label: "CABG Surgeries", icon: Award, color: "#60A5FA" },
  { value: 2000, suffix: "+", label: "Valve Surgeries", icon: Users, color: "#34D399" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 80;
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
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString("en-IN")}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D1120 0%, #080C18 50%, #0D1120 100%)" }}
      aria-labelledby="stats-heading"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[#C41E3A]/8 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#D4AF37]/8 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="stats-heading" className="sr-only">Dr. Sharma's surgical statistics</h2>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => {
            const { icon: Icon } = stat;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="relative rounded-2xl overflow-hidden p-6 sm:p-8 text-center group hover:scale-[1.02] transition-transform duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${stat.color}15 0%, transparent 70%)` }}
                    aria-hidden="true"
                  />
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 relative z-10"
                    style={{ background: `${stat.color}20`, border: `1px solid ${stat.color}40` }}
                    aria-hidden="true"
                  >
                    <Icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                  {/* Number */}
                  <dd className="relative z-10 font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 leading-none" style={{ color: stat.color }}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </dd>
                  {/* Label */}
                  <dt className="relative z-10 font-inter text-sm font-medium text-[#94A3B8] leading-tight">
                    {stat.label}
                  </dt>
                </div>
              </motion.div>
            );
          })}
        </dl>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {[
            "Director, CTVS — Eternal Hospital Jaipur",
            "MCh Thoracic Surgery, CMC Vellore",
            "Trained at Escorts Heart Institute",
            "International Fellowship — Uppsala, Sweden",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" aria-hidden="true" />
              <span className="font-inter text-xs text-[#64748B]">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
