export function ReviewSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. Ravindra Kumar Sharma — Cardiac Surgeon, Eternal Hospital Jaipur",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "9",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Ramesh Gupta" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "Dr. Sharma performed my bypass surgery with exceptional skill. I am fully recovered and back to normal life within 3 months. Truly the best cardiac surgeon in Jaipur.",
        "datePublished": "2024-12-01"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sunita Devi" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "My husband needed urgent valve replacement surgery. Dr. Sharma explained everything clearly and the operation was a complete success.",
        "datePublished": "2024-11-01"
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
