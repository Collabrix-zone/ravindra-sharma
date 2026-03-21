import type { Metadata } from 'next'
import { AppointmentClient } from '@/components/sections/AppointmentClient'

export const metadata: Metadata = {
  title: 'Book Appointment | Dr. Ravindra Kumar Sharma – Best Cardiac Surgeon in Jaipur',
  description: 'Book an appointment with Dr. R.K. Sharma, Director CTVS at Eternal Hospital Jaipur. OPD: Mon–Sat 10 AM – 4 PM. Call +91-7231044444 or fill the online form to schedule your visit.',
  alternates: { canonical: '/appointment' },
}

export default function AppointmentPage() {
  return (
    <main>
      <AppointmentClient />
    </main>
  )
}
