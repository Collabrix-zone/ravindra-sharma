import type { Metadata } from 'next'
import { ReviewSchema } from '@/components/seo/ReviewSchema'

export const metadata: Metadata = {
  title: 'Patient Reviews | Dr. Ravindra Kumar Sharma – Best Cardiac Surgeon in Jaipur',
  description: 'Read real patient testimonials for Dr. R.K. Sharma, cardiac surgeon at Eternal Hospital Jaipur. 7,000+ successful surgeries. Submit your review.',
}

import { ReviewsClient } from '@/components/sections/ReviewsClient'

export default function ReviewsPage() {
  return (
    <main>
      <ReviewSchema />
      <ReviewsClient />
    </main>
  )
}
