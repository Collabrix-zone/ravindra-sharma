import type { Metadata } from 'next'
import { ContactClient } from '@/components/sections/ContactClient'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Dr. Ravindra Kumar Sharma at Eternal Hospital, Near Airport Circle, Sanganer, Jaipur. OPD Mon–Sat 10 AM–4 PM. Call +91-7231044444 or WhatsApp now.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <main>
      <ContactClient />
    </main>
  )
}
