"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, Star, ArrowRight, ExternalLink } from "lucide-react";

interface GoogleReview {
  author_name: string
  rating: number
  text: string
  relative_time_description: string
  profile_photo_url?: string
}

const GOOGLE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? ''}`;

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [overallRating, setOverallRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/api/reviews');
        const data = await res.json();
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
          setOverallRating(data.rating);
          setTotalReviews(data.totalReviews);
        }
      } catch {
        // No reviews to show
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  // Don't render the section if no reviews
  if (!loading && reviews.length === 0) return null;

  const displayReviews = reviews.slice(0, 6);

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
            Google Reviews
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
            Real reviews from Google Maps by patients across Rajasthan who chose Dr. Sharma for cardiac care.
          </motion.p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="font-inter text-[#64748B]">Loading reviews...</p>
          </div>
        ) : (
          <>
            {/* Rating banner */}
            {overallRating > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-12 py-5 px-6 rounded-2xl border border-white/[0.07] max-w-lg mx-auto"
                style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
              >
                <div className="flex items-center gap-3">
                  <p className="font-playfair text-4xl font-bold text-white">{overallRating.toFixed(1)}</p>
                  <div>
                    <div className="flex gap-0.5 mb-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" aria-hidden="true" />)}
                    </div>
                    <p className="font-inter text-xs text-[#64748B]">Google rating</p>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-white/10" aria-hidden="true" />
                <div className="text-center">
                  <p className="font-playfair text-2xl font-bold text-white">{totalReviews.toLocaleString()}+</p>
                  <p className="font-inter text-xs text-[#64748B] mt-0.5">Reviews</p>
                </div>
                <div className="hidden sm:block w-px h-10 bg-white/10" aria-hidden="true" />
                <div className="text-center">
                  <p className="font-playfair text-2xl font-bold text-white">99%</p>
                  <p className="font-inter text-xs text-[#64748B] mt-0.5">Satisfaction</p>
                </div>
              </motion.div>
            )}

            {/* Reviews grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {displayReviews.map((r, i) => {
                const initials = r.author_name.split(" ").map((n) => n[0]).join("").slice(0, 2);
                return (
                  <li key={i}>
                    <motion.article
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.5, delay: i * 0.07 }}
                      className="flex flex-col h-full rounded-2xl p-6 border border-white/[0.08] transition-all duration-300 hover:border-white/[0.14]"
                      style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                      aria-label={`Review by ${r.author_name}`}
                    >
                      <Quote className="w-7 h-7 mb-4 flex-shrink-0" style={{ color: 'rgba(196,30,58,0.35)' }} aria-hidden="true" />
                      <div className="flex gap-0.5 mb-4" role="img" aria-label={`${r.rating} out of 5 stars`}>
                        {Array.from({ length: r.rating }).map((_, j) => (
                          <Star key={j} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" aria-hidden="true" />
                        ))}
                      </div>
                      <blockquote className="font-inter text-sm text-[#94A3B8] leading-[1.75] flex-1 mb-6">
                        &ldquo;{r.text}&rdquo;
                      </blockquote>
                      <div className="border-t border-white/[0.06] pt-4 flex items-center gap-3">
                        {r.profile_photo_url ? (
                          <img
                            src={r.profile_photo_url}
                            alt=""
                            className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                            aria-hidden="true"
                          />
                        ) : (
                          <div
                            className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold font-playfair text-white flex-shrink-0"
                            style={{ background: 'linear-gradient(135deg, #C41E3A 0%, #D4AF37 100%)' }}
                            aria-hidden="true"
                          >
                            {initials}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <cite className="not-italic">
                            <p className="font-inter text-sm font-semibold text-white truncate">{r.author_name}</p>
                            <p className="font-inter text-xs text-[#64748B]">{r.relative_time_description}</p>
                          </cite>
                        </div>
                        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" aria-label="Google review" role="img">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                      </div>
                    </motion.article>
                  </li>
                );
              })}
            </ul>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 font-inter text-sm font-medium text-[#64748B] hover:text-[#94A3B8] transition-colors min-h-[44px] px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] rounded-sm"
              >
                Read all patient reviews <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-inter text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 px-5 py-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] min-h-[44px]"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Leave a Google Review
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
