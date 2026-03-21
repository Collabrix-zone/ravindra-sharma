import type { Metadata } from 'next'
import { ReviewSchema } from '@/components/seo/ReviewSchema'

export const metadata: Metadata = {
  title: 'Patient Reviews | Dr. Ravindra Kumar Sharma – Best Cardiac Surgeon in Jaipur',
  description: 'Read verified patient reviews for Dr. R.K. Sharma, cardiac surgeon at Eternal Hospital Jaipur. 4.9-star rating across 7,000+ successful surgeries. Share your experience today.',
  alternates: { canonical: '/reviews' },
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
