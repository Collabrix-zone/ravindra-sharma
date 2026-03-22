import type { Metadata } from 'next'
import { ReviewSchema } from '@/components/seo/ReviewSchema'

export const metadata: Metadata = {
  title: 'Patient Reviews - Dr. Ravindra Kumar Sharma',
  description: 'Read verified patient reviews for Dr. Ravindra Kumar Sharma, cardiac surgeon at Eternal Hospital Jaipur. 7,000+ successful surgeries. Share your experience.',
  keywords: [
    'dr ravindra sharma reviews', 'cardiac surgeon jaipur reviews', 'heart surgeon jaipur patient reviews',
    'ravindra sharma patient feedback', 'eternal hospital cardiac surgery reviews', 'best surgeon jaipur reviews',
  ],
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
