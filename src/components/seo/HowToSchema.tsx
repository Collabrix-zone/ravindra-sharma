export function HowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Recovery After Open Heart Surgery: What to Expect",
    "description": "A step-by-step guide to recovering after open heart surgery, from ICU care through long-term recovery, by Dr. R.K. Sharma, cardiac surgeon at Eternal Hospital Jaipur.",
    "totalTime": "P90D",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Hospital Recovery (Days 1–7)",
        "text": "ICU monitoring for 1–2 days with ventilator, heart monitors, and IV lines. Once stable, move to the cardiac ward. Physiotherapists help you sit up, stand, and begin walking by day 2 or 3. Most patients are discharged within 5–7 days."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Early Home Recovery (Weeks 1–2)",
        "text": "Rest is important but avoid prolonged bed rest — take short walks around the house. Keep the chest incision clean and dry, watch for infection signs. Follow prescribed pain medication. No driving for 4–6 weeks and no lifting anything heavier than 2 kg."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Increasing Activity (Weeks 3–6)",
        "text": "Begin cardiac rehabilitation exercises as advised by your doctor. Light household tasks are permitted. Slowly increase walking distance each day. Avoid excessive stair climbing in the first few weeks."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Regaining Strength (Months 2–3)",
        "text": "Most patients can return to desk work at 6–8 weeks. Follow-up echocardiogram to assess heart function. Driving resumes at 4–6 weeks (once off strong pain medications). Full physical activity by 3 months."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Long-Term Care",
        "text": "Resume normal activity with a heart-healthy lifestyle. Follow a low-saturated-fat, low-salt diet. Attend annual cardiac reviews. Contact Dr. Sharma's team immediately for fever above 38.5°C, wound discharge, sudden chest pain, or irregular heartbeat. Call +91-7231044444."
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
