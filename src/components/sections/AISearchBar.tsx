'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Loader2, Sparkles } from 'lucide-react'

const SUGGESTIONS = [
  'What surgeries does Dr. Sharma perform?',
  'How to book an appointment?',
  'What are the OPD hours?',
  'Tell me about off-pump CABG surgery',
]

export default function AISearchBar() {
  const [query, setQuery] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (text?: string) => {
    const q = text || query
    if (!q.trim() || loading) return

    setQuery(q)
    setAnswer('')
    setLoading(true)
    setFocused(false)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: q }],
        }),
      })
      const data = await res.json()
      setAnswer(data.reply || data.error || 'Sorry, something went wrong.')
    } catch {
      setAnswer('Unable to connect. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    setQuery('')
    setAnswer('')
    inputRef.current?.focus()
  }

  // Close suggestions on click outside
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setFocused(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={containerRef} className="w-full max-w-2xl mx-auto">
      {/* Search Input */}
      <div className="relative">
        <div
          className="flex items-center gap-3 rounded-2xl border px-5 py-4 transition-all duration-300"
          style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderColor: focused ? 'rgba(196,30,58,0.5)' : 'rgba(255,255,255,0.1)',
            boxShadow: focused ? '0 0 20px rgba(196,30,58,0.15)' : 'none',
          }}
        >
          <Sparkles className="w-5 h-5 flex-shrink-0" style={{ color: '#D4AF37' }} aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            placeholder="Ask about Dr. Sharma, services, appointments..."
            className="flex-1 bg-transparent text-white text-sm sm:text-base font-inter placeholder:text-[#4A5568] outline-none"
            aria-label="Ask AI assistant"
          />
          {query && !loading && (
            <button
              onClick={handleClear}
              className="p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4 text-[#64748B]" />
            </button>
          )}
          {loading ? (
            <Loader2 className="w-5 h-5 text-[#C41E3A] animate-spin" />
          ) : (
            <button
              onClick={() => handleSubmit()}
              disabled={!query.trim()}
              className="p-2 rounded-xl transition-all duration-200 disabled:opacity-30"
              style={{ backgroundColor: query.trim() ? '#C41E3A' : 'transparent' }}
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-white" />
            </button>
          )}
        </div>

        {/* Suggestions Dropdown */}
        <AnimatePresence>
          {focused && !answer && !loading && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-white/10 overflow-hidden z-20"
              style={{ backgroundColor: 'rgba(13,17,32,0.95)', backdropFilter: 'blur(16px)' }}
            >
              <p className="px-4 pt-3 pb-2 text-[10px] uppercase tracking-widest text-[#4A5568] font-inter">
                Popular questions
              </p>
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setQuery(s)
                    handleSubmit(s)
                  }}
                  className="w-full text-left px-4 py-3 text-sm font-inter text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2"
                >
                  <Search className="w-3.5 h-3.5 flex-shrink-0 text-[#4A5568]" aria-hidden="true" />
                  {s}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Answer */}
      <AnimatePresence>
        {(answer || loading) && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="mt-4 rounded-xl border border-white/10 p-5"
            style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
          >
            {loading ? (
              <div className="flex items-center gap-3">
                <Loader2 className="w-4 h-4 text-[#C41E3A] animate-spin" />
                <span className="text-sm text-[#64748B] font-inter">Thinking...</span>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-3.5 h-3.5" style={{ color: '#D4AF37' }} />
                  <span className="text-[10px] uppercase tracking-widest text-[#4A5568] font-inter">AI Answer</span>
                </div>
                <p className="text-sm sm:text-base text-[#CBD5E0] font-inter leading-relaxed whitespace-pre-line">
                  {answer}
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
