import Link from "next/link";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About Dr. Sharma", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Patient Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "CABG (Bypass Surgery)", href: "/services" },
  { label: "Valve Surgery", href: "/services" },
  { label: "Aortic Surgery", href: "/services" },
  { label: "Minimally Invasive Surgery", href: "/services" },
  { label: "Peripheral Vascular Surgery", href: "/services" },
  { label: "Congenital Heart Surgery", href: "/services" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#040710] border-t border-white/5"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand & Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex flex-col leading-none mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040710] rounded-sm"
              aria-label="Dr. Ravindra Kumar Sharma — Home"
            >
              <span className="font-playfair text-2xl font-bold text-white">Dr. R.K. Sharma</span>
              <span className="font-inter text-xs tracking-widest uppercase text-[#D4AF37] mt-1">
                Cardiac Surgeon · Jaipur
              </span>
            </Link>
            <p className="font-inter text-sm text-[#CBD5E0] leading-relaxed max-w-xs mb-6">
              Director of CTVS at Eternal Hospital, Jaipur. 44+ years of excellence in cardiac surgery with 7,000+ open heart surgeries performed.
            </p>

            {/* Contact info */}
            <address className="not-italic space-y-3">
              <a
                href="tel:+917231044444"
                className="flex items-center gap-2 font-inter text-sm text-[#CBD5E0] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] rounded-sm min-h-[44px]"
                aria-label="Call +91 72310 44444"
              >
                <Phone className="w-4 h-4 text-[#C41E3A] flex-shrink-0" aria-hidden="true" />
                +91-7231044444
              </a>
              <a
                href="https://maps.google.com/?q=Eternal+Hospital+Sanganer+Jaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 font-inter text-sm text-[#CBD5E0] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] rounded-sm"
                aria-label="Eternal Hospital, Near Airport Circle, Sanganer, Jaipur — open in Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Eternal Hospital, Near Airport Circle,<br />Sanganer, Jaipur 302011</span>
              </a>
              <div className="flex items-center gap-2 font-inter text-sm text-[#CBD5E0]">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0" aria-hidden="true" />
                <span>Mon – Sat: 10:00 AM – 4:00 PM</span>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <h3 className="font-playfair text-white font-semibold mb-5 text-lg">Quick Links</h3>
            <ul className="space-y-3" role="list">
              {pageLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-inter text-sm text-[#CBD5E0] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] rounded-sm min-h-[44px] flex items-center py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services Links */}
          <nav aria-label="Footer services links">
            <h3 className="font-playfair text-white font-semibold mb-5 text-lg">Services</h3>
            <ul className="space-y-3" role="list">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-inter text-sm text-[#CBD5E0] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] rounded-sm min-h-[44px] flex items-center py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Appointment CTA */}
          <div>
            <h3 className="font-playfair text-white font-semibold mb-5 text-lg">Book Appointment</h3>
            <p className="font-inter text-sm text-[#CBD5E0] leading-relaxed mb-6">
              Consult with Dr. Sharma in person at Eternal Hospital. Walk-in available during OPD hours.
            </p>
            <a
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 w-full font-inter text-sm font-semibold text-white bg-gradient-to-r from-[#C41E3A] to-[#a01830] hover:from-[#D4AF37] hover:to-[#b8952d] px-5 py-3 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040710] min-h-[44px] mb-3"
            >
              Request Appointment
            </a>
            <a
              href="https://wa.me/917231044444"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full font-inter text-sm font-semibold text-white bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/30 px-5 py-3 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040710] min-h-[44px]"
              aria-label="WhatsApp Dr. Sharma"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]" aria-hidden="true" focusable="false">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-[#CBD5E0]">
            &copy; {currentYear} Dr. Ravindra Kumar Sharma. All rights reserved.
          </p>
          <p className="font-inter text-xs text-[#CBD5E0]">
            Eternal Hospital, Sanganer, Jaipur, Rajasthan
          </p>
        </div>
      </div>
    </footer>
  );
}
