import type { Metadata } from 'next'
import { ServicesHero } from '@/components/sections/ServicesHero'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { ServicesFAQ } from '@/components/sections/ServicesFAQ'
import { FAQSchema } from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Cardiac Surgery Services in Jaipur',
  description: 'Cardiac surgery services in Jaipur by Dr. Ravindra Kumar Sharma: CABG, valve surgery, aortic surgery, lung surgery, minimally invasive & congenital heart surgery. Call +91-7231044444.',
  keywords: [
    'cardiac surgery services jaipur', 'heart surgery jaipur', 'bypass surgery jaipur', 'CABG surgery jaipur',
    'valve surgery jaipur', 'lung surgery jaipur', 'aortic surgery jaipur', 'open heart surgery jaipur',
    'minimally invasive heart surgery jaipur', 'congenital heart surgery jaipur',
    'ravindra sharma services', 'best cardiac surgeon services', 'heart operation jaipur',
  ],
  alternates: { canonical: '/services' },
}

const serviceFaqs = [
  {
    q: 'What is bypass surgery (CABG) and when is it needed?',
    a: 'Coronary Artery Bypass Grafting (CABG) is a surgical procedure that creates new pathways for blood to flow to the heart muscle, bypassing blocked or narrowed arteries. It is recommended when one or more coronary arteries are severely blocked. Dr. Sharma performs 75% of CABG surgeries on a beating heart.',
  },
  {
    q: 'What is the recovery time after open heart surgery?',
    a: 'Most patients are discharged within 5-7 days. Full recovery typically takes 6-12 weeks. With beating heart CABG techniques, recovery is often faster.',
  },
  {
    q: 'Is minimally invasive cardiac surgery available for all patients?',
    a: 'Suitability depends on the type and complexity of the cardiac condition. Dr. Sharma evaluates each patient individually.',
  },
  {
    q: 'What are the signs that you need to see a cardiac surgeon?',
    a: 'Consult if you have significant coronary artery disease, severe valve disease, aortic aneurysm, or congenital heart defects. Symptoms like persistent chest pain or breathlessness warrant evaluation.',
  },
  {
    q: 'How do I book a consultation with Dr. R.K. Sharma?',
    a: 'Call +91-7231044444 or visit Eternal Hospital, Near Airport Circle, Sanganer, Jaipur. OPD: Monday to Saturday, 10:00 AM – 4:00 PM.',
  },
]

export default function ServicesPage() {
  return (
    <main>
      <FAQSchema faqs={serviceFaqs} />
      <ServicesHero />
      <ServicesGrid />
      <ServicesFAQ />
    </main>
  )
}
