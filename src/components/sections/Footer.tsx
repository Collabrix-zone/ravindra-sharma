import Link from "next/link";

const LINKS = {
  Pages: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Reviews", href: "/reviews" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "General Surgery", href: "/services" },
    { label: "Laparoscopic Surgery", href: "/services" },
    { label: "Endoscopy", href: "/services" },
    { label: "Cancer Surgery", href: "/services" },
    { label: "Hernia Repair", href: "/services" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#040710] border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex flex-col leading-none mb-6">
              <span className="font-playfair text-2xl font-bold text-white">Dr. Ravindra Sharma</span>
              <span className="font-inter text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] mt-1">
                Senior Consultant Surgeon
              </span>
            </Link>
            <p className="font-inter text-[#A0AEC0] leading-relaxed max-w-sm">
              Delivering compassionate, world-class surgical care with over two decades of expertise. Your health, our commitment.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="tel:+911234567890"
                className="font-inter text-sm text-[#D4AF37] hover:text-white transition-colors"
              >
                +91 12345 67890
              </a>
              <span className="text-white/20">|</span>
              <a
                href="mailto:dr.ravindra@example.com"
                className="font-inter text-sm text-[#D4AF37] hover:text-white transition-colors"
              >
                dr.ravindra@example.com
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-playfair text-white font-semibold mb-5">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-inter text-sm text-[#A0AEC0] hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-[#A0AEC0]">
            © {new Date().getFullYear()} Dr. Ravindra Sharma. All rights reserved.
          </p>
          <p className="font-inter text-xs text-[#A0AEC0]">
            Designed with care for better health outcomes.
          </p>
        </div>
      </div>
    </footer>
  );
}
