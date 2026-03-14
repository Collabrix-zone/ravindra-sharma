export function PhysicianSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Ravindra Kumar Sharma",
    "alternateName": "Dr. R.K. Sharma",
    "description": "Director, CTVS (Cardiothoracic and Vascular Surgery) at Eternal Hospital, Jaipur. 44+ years experience, 7,000+ open heart surgeries.",
    "image": "https://www.eternalhospital.com/images/doctors/ravindra-sharma.jpg",
    "url": "https://drravindrasharma.com",
    "telephone": "+91-7231044444",
    "medicalSpecialty": [
      "Cardiac Surgery",
      "Cardiothoracic Surgery",
      "Vascular Surgery",
      "Coronary Artery Bypass Surgery",
      "Valve Surgery"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "MBBS",
        "recognizedBy": { "@type": "EducationalOrganization", "name": "J.L.N. Medical College, Ajmer" },
        "dateCreated": "1981"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "MS (General Surgery)",
        "recognizedBy": { "@type": "EducationalOrganization", "name": "J.L.N. Medical College, Ajmer" },
        "dateCreated": "1985"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "MCh (Thoracic Surgery)",
        "recognizedBy": { "@type": "EducationalOrganization", "name": "CMC Hospital, Vellore" },
        "dateCreated": "1992"
      }
    ],
    "worksFor": {
      "@type": "MedicalBusiness",
      "name": "Eternal Hospital",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Airport Circle, Sanganer",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302011",
        "addressCountry": "IN"
      },
      "telephone": "+91-7231044444",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "10:00",
          "closes": "16:00"
        }
      ],
      "url": "https://www.eternalhospital.com/sanganer/"
    },
    "sameAs": [
      "https://www.eternalhospital.com/sanganer/doctor/dr-ravindra-k-sharma",
      "https://www.hexahealth.com/jaipur/doctor/dr-ravindra-kumar-sharma-cardiothoracic-and-vascular-surgery"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
