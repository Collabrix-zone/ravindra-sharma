import type { Metadata } from 'next'
import { AboutHero } from '@/components/sections/AboutHero'
import { AboutBio } from '@/components/sections/AboutBio'
import { CareerTimeline } from '@/components/sections/CareerTimeline'
import { Memberships } from '@/components/sections/Memberships'

export const metadata: Metadata = {
  title: 'About Dr. Ravindra Kumar Sharma | Best Cardiac Surgeon in Jaipur',
  description: 'Learn about Dr. R.K. Sharma — Director CTVS at Eternal Hospital Jaipur. 44+ years experience, trained under Dr. N. Trehan, CMC Vellore & Uppsala Sweden.',
  openGraph: {
    title: 'About Dr. Ravindra Kumar Sharma | Cardiac Surgeon Jaipur',
    description: 'Senior cardiac surgeon with 44+ years experience and 7,000+ open heart surgeries.',
    url: 'https://drravindrasharma.com/about',
  },
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutBio />
      <CareerTimeline />
      <Memberships />
    </main>
  )
}
