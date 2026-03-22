import type { Metadata } from 'next'
import { ContactClient } from '@/components/sections/ContactClient'

export const metadata: Metadata = {
  title: 'Contact Dr. Ravindra Kumar Sharma',
  description: 'Contact Dr. Ravindra Kumar Sharma at Eternal Hospital Jaipur. OPD Mon–Sat 10 AM–4 PM. Call +91-7231044444 or WhatsApp now.',
  keywords: [
    'contact dr ravindra sharma', 'ravindra sharma phone number', 'ravindra sharma jaipur contact',
    'cardiac surgeon jaipur contact', 'eternal hospital jaipur phone', 'heart surgeon jaipur appointment',
    'best surgeon jaipur contact', 'dr r.k. sharma contact',
  ],
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <main>
      <ContactClient />
    </main>
  )
}
