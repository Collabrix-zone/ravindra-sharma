import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://drravindrasharma.com'
  const now = new Date()

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/about`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/reviews`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/appointment`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, priority: 0.7, changeFrequency: 'monthly' as const },
  ]

  const blogSlugs = [
    'what-is-bypass-surgery',
    'signs-you-need-a-cardiac-surgeon',
    'recovery-after-open-heart-surgery',
    'beating-heart-cabg-vs-conventional',
    'valve-repair-vs-replacement',
    'heart-healthy-diet-india',
  ]

  const blogPages = blogSlugs.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }))

  return [
    ...staticPages.map(p => ({ ...p, lastModified: now })),
    ...blogPages,
  ]
}
