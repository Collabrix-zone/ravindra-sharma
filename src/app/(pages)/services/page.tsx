import type { Metadata } from 'next'
import { ServicesHero } from '@/components/sections/ServicesHero'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { ServicesFAQ } from '@/components/sections/ServicesFAQ'

export const metadata: Metadata = {
  title: 'Cardiac Surgery Services | Dr. Ravindra Kumar Sharma – Best Cardiac Surgeon in Jaipur',
  description: 'Comprehensive cardiac surgery services by Dr. R.K. Sharma: CABG, Valve Surgery, Aortic Surgery, Minimally Invasive, Peripheral Vascular & Congenital Heart Surgery in Jaipur.',
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <ServicesFAQ />
    </main>
  )
}
