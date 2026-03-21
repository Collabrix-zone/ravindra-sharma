export function BreadcrumbSchema({ postTitle, slug }: { postTitle: string; slug: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://drravindrasharma.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://drravindrasharma.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": postTitle,
        "item": `https://drravindrasharma.com/blog/${slug}`
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
