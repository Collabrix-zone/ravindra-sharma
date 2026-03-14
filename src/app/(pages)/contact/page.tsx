"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#080C18] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/8 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
              Get in Touch
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Contact Us
            </h1>
            <p className="font-inter text-xl text-[#A0AEC0] leading-relaxed">
              Have a question or need to reach our team? We are here to help. Use any of the channels below or send us a message.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-16 pb-24 bg-[#080C18]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
            {[
              { icon: "📞", title: "Phone", lines: ["+91 12345 67890", "Mon – Sat, 9AM – 6PM"], action: "tel:+911234567890", actionLabel: "Call Now" },
              { icon: "📧", title: "Email", lines: ["dr.ravindra@example.com", "We reply within 24 hours"], action: "mailto:dr.ravindra@example.com", actionLabel: "Send Email" },
              { icon: "🚨", title: "Emergency", lines: ["+91 98765 00000", "Available 24 / 7"], action: "tel:+919876500000", actionLabel: "Emergency Line" },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 text-center"
              >
                <span className="text-5xl block mb-4">{card.icon}</span>
                <h3 className="font-playfair text-xl font-semibold text-white mb-3">{card.title}</h3>
                {card.lines.map((line) => (
                  <p key={line} className="font-inter text-sm text-[#A0AEC0]">{line}</p>
                ))}
                <a href={card.action} className="mt-5 inline-block font-inter text-sm font-semibold text-[#C41E3A] hover:text-white transition-colors">
                  {card.actionLabel} →
                </a>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {submitted ? (
                <div className="rounded-3xl border border-[#C41E3A]/30 bg-[#C41E3A]/5 p-12 text-center h-full flex flex-col items-center justify-center">
                  <span className="text-6xl block mb-6">✅</span>
                  <h2 className="font-playfair text-3xl font-bold text-white mb-4">Message Sent!</h2>
                  <p className="font-inter text-[#A0AEC0]">Thank you for getting in touch. We will respond within 24 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 space-y-5"
                >
                  <h2 className="font-playfair text-2xl font-bold text-white">Send a Message</h2>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: "name", label: "Full Name", type: "text", placeholder: "Rahul Kumar", cols: 1 },
                      { id: "phone", label: "Phone", type: "tel", placeholder: "+91 98765 43210", cols: 1 },
                    ].map((f) => (
                      <div key={f.id}>
                        <label htmlFor={f.id} className="font-inter text-sm text-[#A0AEC0] mb-2 block">
                          {f.label} <span className="text-[#C41E3A]">*</span>
                        </label>
                        <input
                          id={f.id}
                          type={f.type}
                          placeholder={f.placeholder}
                          required
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-inter text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C41E3A]/60 transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="contactEmail" className="font-inter text-sm text-[#A0AEC0] mb-2 block">
                      Email Address
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      placeholder="rahul@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-inter text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C41E3A]/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="font-inter text-sm text-[#A0AEC0] mb-2 block">
                      Subject <span className="text-[#C41E3A]">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Appointment enquiry / Question about surgery / Other"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-inter text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C41E3A]/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage" className="font-inter text-sm text-[#A0AEC0] mb-2 block">
                      Message <span className="text-[#C41E3A]">*</span>
                    </label>
                    <textarea
                      id="contactMessage"
                      rows={5}
                      placeholder="Write your message here..."
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-inter text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C41E3A]/60 transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">Send Message</Button>
                </form>
              )}
            </motion.div>

            {/* Map placeholder + address */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#C41E3A]/10 to-[#D4AF37]/5 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <span className="text-5xl block mb-3">📍</span>
                  <p className="font-playfair text-xl text-white">City Hospital</p>
                  <p className="font-inter text-sm text-[#A0AEC0] mt-1">Sector 14, New Delhi – 110001</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-inter text-sm font-semibold text-[#D4AF37] hover:text-white transition-colors"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">
                <h3 className="font-playfair text-lg font-semibold text-white mb-4">Visiting Hours</h3>
                <div className="space-y-2">
                  {[
                    ["Monday – Friday", "9:00 AM – 6:00 PM"],
                    ["Saturday", "9:00 AM – 2:00 PM"],
                    ["Sunday", "Emergency Only"],
                  ].map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="font-inter text-[#A0AEC0]">{day}</span>
                      <span className="font-inter text-white">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
