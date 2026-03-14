import type { Metadata } from 'next'
import { BlogClient } from '@/components/sections/BlogClient'

export const metadata: Metadata = {
  title: 'Heart Health Blog | Dr. Ravindra Kumar Sharma – Cardiac Surgeon Jaipur',
  description: 'Expert articles on heart health, bypass surgery, recovery tips, and cardiac care from Dr. R.K. Sharma, cardiac surgeon at Eternal Hospital Jaipur.',
}

export default function BlogPage() {
  return (
    <main>
      <BlogClient />
    </main>
  )
}
