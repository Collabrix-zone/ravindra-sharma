"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";

const POSTS = [
  {
    slug: "laparoscopic-surgery-benefits",
    category: "Patient Education",
    title: "5 Reasons Laparoscopic Surgery May Be Right for You",
    excerpt: "Minimally invasive surgery has transformed modern surgical care. Learn about the key advantages — from faster recovery to reduced infection risk — that make laparoscopy the preferred choice for many procedures.",
    date: "10 February 2025",
    readTime: "5 min read",
  },
  {
    slug: "colon-cancer-early-detection",
    category: "Cancer Awareness",
    title: "Early Detection Saves Lives: Colon Cancer Screening Guide",
    excerpt: "Colorectal cancer is highly treatable when caught early. Dr. Sharma explains who should be screened, what to expect during a colonoscopy, and the warning signs you should never ignore.",
    date: "28 January 2025",
    readTime: "7 min read",
  },
  {
    slug: "hernia-myths-facts",
    category: "Myths & Facts",
    title: "Hernia Myths Debunked: What You Really Need to Know",
    excerpt: "\"I can live with my hernia\" — true or false? Dr. Sharma separates common misconceptions from medical reality and explains when a hernia requires surgical intervention.",
    date: "15 January 2025",
    readTime: "4 min read",
  },
  {
    slug: "recovery-after-abdominal-surgery",
    category: "Recovery Tips",
    title: "Recovery After Abdominal Surgery: A Practical Guide",
    excerpt: "What to eat, how to move, when to return to work — a comprehensive guide to healing well after abdominal surgery, written from over two decades of post-operative care experience.",
    date: "2 January 2025",
    readTime: "6 min read",
  },
  {
    slug: "when-to-see-a-surgeon",
    category: "General Health",
    title: "7 Symptoms That Mean You Should See a Surgeon",
    excerpt: "Persistent abdominal pain, unexplained weight loss, blood in stool — some symptoms demand urgent surgical evaluation. Don&apos;t wait; here is what to watch for.",
    date: "18 December 2024",
    readTime: "5 min read",
  },
  {
    slug: "thyroid-surgery-what-to-expect",
    category: "Patient Education",
    title: "Thyroid Surgery: What to Expect Before, During, and After",
    excerpt: "A thyroid diagnosis can feel overwhelming. This detailed guide walks you through every stage of the surgical process so you can approach your procedure with confidence.",
    date: "5 December 2024",
    readTime: "8 min read",
  },
];

const CATEGORIES = ["All", "Patient Education", "Cancer Awareness", "Recovery Tips", "Myths & Facts", "General Health"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#080C18] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C41E3A]/8 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-4">Health Insights</p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Medical Blog
            </h1>
            <p className="font-inter text-xl text-[#A0AEC0] leading-relaxed">
              Expert surgical insights, patient education, and health guidance from Dr. Ravindra Sharma.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-[#080C18] border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="font-inter text-sm px-5 py-2 rounded-full border border-white/10 text-[#A0AEC0] hover:border-[#C41E3A] hover:text-white transition-all first:bg-[#C41E3A] first:text-white first:border-[#C41E3A]"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-[#080C18]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group rounded-2xl border border-white/5 bg-white/[0.03] overflow-hidden hover:border-[#C41E3A]/30 transition-colors"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#C41E3A]/20 to-[#D4AF37]/10 flex items-center justify-center">
                  <span className="font-playfair text-5xl text-white/20">✦</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-inter text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">{post.category}</span>
                    <span className="font-inter text-xs text-[#A0AEC0]">{post.readTime}</span>
                  </div>
                  <h2 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="font-inter text-sm text-[#A0AEC0] leading-relaxed line-clamp-3" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-inter text-xs text-[#A0AEC0]">{post.date}</span>
                    <span className="font-inter text-sm font-medium text-[#C41E3A] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
