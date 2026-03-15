'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

const posts = [
  {
    slug: 'what-is-bypass-surgery',
    title: 'What is Bypass Surgery (CABG)? A Complete Guide',
    excerpt: 'Coronary artery bypass grafting (CABG) is one of the most common open heart procedures. Learn what it involves, who needs it, and what to expect — explained by Dr. R.K. Sharma, who has performed over 5,000 CABG surgeries.',
    category: 'Surgery Guide',
    date: 'January 15, 2025',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'signs-you-need-a-cardiac-surgeon',
    title: '10 Signs You Need to See a Cardiac Surgeon',
    excerpt: 'Many people delay seeking cardiac care until a crisis occurs. Dr. Sharma outlines the warning signs that indicate you should consult a cardiac surgeon — symptoms that should never be ignored.',
    category: 'Patient Education',
    date: 'January 8, 2025',
    readTime: '6 min read',
    featured: true,
  },
  {
    slug: 'recovery-after-open-heart-surgery',
    title: 'Recovery After Open Heart Surgery: What to Expect',
    excerpt: 'The first weeks after open heart surgery can feel overwhelming. This comprehensive guide walks through the recovery timeline, activity restrictions, diet, medications, and when to call your doctor.',
    category: 'Recovery',
    date: 'December 22, 2024',
    readTime: '10 min read',
    featured: true,
  },
  {
    slug: 'beating-heart-cabg-vs-conventional',
    title: 'Off-Pump (Beating Heart) CABG vs. Conventional Bypass Surgery',
    excerpt: 'Dr. Sharma performs 75% of his CABG surgeries on a beating heart. Understand the key differences between off-pump and on-pump bypass surgery, and why the beating heart technique may offer significant advantages.',
    category: 'Surgery Guide',
    date: 'December 10, 2024',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'valve-repair-vs-replacement',
    title: 'Valve Repair vs. Valve Replacement: Which is Better?',
    excerpt: 'When it comes to valvular heart disease, the choice between repair and replacement is critical. Learn about the advantages of each approach and how Dr. Sharma approaches this decision for every patient.',
    category: 'Surgery Guide',
    date: 'November 28, 2024',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'heart-healthy-diet-india',
    title: 'Heart-Healthy Diet for Indians: Foods That Protect Your Heart',
    excerpt: 'Diet plays a crucial role in preventing and managing heart disease. Dr. Sharma shares evidence-based dietary recommendations tailored for Indian food habits — including which traditional foods are actually good for your heart.',
    category: 'Prevention',
    date: 'November 15, 2024',
    readTime: '5 min read',
    featured: false,
  },
]

const categories = ['All', 'Surgery Guide', 'Patient Education', 'Recovery', 'Prevention']

const categoryColors: Record<string, string> = {
  'Surgery Guide': '#C41E3A',
  'Patient Education': '#D4AF37',
  'Recovery': '#34D399',
  'Prevention': '#60A5FA',
}

export function BlogClient() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 sm:pb-20 bg-[#080C18]"
        aria-labelledby="blog-hero-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#C41E3A]/5 via-transparent to-[#D4AF37]/5" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#C41E3A]/10 border border-[#C41E3A]/30 rounded-full px-4 py-2 text-sm text-[#F87171] mb-6 font-inter font-medium"
            role="text"
          >
            Heart Health Articles
          </motion.div>
          <motion.h1
            id="blog-hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]"
          >
            Knowledge That <span className="text-[#C41E3A]">Saves Lives</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-inter text-base sm:text-lg md:text-xl text-[#CBD5E0] max-w-2xl mx-auto leading-relaxed"
          >
            Expert insights on cardiac surgery, heart health, and recovery — from Dr. R.K. Sharma&apos;s 44+ years of experience.
          </motion.p>
        </div>
      </section>

      {/* Category filter */}
      <section
        className="py-6 sm:py-8 bg-[#0D1120] border-y border-white/10 sticky top-[64px] md:top-[80px] z-20"
        aria-label="Filter blog posts by category"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex gap-3 flex-wrap justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`font-inter text-sm px-5 py-2 rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] min-h-[44px] ${
                activeCategory === cat
                  ? 'bg-[#C41E3A] border-[#C41E3A] text-white'
                  : 'border-white/20 text-[#CBD5E0] hover:border-white/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section
        className="py-16 sm:py-20 lg:py-24 bg-[#080C18]"
        aria-labelledby="blog-posts-heading"
        aria-live="polite"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="blog-posts-heading" className="sr-only">
            {activeCategory === 'All' ? 'All blog posts' : `${activeCategory} posts`}
          </h2>
          {filtered.length === 0 ? (
            <p className="text-center font-inter text-[#CBD5E0] py-16">No posts found in this category.</p>
          ) : (
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" role="list">
              {filtered.map((post, i) => (
                <motion.li
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <article
                    className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 group flex flex-col h-full"
                    aria-labelledby={`post-title-${post.slug}`}
                  >
                    {/* Decorative header */}
                    <div
                      className="h-48 bg-gradient-to-br from-[#C41E3A]/20 to-[#D4AF37]/10 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                        <span className="font-playfair text-2xl text-white/30">{post.title[0]}</span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="inline-flex items-center gap-1 font-inter text-xs px-2.5 py-1 rounded-full font-medium"
                          style={{ backgroundColor: `${categoryColors[post.category]}15`, color: categoryColors[post.category] }}
                        >
                          <Tag className="w-3 h-3" aria-hidden="true" />
                          {post.category}
                        </span>
                      </div>

                      <h3
                        id={`post-title-${post.slug}`}
                        className="font-playfair text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#C41E3A] transition-colors leading-snug"
                      >
                        {post.title}
                      </h3>

                      <p className="font-inter text-sm text-[#CBD5E0] leading-relaxed mb-4 flex-1">{post.excerpt}</p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                        <div className="flex items-center gap-3 text-xs text-[#CBD5E0] font-inter">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" aria-hidden="true" />
                            <time dateTime={post.date}>{post.date}</time>
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" aria-hidden="true" />
                            <span>{post.readTime}</span>
                          </span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="flex items-center gap-1 text-[#C41E3A] font-inter text-xs font-semibold hover:gap-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] rounded-sm min-h-[44px] px-1"
                          aria-label={`Read full article: ${post.title}`}
                        >
                          Read <ArrowRight className="w-3 h-3" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}
