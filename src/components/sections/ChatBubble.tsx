'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatBubble() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  const handleSend = async () => {
    if (!input.trim() || loading) return

    const userMsg: Message = { role: 'user', content: input.trim() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      })
      const data = await res.json()
      setMessages([...newMessages, { role: 'assistant', content: data.reply || data.error }])
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: 'Unable to connect. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col"
            style={{
              backgroundColor: '#0D1120',
              height: 'min(520px, calc(100vh - 8rem))',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 border-b border-white/10"
              style={{ background: 'linear-gradient(135deg, rgba(196,30,58,0.15), rgba(212,175,55,0.1))' }}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" style={{ color: '#D4AF37' }} />
                <span className="font-inter font-semibold text-sm text-white">AI Assistant</span>
                <span className="w-2 h-2 rounded-full bg-green-400" />
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4 text-[#94A3B8]" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ scrollbarWidth: 'thin' }}>
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <Sparkles className="w-8 h-8 mx-auto mb-3" style={{ color: '#D4AF37', opacity: 0.5 }} />
                  <p className="text-sm text-[#64748B] font-inter mb-4">
                    Hi! I can help you with information about Dr. Sharma&apos;s practice.
                  </p>
                  <div className="space-y-2">
                    {['What are the OPD hours?', 'How to book an appointment?', 'What surgeries are offered?'].map((q) => (
                      <button
                        key={q}
                        onClick={() => {
                          setInput(q)
                          setTimeout(() => {
                            const userMsg: Message = { role: 'user', content: q }
                            setMessages([userMsg])
                            setLoading(true)
                            fetch('/api/chat', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ messages: [{ role: 'user', content: q }] }),
                            })
                              .then((r) => r.json())
                              .then((data) => setMessages([userMsg, { role: 'assistant', content: data.reply }]))
                              .catch(() => setMessages([userMsg, { role: 'assistant', content: 'Unable to connect.' }]))
                              .finally(() => { setLoading(false); setInput('') })
                          }, 0)
                        }}
                        className="w-full text-left px-3 py-2 rounded-lg text-xs font-inter text-[#94A3B8] border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm font-inter leading-relaxed"
                    style={
                      msg.role === 'user'
                        ? { backgroundColor: '#C41E3A', color: '#ffffff' }
                        : { backgroundColor: 'rgba(255,255,255,0.07)', color: '#CBD5E0' }
                    }
                  >
                    <p className="whitespace-pre-line">{msg.content}</p>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div
                    className="rounded-2xl px-4 py-3 flex items-center gap-2"
                    style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                  >
                    <Loader2 className="w-3.5 h-3.5 text-[#C41E3A] animate-spin" />
                    <span className="text-xs text-[#64748B] font-inter">Typing...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your question..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm font-inter text-white placeholder:text-[#4A5568] outline-none focus:border-[#C41E3A]/50 transition-colors"
                  aria-label="Chat message"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || loading}
                  className="p-2.5 rounded-xl transition-all duration-200 disabled:opacity-30"
                  style={{ backgroundColor: input.trim() ? '#C41E3A' : 'rgba(255,255,255,0.05)' }}
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-24 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18]"
        style={{
          background: open
            ? 'rgba(255,255,255,0.1)'
            : 'linear-gradient(135deg, #C41E3A 0%, #a01830 100%)',
          boxShadow: open ? 'none' : '0 8px 32px rgba(196,30,58,0.4)',
        }}
        aria-label={open ? 'Close AI chat' : 'Open AI chat'}
        whileTap={{ scale: 0.95 }}
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </motion.button>
    </>
  )
}
