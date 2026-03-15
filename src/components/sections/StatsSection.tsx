"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Activity, Clock, Award, Users } from "lucide-react";

const STATS = [
  { value: 7000, suffix: "+", label: "Open Heart Surgeries", sub: "Incl. CABG, valve & aortic", Icon: Activity, color: "#C41E3A" },
  { value: 44, suffix: "+", label: "Years Experience", sub: "Four decades of mastery", Icon: Clock, color: "#D4AF37" },
  { value: 5000, suffix: "+", label: "CABG Surgeries", sub: "75% beating heart technique", Icon: Award, color: "#60A5FA" },
  { value: 2000, suffix: "+", label: "Valve Surgeries", sub: "Mitral, aortic, tricuspid", Icon: Users, color: "#34D399" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const inc = value / steps;
    let cur = 0;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= value) { setCount(value); clearInterval(t); }
      else setCount(Math.floor(cur));
    }, 2000 / steps);
    return () => clearInterval(t);
  }, [inView, value]);

  return <span ref={ref} className="tabular-nums">{count.toLocaleString("en-IN")}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section
      className="w-full bg-[#0D1120] border-t border-white/[0.06]"
      aria-labelledby="stats-section-heading"
    >
      <h2 id="stats-section-heading" className="sr-only">Dr. Sharma&apos;s statistics</h2>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Stats grid */}
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((s, i) => {
            const { Icon } = s;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/[0.07]"
                style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ backgroundColor: `${s.color}18`, border: `1px solid ${s.color}35` }}
                  aria-hidden="true"
                >
                  <Icon className="w-5 h-5" style={{ color: s.color }} aria-hidden="true" />
                </div>
                <dd className="font-playfair text-3xl sm:text-4xl font-bold mb-2" style={{ color: s.color }}>
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="font-inter text-sm font-semibold text-white mb-1">{s.label}</dt>
                <p className="font-inter text-xs text-[#64748B] leading-snug hidden sm:block">{s.sub}</p>
              </motion.div>
            );
          })}
        </dl>

        {/* Credentials strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            "Director, CTVS — Eternal Hospital Jaipur",
            "MCh Thoracic Surgery, CMC Vellore",
            "Trained under Dr. N. Trehan",
            "International Fellowship — Uppsala, Sweden",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" aria-hidden="true" />
              <span className="font-inter text-xs text-[#64748B]">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
