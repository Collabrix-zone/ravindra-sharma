'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Activity, Shield, Minimize2, Network, Baby, ChevronDown, Wind } from 'lucide-react'

const services = [
  {
    icon: Activity,
    title: 'Coronary Artery Bypass Graft (CABG)',
    subtitle: 'Beating Heart Technique',
    description: 'Dr. Sharma specializes in off-pump CABG (beating heart surgery), where 75% of his ~5,000 CABG surgeries are performed on a beating heart. This advanced technique reduces complications, minimizes blood transfusion needs, and accelerates recovery compared to conventional on-pump surgery.',
    highlights: ['~5,000 CABG surgeries performed', '75% beating heart technique', 'Reduced recovery time', 'Lower complication rates'],
    color: '#C41E3A',
  },
  {
    icon: Heart,
    title: 'Valvular Reparative & Replacement Surgery',
    subtitle: 'Repair-First Approach',
    description: 'Comprehensive management of all valvular heart diseases including mitral, aortic, tricuspid, and pulmonary valve disorders. Dr. Sharma follows a repair-first philosophy, preserving native valve tissue whenever possible, and uses the latest prosthetic valves when replacement is necessary.',
    highlights: ['Mitral valve repair & replacement', 'Aortic valve surgery', 'Tricuspid valve procedures', 'Biological & mechanical options'],
    color: '#D4AF37',
  },
  {
    icon: Shield,
    title: 'Aortic Surgery',
    subtitle: 'Complex Aortic Reconstruction',
    description: 'Treatment of aortic aneurysms and aortic dissections requires exceptional skill and experience. Dr. Sharma performs complex aortic root procedures, ascending aorta replacements, and arch reconstructions, combining technical precision with state-of-the-art cerebral protection strategies.',
    highlights: ['Aortic aneurysm repair', 'Aortic dissection surgery', 'Aortic root replacement', 'Arch reconstruction'],
    color: '#60A5FA',
  },
  {
    icon: Minimize2,
    title: 'Minimally Invasive Cardiac Surgery',
    subtitle: 'Smaller Incisions, Faster Recovery',
    description: 'Using small incisions and advanced video-assisted techniques, minimally invasive cardiac surgery offers patients significantly reduced pain, shorter hospital stays, faster return to normal activities, and excellent cosmetic results — without compromising on surgical outcomes.',
    highlights: ['Mini-thoracotomy approach', 'Reduced hospital stay', 'Less post-op pain', 'Faster return to activity'],
    color: '#34D399',
  },
  {
    icon: Network,
    title: 'Peripheral Vascular Surgery',
    subtitle: 'Comprehensive Vascular Care',
    description: 'Management of peripheral arterial disease, carotid artery disease, and venous disorders affecting the limbs and major vessels. Procedures include bypass surgeries, endarterectomies, and endovascular interventions to restore normal blood flow and prevent limb loss.',
    highlights: ['Carotid endarterectomy', 'Peripheral bypass surgery', 'Varicose vein treatment', 'Aneurysm repair'],
    color: '#A78BFA',
  },
  {
    icon: Baby,
    title: 'Congenital Heart Surgery',
    subtitle: 'Correcting Birth Defects',
    description: "Surgical correction of congenital heart defects in children and adults, including atrial and ventricular septal defects (ASD/VSD), tetralogy of Fallot, patent ductus arteriosus, and other structural abnormalities. Dr. Sharma's vast experience ensures optimal outcomes for these complex cases.",
    highlights: ['ASD & VSD closure', 'Tetralogy of Fallot repair', 'PDA ligation', 'Complex reconstructions'],
    color: '#F472B6',
  },
  {
    icon: Wind,
    title: 'Lung Surgery',
    subtitle: 'Thoracic Surgical Care',
    description: 'Comprehensive thoracic surgery for lung conditions including lung cancer, pleural diseases, chest wall tumors, and mediastinal masses. Dr. Sharma performs lobectomies, pneumonectomies, decortications, and other thoracic procedures with precision and extensive experience.',
    highlights: ['Lung cancer surgery', 'Lobectomy & pneumonectomy', 'Pleural disease management', 'Chest wall procedures'],
    color: '#38BDF8',
  },
]

export function ServicesGrid() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-[#0D1120]"
      aria-labelledby="services-grid-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="services-grid-heading" className="sr-only">All cardiac surgery services</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {services.map((s, i) => {
            const Icon = s.icon
            const isOpen = expanded === i
            return (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${s.color}15`, border: `1px solid ${s.color}30` }}
                  aria-hidden="true"
                >
                  <Icon className="w-6 h-6" style={{ color: s.color }} aria-hidden="true" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-white mb-1">{s.title}</h3>
                <p className="font-inter text-xs mb-3 font-semibold" style={{ color: s.color }}>{s.subtitle}</p>
                <p className="font-inter text-sm text-[#CBD5E0] leading-relaxed line-clamp-3">{s.description}</p>

                <button
                  className="mt-4 flex items-center gap-1 font-inter text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C41E3A] rounded-sm min-h-[44px] px-1"
                  style={{ color: s.color }}
                  onClick={() => setExpanded(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`service-details-${i}`}
                >
                  {isOpen ? 'Show Less' : 'Learn More'}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`service-details-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="font-inter text-sm text-[#CBD5E0] mt-4 leading-relaxed">{s.description}</p>
                      <ul className="mt-4 space-y-2" role="list" aria-label={`Key highlights for ${s.title}`}>
                        {s.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 font-inter text-sm text-white/80">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} aria-hidden="true" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
