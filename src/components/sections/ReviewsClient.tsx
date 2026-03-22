'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

interface GoogleReview {
  author_name: string
  rating: number
  text: string
  relative_time_description: string
  time: number
  profile_photo_url?: string
}

const GOOGLE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? ''}`

function StarRating({ rating, label }: { rating: number; label?: string }) {
  return (
    <div className="flex gap-1" role="img" aria-label={label ?? `${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map(s => (
        <Star
          key={s}
          className={`w-5 h-5 transition-colors ${rating >= s ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-white/20'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function ReviewsClient() {
  const [reviews, setReviews] = useState<GoogleReview[]>([])
  const [overallRating, setOverallRating] = useState(0)
  const [totalReviews, setTotalReviews] = useState(0)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const perPage = 3
  const totalPages = Math.ceil(reviews.length / perPage)
  const visible = reviews.slice(page * perPage, page * perPage + perPage)

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/api/reviews')
        const data = await res.json()
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews)
          setOverallRating(data.rating)
          setTotalReviews(data.totalReviews)
        }
      } catch {
        // No reviews to show
      } finally {
        setLoading(false)
      }
    }
    fetchReviews()
  }, [])

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
            Google Reviews
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
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-inter text-base sm:text-lg text-[#CBD5E0] max-w-2xl mx-auto leading-relaxed"
          >
            Real reviews from Google Maps by patients of Dr. R.K. Sharma.
          </motion.p>
        </div>
      </section>

      {/* Rating summary — only show if we have data */}
      {overallRating > 0 && (
        <section
          className="py-12 bg-[#0D1120] border-y border-white/10"
          aria-label="Overall rating summary"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div>
              <p className="font-playfair text-7xl font-bold text-white" aria-label={`Average rating: ${overallRating} out of 5`}>
                {overallRating.toFixed(1)}
              </p>
              <StarRating rating={Math.round(overallRating)} label={`Average rating: ${overallRating} out of 5 stars`} />
              <p className="font-inter text-sm text-[#CBD5E0] mt-2">
                Based on {totalReviews.toLocaleString()} Google reviews
              </p>
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
      )}

      {/* Reviews */}
      <section
        className="py-16 sm:py-20 lg:py-24 bg-[#080C18]"
        aria-labelledby="reviews-carousel-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="reviews-carousel-heading" className="sr-only">Patient reviews from Google</h2>

          {loading ? (
            <div className="text-center py-16">
              <p className="font-inter text-[#CBD5E0]">Loading reviews...</p>
            </div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-inter text-lg text-white mb-2">No reviews yet</p>
              <p className="font-inter text-[#CBD5E0] mb-8">Be the first to share your experience with Dr. Sharma on Google.</p>
            </div>
          ) : (
            <>
              <div aria-live="polite" aria-atomic="true" className="sr-only">
                Showing reviews {page * perPage + 1} to {Math.min((page + 1) * perPage, reviews.length)} of {reviews.length}
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
                  {visible.map((t, i) => {
                    const initials = t.author_name.split(' ').map(n => n[0]).join('').slice(0, 2)
                    return (
                      <li key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          {t.profile_photo_url ? (
                            <img
                              src={t.profile_photo_url}
                              alt=""
                              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                              aria-hidden="true"
                            />
                          ) : (
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold font-playfair text-white flex-shrink-0"
                              style={{ background: 'linear-gradient(135deg, #C41E3A 0%, #D4AF37 100%)' }}
                              aria-hidden="true"
                            >
                              {initials}
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="font-inter text-sm font-semibold text-white truncate">{t.author_name}</p>
                            <p className="font-inter text-xs text-[#CBD5E0]">{t.relative_time_description}</p>
                          </div>
                          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-label="Google review" role="img">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                          </svg>
                        </div>
                        <StarRating rating={t.rating} label={`${t.author_name} rated ${t.rating} out of 5 stars`} />
                        <blockquote className="font-inter text-sm text-[#CBD5E0] leading-relaxed flex-1">
                          &ldquo;{t.text}&rdquo;
                        </blockquote>
                      </li>
                    )
                  })}
                </motion.ul>
              </AnimatePresence>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav aria-label="Review pages" className="flex items-center justify-center gap-4 mb-12">
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
              )}
            </>
          )}

          {/* Leave a Google Review CTA */}
          <div className="text-center">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 font-inter font-semibold text-base px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18] min-h-[52px] shadow-lg"
              style={{ backgroundColor: '#ffffff', color: '#1a1a1a' }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Leave a Review on Google
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
            <p className="font-inter text-sm text-[#CBD5E0] mt-4">
              Your feedback helps other patients make informed decisions.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
