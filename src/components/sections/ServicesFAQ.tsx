'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What is bypass surgery (CABG) and when is it needed?',
    a: 'Coronary Artery Bypass Grafting (CABG) is a surgical procedure that creates new pathways for blood to flow to the heart muscle, bypassing blocked or narrowed arteries. It is recommended when one or more coronary arteries are severely blocked and other treatments like medications or angioplasty are not sufficient. Dr. Sharma performs 75% of CABG surgeries on a beating heart, reducing risks significantly.',
  },
  {
    q: 'What is the recovery time after open heart surgery?',
    a: 'Most patients can walk short distances within 1–2 days of surgery and are discharged within 5–7 days. Full recovery typically takes 6–12 weeks. With beating heart CABG techniques used by Dr. Sharma, recovery is often faster and with fewer complications.',
  },
  {
    q: 'Is minimally invasive cardiac surgery available for all patients?',
    a: 'Minimally invasive techniques are suitable for many but not all patients. Suitability depends on the type and complexity of the cardiac condition, overall health, and anatomy. Dr. Sharma evaluates each patient individually and recommends the safest and most effective approach.',
  },
  {
    q: 'What are the signs that you need to see a cardiac surgeon?',
    a: 'You should consult a cardiac surgeon if you have been diagnosed with: significant coronary artery disease not treatable by stenting, severe valve disease, aortic aneurysm, or congenital heart defects. Symptoms like persistent chest pain, shortness of breath, or palpitations warrant immediate evaluation.',
  },
  {
    q: 'How do I book a consultation with Dr. R.K. Sharma?',
    a: 'You can book an appointment by calling +91-7231044444 or 0141-3120000, through the appointment form on this website, or by visiting Eternal Hospital, Near Airport Circle, Sanganer, Jaipur. OPD hours are Monday to Saturday, 10:00 AM – 4:00 PM.',
  },
]

export function ServicesFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-[#080C18]"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="faq-heading"
            className="font-playfair text-3xl sm:text-4xl font-bold text-white"
          >
            Frequently Asked <span className="text-[#C41E3A]">Questions</span>
          </h2>
        </div>

        <dl className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-200"
            >
              <dt>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C41E3A] min-h-[56px]"
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className="font-inter text-sm sm:text-base font-semibold text-white leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C41E3A] flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
              </dt>
              <AnimatePresence>
                {open === i && (
                  <motion.dd
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 font-inter text-sm text-[#CBD5E0] leading-relaxed">{faq.a}</p>
                  </motion.dd>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}
