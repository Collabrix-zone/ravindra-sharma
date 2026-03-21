export function BlogPostingSchema({ title, slug, datePublished, dateModified, description }: {
  title: string
  slug: string
  datePublished: string
  dateModified?: string
  description: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "url": `https://drravindrasharma.com/blog/${slug}`,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": "Dr. Ravindra Kumar Sharma",
      "url": "https://drravindrasharma.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dr. Ravindra Kumar Sharma",
      "url": "https://drravindrasharma.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://drravindrasharma.com/og-image.jpg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://drravindrasharma.com/blog/${slug}`
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
