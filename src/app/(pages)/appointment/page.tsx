import type { Metadata } from 'next'
import { AppointmentClient } from '@/components/sections/AppointmentClient'

export const metadata: Metadata = {
  title: 'Book Appointment with Dr. Ravindra Sharma',
  description: 'Book an appointment with Dr. Ravindra Kumar Sharma, Director CTVS at Eternal Hospital Jaipur. OPD: Mon–Sat 10 AM – 4 PM. Call +91-7231044444.',
  keywords: [
    'book appointment cardiac surgeon jaipur', 'dr ravindra sharma appointment', 'heart surgeon appointment jaipur',
    'eternal hospital appointment', 'best cardiac surgeon appointment', 'ravindra sharma opd timing',
    'cardiac surgeon opd jaipur', 'heart doctor appointment jaipur',
  ],
  alternates: { canonical: '/appointment' },
}

export default function AppointmentPage() {
  return (
    <main>
      <AppointmentClient />
    </main>
  )
}
