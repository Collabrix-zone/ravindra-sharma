import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'

const posts: Record<string, { title: string; date: string; readTime: string; category: string; content: string }> = {
  'what-is-bypass-surgery': {
    title: 'What is Bypass Surgery (CABG)? A Complete Guide',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'Surgery Guide',
    content: `
## What is Coronary Artery Bypass Grafting (CABG)?

Coronary Artery Bypass Grafting, commonly called CABG or "bypass surgery," is one of the most commonly performed open-heart surgeries in the world. It is performed to treat coronary artery disease (CAD) — a condition where fatty plaques (atherosclerosis) block or narrow the arteries that supply blood to the heart muscle.

During CABG, a healthy blood vessel (graft) is taken from another part of the body — usually the leg (saphenous vein), chest wall (internal mammary artery), or arm (radial artery) — and used to create a new pathway around the blocked artery. This restores adequate blood flow to the heart muscle.

## Who Needs Bypass Surgery?

CABG is typically recommended when:

- **Severe blockages** are present in multiple coronary arteries (double or triple vessel disease)
- The **left main coronary artery** is significantly blocked
- **Angioplasty and stenting** have failed or are not technically feasible
- The patient has **diabetes** combined with multi-vessel coronary disease
- There is **reduced heart function** (low ejection fraction) along with coronary disease

## The Beating Heart Technique — Dr. Sharma's Specialty

Traditional bypass surgery is performed with the heart stopped and the patient on a heart-lung machine (cardiopulmonary bypass). While effective, this carries risks including stroke, cognitive effects, and kidney issues.

Dr. Sharma performs **75% of his CABG surgeries on a beating heart** (off-pump CABG), where the heart continues to beat throughout surgery using specialized stabilizers. Benefits include:

- Reduced risk of stroke and cognitive decline
- Less blood transfusion requirement
- Faster recovery and shorter hospital stay
- Lower complication rates, especially in elderly patients

With over **5,000 CABG surgeries** performed, Dr. Sharma is one of the most experienced bypass surgeons in Rajasthan.

## What to Expect

**Before surgery:** Patients undergo thorough investigations including angiography, echocardiogram, and blood work.

**Surgery duration:** 3–5 hours depending on the number of grafts.

**Hospital stay:** 5–7 days for uncomplicated cases.

**Recovery:** Most patients return to light activities within 4–6 weeks and full activity by 3 months.

## Book a Consultation

If you have been told you need bypass surgery, or have symptoms of coronary artery disease, consult Dr. R.K. Sharma at Eternal Hospital, Jaipur. Call **+91-7231044444** or visit during OPD hours: Monday–Saturday, 10:00 AM – 4:00 PM.
    `,
  },
  'signs-you-need-a-cardiac-surgeon': {
    title: '10 Signs You Need to See a Cardiac Surgeon',
    date: 'January 8, 2025',
    readTime: '6 min read',
    category: 'Patient Education',
    content: `
## When to Consult a Cardiac Surgeon

Many people assume that heart problems require a cardiologist, not a surgeon. However, certain conditions can only be effectively treated through surgery. Here are 10 signs that you should consult a cardiac surgeon like Dr. R.K. Sharma.

### 1. Severe Coronary Artery Disease (Multiple Blocked Arteries)
If your angiography shows significant blockages in two or more coronary arteries, or in the left main artery, surgery may be the best option — especially if stenting is not feasible.

### 2. Failed Angioplasty or Stenting
If you have had a stent placed that has re-narrowed (in-stent restenosis), or if stenting was not technically possible, bypass surgery may be recommended.

### 3. Severe Valve Disease
Symptoms like breathlessness, chest pain, or fainting from mitral or aortic valve disease often indicate the need for valve repair or replacement surgery.

### 4. Aortic Aneurysm
A bulge in the aorta above a certain size needs surgical repair before it ruptures — a life-threatening emergency.

### 5. Congenital Heart Defects
Holes in the heart (ASD, VSD), tetralogy of Fallot, and other structural defects diagnosed in childhood or adulthood require surgical correction.

### 6. Persistent Chest Pain Despite Medication
If chest pain (angina) persists despite maximum medical therapy and angioplasty options are limited, surgery can provide lasting relief.

### 7. Breathlessness That is Getting Worse
Progressive shortness of breath, especially with mild exertion or at rest, may signal deteriorating heart function that requires surgical intervention.

### 8. Heart Failure with Correctable Cause
Some causes of heart failure — like a leaking valve or blocked coronary arteries — can be surgically corrected, potentially restoring normal heart function.

### 9. Your Cardiologist Has Recommended Surgery
If your cardiologist has referred you to a cardiac surgeon, take that advice seriously. A second surgical opinion is always appropriate.

### 10. Your Symptoms Are Affecting Quality of Life
If heart disease is preventing you from doing activities you love — walking, working, caring for family — surgery may offer life-changing improvement.

## Consult Dr. R.K. Sharma

With 44+ years of experience and 7,000+ surgeries, Dr. Sharma offers expert evaluation and second opinions. Call **+91-7231044444** or book online.
    `,
  },
  'recovery-after-open-heart-surgery': {
    title: 'Recovery After Open Heart Surgery: What to Expect',
    date: 'December 22, 2024',
    readTime: '10 min read',
    category: 'Recovery',
    content: `
## Recovery After Open Heart Surgery

Recovery from open heart surgery is a gradual process that takes weeks to months. Understanding what to expect at each stage helps patients and families prepare mentally and physically.

## In the Hospital (Days 1–7)

**Intensive Care Unit (ICU):** Most patients spend 1–2 days in the ICU after surgery. You will be connected to a breathing machine (ventilator), heart monitors, and IV lines. The nursing team will monitor you closely.

**Moving to ward:** Once stable, you will be moved to the cardiac ward. Physiotherapists will help you sit up, stand, and take your first steps — usually by day 2 or 3.

**Discharge:** Most uncomplicated bypass surgery patients go home within 5–7 days.

## First Two Weeks at Home

- **Rest is important** but avoid prolonged bed rest — short walks around the house are encouraged
- **Wound care:** Keep the chest incision clean and dry; watch for signs of infection (redness, discharge, fever)
- **Pain management:** Some discomfort at the incision site is normal; follow prescribed pain medication schedule
- **No driving** for at least 4–6 weeks
- **No lifting** anything heavier than 2 kg

## Weeks 3–6: Gradually Increasing Activity

- Begin **cardiac rehabilitation** exercises as advised by your doctor
- Slowly increase walking distance each day
- Light household activities are permitted
- Avoid stairs excessively in the first few weeks

## 2–3 Months: Return to Normal Life

Most patients can return to:
- **Office work:** 6–8 weeks
- **Driving:** 4–6 weeks (once off strong pain medications)
- **Sexual activity:** 4–6 weeks (when comfortable)
- **Full physical activity:** 3 months

## Diet After Heart Surgery

- Low saturated fat, low salt diet
- Increase fruits, vegetables, whole grains
- Stay well hydrated
- Limit alcohol; avoid completely initially

## When to Call Your Doctor

Contact Dr. Sharma's team immediately if you experience:
- Fever above 38.5°C
- Increasing redness or discharge from the wound
- Sudden chest pain or breathlessness
- Rapid or irregular heartbeat
- Swelling in legs

## Dr. Sharma's Post-Operative Care

Dr. Sharma and his team at Eternal Hospital provide comprehensive post-operative follow-up. Patients are seen at 1 week, 1 month, 3 months, and annually after discharge.

For any concerns during recovery, call the hospital at **+91-7231044444**.
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts[params.slug]
  if (!post) return {}
  return {
    title: `${post.title} | Dr. Ravindra Kumar Sharma – Cardiac Surgeon Jaipur`,
    description: post.content.slice(0, 155).replace(/[#\n]/g, ' ').trim(),
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]
  if (!post) notFound()

  const paragraphs = post.content.trim().split('\n').filter(Boolean)

  return (
    <main className="min-h-screen bg-[#080C18] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[#A0AEC0] hover:text-white font-inter text-sm mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="font-inter text-xs text-[#C41E3A] bg-[#C41E3A]/10 px-3 py-1 rounded-full">{post.category}</span>
          <span className="flex items-center gap-1 font-inter text-xs text-[#A0AEC0]"><Calendar className="w-3 h-3" />{post.date}</span>
          <span className="flex items-center gap-1 font-inter text-xs text-[#A0AEC0]"><Clock className="w-3 h-3" />{post.readTime}</span>
        </div>

        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">{post.title}</h1>

        <div className="flex items-center gap-3 mb-12 pb-8 border-b border-white/10">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C41E3A] to-[#D4AF37] flex items-center justify-center text-white font-playfair font-bold text-sm">RS</div>
          <div>
            <div className="font-inter text-sm font-semibold text-white">Dr. R.K. Sharma</div>
            <div className="font-inter text-xs text-[#A0AEC0]">Director, CTVS — Eternal Hospital, Jaipur</div>
          </div>
        </div>

        <div className="prose prose-invert prose-sm max-w-none space-y-4">
          {paragraphs.map((line, i) => {
            if (line.startsWith('## ')) return <h2 key={i} className="font-playfair text-3xl font-bold text-white mt-10 mb-4">{line.replace('## ', '')}</h2>
            if (line.startsWith('### ')) return <h3 key={i} className="font-playfair text-2xl font-bold text-[#D4AF37] mt-8 mb-3">{line.replace('### ', '')}</h3>
            if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="font-inter text-white font-semibold">{line.replace(/\*\*/g, '')}</p>
            if (line.startsWith('- ')) return <li key={i} className="font-inter text-[#A0AEC0] text-sm leading-relaxed list-disc ml-4">{line.replace('- ', '')}</li>
            return <p key={i} className="font-inter text-[#A0AEC0] text-sm leading-relaxed">{line}</p>
          })}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-[#C41E3A]/10 to-[#D4AF37]/10 border border-white/10 rounded-2xl">
          <h3 className="font-playfair text-2xl font-bold text-white mb-3">Consult Dr. R.K. Sharma</h3>
          <p className="font-inter text-[#A0AEC0] text-sm mb-6">Director, CTVS at Eternal Hospital, Jaipur. 44+ years experience. 7,000+ surgeries. OPD: Mon–Sat, 10 AM – 4 PM.</p>
          <a href="tel:+917231044444" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C41E3A] to-[#a01830] text-white font-inter font-semibold px-6 py-3 rounded-full text-sm transition-all hover:scale-105">
            Call +91-7231044444
          </a>
        </div>
      </div>
    </main>
  )
}
