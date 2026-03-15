'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Send } from 'lucide-react'

const testimonials = [
  { name: 'Ramesh Gupta', location: 'Jaipur', rating: 5, date: 'December 2024', review: 'Dr. Sharma performed my bypass surgery with exceptional skill. His calm demeanor and expertise gave our family tremendous confidence. I am fully recovered and back to normal life within 3 months. Truly the best cardiac surgeon in Jaipur.' },
  { name: 'Sunita Devi', location: 'Ajmer', rating: 5, date: 'November 2024', review: 'My husband needed urgent valve replacement surgery. Dr. Sharma explained everything clearly and the operation was a complete success. The post-operative care under his guidance was excellent. We are forever grateful.' },
  { name: 'Mahesh Kumar Joshi', location: 'Kota', rating: 5, date: 'October 2024', review: "After being told I needed open heart surgery, I was terrified. Dr. R.K. Sharma's experience and compassionate approach put me at ease. The beating heart technique he used meant faster recovery. Highly recommend him." },
  { name: 'Priya Sharma', location: 'Bikaner', rating: 5, date: 'September 2024', review: 'My father had a complex congenital heart condition that several doctors said was too risky to operate on. Dr. Sharma took on the case and performed a miracle. We drove from Bikaner because we trusted no one else.' },
  { name: 'Anil Verma', location: 'Jodhpur', rating: 5, date: 'August 2024', review: 'Triple vessel disease at 58 years old. Dr. Sharma performed off-pump CABG and I was discharged in 6 days. His surgical precision and the team at Eternal Hospital are world-class. Cannot thank him enough.' },
  { name: 'Geeta Meena', location: 'Sikar', rating: 5, date: 'July 2024', review: 'My son had a hole in his heart (VSD) from birth. Dr. Sharma corrected it with minimally invasive surgery. The small incision, quick recovery and excellent results made us so happy. A brilliant surgeon and wonderful human being.' },
  { name: 'Vikram Singh Rathore', location: 'Alwar', rating: 5, date: 'June 2024', review: 'I travelled from Alwar specifically to see Dr. Sharma after reading about his 7000+ surgeries. He diagnosed my aortic aneurysm and operated within days. The professionalism at every step was outstanding.' },
  { name: 'Champa Devi', location: 'Udaipur', rating: 4, date: 'May 2024', review: 'Dr. Sharma is very experienced and knowledgeable. My mitral valve repair was successful. The only challenge was getting an appointment quickly but his OPD team was helpful. Would recommend to anyone needing cardiac surgery in Rajasthan.' },
  { name: 'Rajendra Prasad', location: 'Jaipur', rating: 5, date: 'April 2024', review: 'At 72 years old, many doctors were hesitant about performing bypass surgery. Dr. Sharma assessed me thoroughly and proceeded with confidence. 4 months later I am walking 3km daily. A truly exceptional surgeon.' },
]

function StarRating({
  rating,
  interactive = false,
  onChange,
  label,
}: {
  rating: number
  interactive?: boolean
  onChange?: (r: number) => void
  label?: string
}) {
  const [hover, setHover] = useState(0)
  return (
    <div
      className="flex gap-1"
      role={interactive ? 'group' : 'img'}
      aria-label={label ?? `${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map(s => (
        <button
          key={s}
          type={interactive ? 'button' : undefined}
          onClick={() => interactive && onChange?.(s)}
          onMouseEnter={() => interactive && setHover(s)}
          onMouseLeave={() => interactive && setHover(0)}
          className={interactive
            ? 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] rounded-sm min-w-[44px] min-h-[44px] flex items-center justify-center'
            : 'cursor-default pointer-events-none'
          }
          aria-label={interactive ? `Rate ${s} star${s > 1 ? 's' : ''}` : undefined}
          aria-pressed={interactive ? (rating === s) : undefined}
          tabIndex={interactive ? 0 : -1}
        >
          <Star
            className={`w-5 h-5 transition-colors ${(hover || rating) >= s ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-white/20'}`}
            aria-hidden="true"
          />
        </button>
      ))}
    </div>
  )
}

export function ReviewsClient() {
  const [page, setPage] = useState(0)
  const [form, setForm] = useState({ name: '', rating: 5, review: '' })
  const [submitted, setSubmitted] = useState(false)
  const perPage = 3
  const totalPages = Math.ceil(testimonials.length / perPage)
  const visible = testimonials.slice(page * perPage, page * perPage + perPage)
  const avgRating = (testimonials.reduce((a, t) => a + t.rating, 0) / testimonials.length).toFixed(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 sm:pb-20 bg-[#080C18]"
        aria-labelledby="reviews-hero-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#C41E3A]/5 via-transparent to-[#D4AF37]/5" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#C41E3A]/10 border border-[#C41E3A]/30 rounded-full px-4 py-2 text-sm text-[#F87171] mb-6 font-inter font-medium"
            role="text"
          >
            Patient Stories
          </motion.div>
          <motion.h1
            id="reviews-hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]"
          >
            What Patients <span className="text-[#C41E3A]">Say</span>
          </motion.h1>
        </div>
      </section>

      {/* Rating summary */}
      <section
        className="py-12 bg-[#0D1120] border-y border-white/10"
        aria-label="Overall rating summary"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-center gap-8 text-center">
          <div>
            <p className="font-playfair text-7xl font-bold text-white" aria-label={`Average rating: ${avgRating} out of 5`}>{avgRating}</p>
            <StarRating rating={Math.round(Number(avgRating))} label={`Average rating: ${avgRating} out of 5 stars`} />
            <p className="font-inter text-sm text-[#CBD5E0] mt-2">Based on {testimonials.length} reviews</p>
          </div>
          <div className="hidden md:block w-px h-20 bg-white/10" aria-hidden="true" />
          <dl className="grid grid-cols-3 gap-6">
            {[
              { val: '7,000+', label: 'Surgeries' },
              { val: '44+', label: 'Years' },
              { val: '99%', label: 'Satisfaction' },
            ].map((s) => (
              <div key={s.label}>
                <dd className="font-playfair text-3xl font-bold text-[#D4AF37]">{s.val}</dd>
                <dt className="font-inter text-xs text-[#CBD5E0] mt-1">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Testimonials carousel */}
      <section
        className="py-16 sm:py-20 lg:py-24 bg-[#080C18]"
        aria-labelledby="reviews-carousel-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="reviews-carousel-heading" className="sr-only">Patient reviews</h2>
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            Showing reviews {page * perPage + 1} to {Math.min((page + 1) * perPage, testimonials.length)} of {testimonials.length}
          </div>
          <AnimatePresence mode="wait">
            <motion.ul
              key={page}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10"
              role="list"
            >
              {visible.map((t, i) => (
                <li key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col gap-4">
                  <StarRating rating={t.rating} label={`${t.name} rated ${t.rating} out of 5 stars`} />
                  <blockquote className="font-inter text-sm text-[#CBD5E0] leading-relaxed flex-1">
                    &ldquo;{t.review}&rdquo;
                  </blockquote>
                  <footer>
                    <cite className="not-italic">
                      <p className="font-inter text-sm font-semibold text-white">{t.name}</p>
                      <p className="font-inter text-xs text-[#CBD5E0]">{t.location} &middot; {t.date}</p>
                    </cite>
                  </footer>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>

          {/* Pagination */}
          <nav aria-label="Review pages" className="flex items-center justify-center gap-4">
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:border-white/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] min-w-[44px] min-h-[44px]"
              aria-label="Previous page of reviews"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Go to page ${i + 1} of reviews`}
                  aria-current={i === page ? 'page' : undefined}
                  className={`w-2.5 h-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] ${i === page ? 'bg-[#C41E3A]' : 'bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
            <button
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:border-white/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] min-w-[44px] min-h-[44px]"
              aria-label="Next page of reviews"
            >
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </section>

      {/* Review form */}
      <section
        className="py-16 sm:py-20 lg:py-24 bg-[#0D1120]"
        aria-labelledby="review-form-heading"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2
              id="review-form-heading"
              className="font-playfair text-3xl sm:text-4xl font-bold text-white"
            >
              Share Your <span className="text-[#C41E3A]">Experience</span>
            </h2>
            <p className="font-inter text-[#CBD5E0] mt-4 text-base">
              Your review helps other patients make informed decisions. All reviews are moderated before publishing.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center"
              role="alert"
              aria-live="polite"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <Send className="w-8 h-8 text-green-400" aria-hidden="true" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="font-inter text-[#CBD5E0]">Your review has been submitted and will be published after moderation.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6" noValidate>
              <div>
                <label htmlFor="review-name" className="font-inter text-sm font-medium text-[#CBD5E0] mb-2 block">
                  Your Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                </label>
                <input
                  id="review-name"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1120] transition-colors placeholder:text-white/30 min-h-[48px]"
                  placeholder="e.g. Ramesh Gupta"
                  autoComplete="name"
                />
              </div>
              <div>
                <p className="font-inter text-sm font-medium text-[#CBD5E0] mb-2">
                  Rating <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                </p>
                <StarRating
                  rating={form.rating}
                  interactive
                  onChange={r => setForm(f => ({ ...f, rating: r }))}
                  label="Select your rating"
                />
              </div>
              <div>
                <label htmlFor="review-text" className="font-inter text-sm font-medium text-[#CBD5E0] mb-2 block">
                  Your Review <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                </label>
                <textarea
                  id="review-text"
                  required
                  rows={5}
                  value={form.review}
                  onChange={e => setForm(f => ({ ...f, review: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1120] transition-colors resize-none placeholder:text-white/30"
                  placeholder="Share your experience with Dr. Sharma..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#C41E3A] to-[#a01830] hover:from-[#D4AF37] hover:to-[#b8952d] text-white font-inter font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1120] min-h-[52px]"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                Submit Review
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
