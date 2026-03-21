import type { Metadata } from 'next'
import { BlogClient } from '@/components/sections/BlogClient'

export const metadata: Metadata = {
  title: 'Heart Health Blog | Dr. Ravindra Kumar Sharma – Cardiac Surgeon Jaipur',
  description: 'Expert articles on bypass surgery, valve repair, heart-healthy diet, and post-operative recovery by Dr. R.K. Sharma — 44+ years experience. Read trusted cardiac care advice.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  return (
    <main>
      <BlogClient />
    </main>
  )
}
