import type { Metadata } from 'next'
import { ContactClient } from '@/components/sections/ContactClient'

export const metadata: Metadata = {
  title: 'Contact | Dr. Ravindra Kumar Sharma – Cardiac Surgeon Eternal Hospital Jaipur',
  description: 'Contact Dr. R.K. Sharma at Eternal Hospital, Near Airport Circle, Sanganer, Jaipur. Phone: +91-7231044444.',
}

export default function ContactPage() {
  return (
    <main>
      <ContactClient />
    </main>
  )
}
