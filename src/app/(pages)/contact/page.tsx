import type { Metadata } from 'next'
import { ContactClient } from '@/components/sections/ContactClient'

export const metadata: Metadata = {
  title: 'Contact | Dr. Ravindra Kumar Sharma – Cardiac Surgeon Eternal Hospital Jaipur',
  description: 'Contact Dr. Ravindra Kumar Sharma at Eternal Hospital, Near Airport Circle, Sanganer, Jaipur 302011. Call +91-7231044444 for appointments, second opinions, or enquiries.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <main>
      <ContactClient />
    </main>
  )
}
