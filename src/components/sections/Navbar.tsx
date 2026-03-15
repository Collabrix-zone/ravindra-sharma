'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080C18]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col leading-tight rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18]"
          aria-label="Dr. Ravindra Kumar Sharma — Home"
        >
          <span className="font-playfair text-lg font-bold text-white">Dr. R.K. Sharma</span>
          <span className="font-inter text-xs text-[#D4AF37] tracking-wide">Cardiac Surgeon · Jaipur</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map(link => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`font-inter text-sm px-4 py-2 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18] ${
                    isActive
                      ? 'text-white bg-white/10 font-semibold'
                      : 'text-[#CBD5E0] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+917231044444"
            className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-white bg-gradient-to-r from-[#C41E3A] to-[#a01830] hover:from-[#a01830] hover:to-[#C41E3A] px-5 py-2.5 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18] min-h-[44px]"
            aria-label="Call Dr. Sharma: +91 72310 44444"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C18] min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {open
            ? <X className="w-6 h-6" aria-hidden="true" />
            : <Menu className="w-6 h-6" aria-hidden="true" />
          }
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#080C18]/98 backdrop-blur-md border-t border-white/10 px-4 py-4"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <ul className="space-y-1" role="list">
            {navLinks.map(link => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block font-inter text-base px-4 py-3 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] min-h-[44px] flex items-center ${
                      isActive
                        ? 'text-white bg-white/10 font-semibold'
                        : 'text-[#CBD5E0] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="mt-4 pt-4 border-t border-white/10">
            <a
              href="tel:+917231044444"
              className="flex items-center justify-center gap-2 w-full font-inter text-sm font-semibold text-white bg-gradient-to-r from-[#C41E3A] to-[#a01830] px-5 py-3.5 rounded-full min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A]"
              aria-label="Call +91 72310 44444 to book appointment"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              +91-7231044444
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
