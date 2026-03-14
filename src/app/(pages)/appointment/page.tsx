"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const SERVICES = [
  "Laparoscopic Surgery Consultation",
  "Cancer Surgery Consultation",
  "General Surgery Consultation",
  "Endoscopy",
  "Hernia Evaluation",
  "Emergency / Urgent Care",
  "Post-operative Follow-up",
  "Other",
];

const TIME_SLOTS = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-[#080C18] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C41E3A]/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
              Schedule a Visit
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Book an Appointment
            </h1>
            <p className="font-inter text-xl text-[#A0AEC0] leading-relaxed">
              Take the first step towards better health. Fill out the form below and our team will confirm your appointment within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 pb-24 bg-[#080C18]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8">
                <h3 className="font-playfair text-xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {[
                    { icon: "📞", label: "Phone", value: "+91 12345 67890" },
                    { icon: "📧", label: "Email", value: "dr.ravindra@example.com" },
                    { icon: "📍", label: "Address", value: "City Hospital, Sector 14, New Delhi – 110001" },
                    { icon: "🕐", label: "OPD Hours", value: "Mon – Sat, 9AM – 6PM" },
                    { icon: "🚨", label: "Emergency", value: "24 / 7 Available" },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <span className="text-xl mt-0.5">{item.icon}</span>
                      <div>
                        <p className="font-inter text-xs text-[#A0AEC0] uppercase tracking-wider">{item.label}</p>
                        <p className="font-inter text-sm text-white mt-0.5">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-8">
                <h3 className="font-playfair text-lg font-semibold text-white mb-3">What to Bring</h3>
                <ul className="space-y-2">
                  {["Previous medical reports", "Prescription & current medications", "Insurance documents (if applicable)", "List of your symptoms & concerns"].map((item) => (
                    <li key={item} className="flex gap-2 font-inter text-sm text-[#A0AEC0]">
                      <span className="text-[#D4AF37] mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              {submitted ? (
                <div className="rounded-3xl border border-[#C41E3A]/30 bg-[#C41E3A]/5 p-12 text-center">
                  <span className="text-6xl block mb-6">✅</span>
                  <h2 className="font-playfair text-3xl font-bold text-white mb-4">Appointment Request Received!</h2>
                  <p className="font-inter text-[#A0AEC0]">
                    Thank you for reaching out. Our team will review your request and contact you within 24 hours to confirm your appointment.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 lg:p-10 space-y-6"
                >
                  <h2 className="font-playfair text-2xl font-bold text-white mb-2">Patient Details</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { id: "firstName", label: "First Name", type: "text", placeholder: "Rahul" },
                      { id: "lastName", label: "Last Name", type: "text", placeholder: "Kumar" },
                    ].map((field) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="font-inter text-sm text-[#A0AEC0] mb-2 block">
                          {field.label} <span className="text-[#C41E3A]">*</span>
                        </label>
                        <input
                          id={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          required
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-inter text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C41E3A]/60 transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="font-inter text-sm text-[#A0AEC0] mb-2 block">
                        Phone Number <span className="text-[#C41E3A]">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-inter text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C41E3A]/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="font-inter text-sm text-[#A0AEC0] mb-2 block">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="rahul@example.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-inter text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C41E3A]/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="font-inter text-sm text-[#A0AEC0] mb-2 block">
                      Reason for Visit <span className="text-[#C41E3A]">*</span>
                    </label>
                    <select
                      id="service"
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#080C18] px-4 py-3 font-inter text-sm text-white focus:outline-none focus:border-[#C41E3A]/60 transition-colors"
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="date" className="font-inter text-sm text-[#A0AEC0] mb-2 block">
                        Preferred Date <span className="text-[#C41E3A]">*</span>
                      </label>
                      <input
                        id="date"
                        type="date"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-inter text-sm text-white focus:outline-none focus:border-[#C41E3A]/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="font-inter text-sm text-[#A0AEC0] mb-2 block">
                        Preferred Time
                      </label>
                      <select
                        id="time"
                        className="w-full rounded-xl border border-white/10 bg-[#080C18] px-4 py-3 font-inter text-sm text-white focus:outline-none focus:border-[#C41E3A]/60 transition-colors"
                      >
                        <option value="">Select a slot</option>
                        {TIME_SLOTS.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="font-inter text-sm text-[#A0AEC0] mb-2 block">
                      Describe your symptoms or concerns
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Please briefly describe your condition, symptoms, or any questions you have for Dr. Sharma..."
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-inter text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C41E3A]/60 transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Appointment Request
                  </Button>

                  <p className="font-inter text-xs text-[#A0AEC0] text-center">
                    Your information is confidential and will only be used to process your appointment.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
