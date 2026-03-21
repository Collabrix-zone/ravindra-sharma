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
        "name": "ICU and Hospital Stay (Days 1–7)",
        "text": "Spend 1–2 days in the ICU connected to a ventilator, heart monitors, and IV lines. Once stable, move to the cardiac ward. Physiotherapists help you sit up, stand, and take first steps by day 2 or 3. Most patients are discharged within 5–7 days."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "First Two Weeks at Home",
        "text": "Rest is important but avoid prolonged bed rest — take short walks around the house. Keep the chest incision clean and dry, watch for infection signs. Follow prescribed pain medication. No driving for 4–6 weeks and no lifting anything heavier than 2 kg."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Weeks 3–6: Gradually Increasing Activity",
        "text": "Begin cardiac rehabilitation exercises as advised by your doctor. Slowly increase walking distance each day. Light household activities are permitted. Avoid excessive stair climbing in the first few weeks."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "2–3 Months: Return to Normal Life",
        "text": "Most patients can return to office work at 6–8 weeks, driving at 4–6 weeks (once off strong pain medications), sexual activity at 4–6 weeks, and full physical activity by 3 months."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Long-Term Recovery and Follow-Up",
        "text": "Follow a low-saturated-fat, low-salt diet with plenty of fruits, vegetables, and whole grains. Attend follow-up appointments at 1 week, 1 month, 3 months, and annually. Contact Dr. Sharma's team immediately for fever above 38.5°C, wound discharge, sudden chest pain, or irregular heartbeat."
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
