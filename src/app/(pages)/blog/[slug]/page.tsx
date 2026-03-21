import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { BlogPostingSchema } from '@/components/seo/BlogPostingSchema'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { HowToSchema } from '@/components/seo/HowToSchema'
import { FAQSchema } from '@/components/seo/FAQSchema'

const posts: Record<string, { title: string; date: string; isoDate: string; readTime: string; category: string; content: string; description: string; faqs: { q: string; a: string }[] }> = {
  'what-is-bypass-surgery': {
    title: 'What is Bypass Surgery (CABG)? A Complete Guide',
    date: 'January 15, 2025',
    isoDate: '2025-01-15',
    readTime: '8 min read',
    category: 'Surgery Guide',
    description: 'Learn what coronary artery bypass grafting (CABG) involves, who needs it, and how Dr. R.K. Sharma\'s beating heart technique reduces risk. Call +91-7231044444 to consult.',
    faqs: [
      { q: 'What is CABG (bypass surgery)?', a: 'Coronary Artery Bypass Grafting (CABG) is an open-heart surgery where a healthy blood vessel from another part of the body is used to create a new pathway around a blocked coronary artery, restoring blood flow to the heart muscle.' },
      { q: 'Who needs bypass surgery?', a: 'CABG is recommended for patients with severe blockages in multiple coronary arteries, left main artery disease, failed angioplasty or stenting, diabetes with multi-vessel disease, or reduced heart function combined with coronary disease.' },
      { q: 'What is beating heart (off-pump) bypass surgery?', a: 'Beating heart CABG is performed while the heart continues to beat, without using a heart-lung machine. Dr. Sharma performs 75% of his CABG surgeries this way, which reduces the risk of stroke, cognitive decline, and blood transfusion.' },
      { q: 'How long does bypass surgery take?', a: 'Bypass surgery typically takes 3–5 hours depending on the number of grafts needed. Most patients stay in the hospital for 5–7 days and can return to full activity within 3 months.' },
      { q: 'How do I book a consultation for bypass surgery in Jaipur?', a: 'Call Dr. R.K. Sharma at Eternal Hospital, Jaipur on +91-7231044444. OPD hours are Monday–Saturday, 10:00 AM – 4:00 PM.' },
    ],
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
    isoDate: '2025-01-08',
    readTime: '6 min read',
    category: 'Patient Education',
    description: 'Persistent chest pain, severe valve disease, or failed stenting? Know the 10 warning signs that mean you should see a cardiac surgeon. Call Dr. R.K. Sharma at +91-7231044444.',
    faqs: [
      { q: 'When should I see a cardiac surgeon instead of a cardiologist?', a: 'You should see a cardiac surgeon when your condition requires surgical intervention — such as severe multi-vessel coronary disease, significant valve disease, aortic aneurysm, or congenital heart defects that cannot be managed with medication or angioplasty alone.' },
      { q: 'Can chest pain be a sign that I need heart surgery?', a: 'Yes. Persistent chest pain (angina) despite maximum medical therapy, especially when angioplasty options are limited, may indicate the need for bypass surgery or other cardiac surgical intervention.' },
      { q: 'What is the difference between a cardiologist and a cardiac surgeon?', a: 'A cardiologist diagnoses and treats heart conditions with medication and catheter-based procedures. A cardiac surgeon performs open-heart and minimally invasive surgical procedures such as CABG, valve repair/replacement, and aortic surgery.' },
      { q: 'Should I get a second opinion before heart surgery?', a: 'Yes, a second surgical opinion is always appropriate and recommended. Dr. R.K. Sharma offers expert evaluations and second opinions at Eternal Hospital, Jaipur.' },
    ],
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
    isoDate: '2024-12-22',
    readTime: '10 min read',
    category: 'Recovery',
    description: 'A complete week-by-week guide to recovery after open heart surgery — from ICU to returning to normal life. By Dr. R.K. Sharma, Eternal Hospital Jaipur. Call +91-7231044444.',
    faqs: [
      { q: 'How long does recovery take after open heart surgery?', a: 'Most patients are discharged within 5–7 days. Light activities can resume in 4–6 weeks, and full physical activity is typically possible by 3 months.' },
      { q: 'When can I drive after open heart surgery?', a: 'Most patients can resume driving 4–6 weeks after surgery, once they are off strong pain medications and can comfortably wear a seatbelt.' },
      { q: 'What diet should I follow after heart surgery?', a: 'Follow a low-saturated-fat, low-salt diet rich in fruits, vegetables, and whole grains. Stay well hydrated and avoid alcohol initially.' },
      { q: 'When should I call the doctor after heart surgery?', a: 'Contact your surgeon immediately if you experience fever above 38.5°C, increasing wound redness or discharge, sudden chest pain, breathlessness, rapid or irregular heartbeat, or leg swelling.' },
      { q: 'What follow-up care does Dr. Sharma provide?', a: 'Dr. Sharma and his team at Eternal Hospital provide comprehensive post-operative follow-up at 1 week, 1 month, 3 months, and annually after discharge. Call +91-7231044444 for any concerns.' },
    ],
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
  'beating-heart-cabg-vs-conventional': {
    title: 'Off-Pump (Beating Heart) CABG vs. Conventional Bypass Surgery',
    date: 'December 10, 2024',
    isoDate: '2024-12-10',
    readTime: '7 min read',
    category: 'Surgery Guide',
    description: 'Compare off-pump (beating heart) CABG with conventional on-pump bypass surgery. Dr. R.K. Sharma explains the benefits, risks, and outcomes. Call +91-7231044444 to consult.',
    faqs: [
      { q: 'What is off-pump (beating heart) CABG?', a: 'Off-pump CABG is bypass surgery performed while the heart continues to beat, without using a heart-lung machine. Specialized stabilizers hold the heart steady while the surgeon grafts new blood vessels around the blocked arteries.' },
      { q: 'Is beating heart surgery safer than conventional bypass?', a: 'For many patients, off-pump CABG carries lower risks of stroke, kidney injury, and cognitive decline because it avoids the heart-lung machine. However, both techniques are safe in experienced hands.' },
      { q: 'Who is a good candidate for off-pump CABG?', a: 'Most patients requiring bypass surgery are eligible for off-pump CABG. It is especially beneficial for elderly patients, those with kidney disease, calcified aorta, or prior stroke. Dr. Sharma evaluates each patient individually.' },
      { q: 'How many beating heart surgeries has Dr. Sharma performed?', a: 'Dr. Sharma performs 75% of his CABG surgeries on a beating heart. With over 5,000 total CABG surgeries across 44+ years, he is one of the most experienced off-pump surgeons in Rajasthan.' },
    ],
    content: `
## Off-Pump vs. On-Pump Bypass Surgery

Coronary artery bypass grafting (CABG) can be performed using two main techniques: conventional on-pump surgery using a heart-lung machine, or off-pump (beating heart) surgery where the heart continues to beat throughout the procedure. Dr. R.K. Sharma specialises in the beating heart technique and performs 75% of his CABG surgeries this way.

## How Conventional (On-Pump) CABG Works

In conventional bypass surgery, the heart is temporarily stopped using cardioplegia solution, and a heart-lung machine (cardiopulmonary bypass) takes over the functions of the heart and lungs during surgery. This provides a still, bloodless field for the surgeon to work on.

**Advantages of on-pump CABG:**
- Motionless surgical field for complex grafting
- Well-established technique with decades of data
- May be preferred for very complex multi-vessel disease

**Potential risks:**
- Stroke from micro-emboli during cannulation of the aorta
- Cognitive decline ("pump brain") in some patients
- Kidney injury from altered blood flow on the machine
- Systemic inflammatory response from blood contact with the machine circuit

## How Off-Pump (Beating Heart) CABG Works

In off-pump CABG, the heart continues to beat throughout surgery. The surgeon uses specialised mechanical stabilisers to hold a small area of the heart steady while creating the bypass graft. No heart-lung machine is used.

**Advantages of off-pump CABG:**
- Reduced risk of stroke and neurological complications
- Less blood transfusion requirement
- Lower incidence of kidney injury
- Shorter ICU and hospital stay
- Faster return to normal activities
- Reduced systemic inflammation

**When is off-pump preferred?**
- Elderly patients (above 70 years)
- Patients with kidney disease or borderline kidney function
- Patients with calcified or diseased aorta
- Patients with prior stroke or carotid disease
- Patients with chronic lung disease

## Dr. Sharma's Approach

Dr. Sharma evaluates every patient individually. His decision is based on the number and location of blockages, the quality of the target vessels, the patient's overall health, and risk factors. With over 5,000 CABG surgeries and 44+ years of experience, he selects the technique that offers the best outcome for each patient.

## Outcomes and Recovery

Both techniques produce excellent long-term results when performed by experienced surgeons. Off-pump patients may experience faster recovery, with many being discharged a day earlier and returning to normal activities sooner.

## Book a Consultation

If you have been advised bypass surgery, Dr. Sharma can explain which technique is best suited for your condition. Call **+91-7231044444** or visit Eternal Hospital, Near Airport Circle, Sanganer, Jaipur. OPD: Mon–Sat, 10 AM – 4 PM.
    `,
  },
  'valve-repair-vs-replacement': {
    title: 'Valve Repair vs. Valve Replacement: Which is Better?',
    date: 'November 28, 2024',
    isoDate: '2024-11-28',
    readTime: '6 min read',
    category: 'Surgery Guide',
    description: 'Heart valve repair vs. replacement — understand the differences, pros and cons, and how Dr. R.K. Sharma decides the best approach for each patient. Call +91-7231044444.',
    faqs: [
      { q: 'Is valve repair better than valve replacement?', a: 'Valve repair is generally preferred when feasible because it preserves the patient\'s own valve, avoids lifelong blood thinners (in most cases), and has lower long-term complication rates. However, not all valves can be repaired — severely damaged or calcified valves may need replacement.' },
      { q: 'What types of replacement valves are available?', a: 'There are two main types: mechanical valves (made of durable materials, last a lifetime but require lifelong blood thinners) and bioprosthetic valves (made from animal tissue, do not require long-term blood thinners but may need replacement after 10–15 years).' },
      { q: 'Which heart valves can be repaired?', a: 'The mitral valve is most commonly repaired. Tricuspid valve repair is also common. Aortic valve repair is possible in select cases but is technically more challenging. Dr. Sharma assesses each valve individually.' },
      { q: 'How long does valve surgery recovery take?', a: 'Most patients are discharged within 7–10 days after valve surgery. Full recovery typically takes 6–12 weeks, with most patients returning to normal activities by 2–3 months.' },
    ],
    content: `
## Understanding Heart Valve Surgery

Heart valve disease occurs when one or more of the heart's four valves do not function properly. The valves may become narrowed (stenosis), preventing adequate blood flow, or they may leak (regurgitation), allowing blood to flow backwards. When valve disease becomes severe, surgery is often the best treatment.

## When is Valve Surgery Needed?

Valve surgery is recommended when:
- Severe valve stenosis or regurgitation causes symptoms (breathlessness, fatigue, chest pain, fainting)
- Heart function is deteriorating due to the valve problem
- The valve defect is placing excessive strain on the heart, even if symptoms are mild
- Acute valve damage from infection (endocarditis) or heart attack

## Valve Repair: Preserving Your Own Valve

Valve repair involves reconstructing the patient's own valve to restore normal function. Techniques include:
- **Annuloplasty:** Tightening the valve ring with a supportive band
- **Leaflet repair:** Trimming, reshaping, or patching valve leaflets
- **Chordal repair:** Replacing or shortening broken support cords (chordae tendineae)
- **Commissurotomy:** Separating fused valve leaflets

**Advantages of repair:**
- Preserves the patient's own tissue
- Usually does not require lifelong blood thinners
- Lower risk of infection compared to artificial valves
- Better long-term survival in many studies

The mitral valve is most commonly repaired. Tricuspid valve repair is also frequently performed. Aortic valve repair is feasible in select patients.

## Valve Replacement: When Repair is Not Possible

When the valve is too damaged, calcified, or diseased to repair, it is replaced with a prosthetic valve. Two types are available:

**Mechanical valves:**
- Made from carbon and metal materials
- Extremely durable — can last a lifetime
- Require lifelong anticoagulation (blood thinners like warfarin)
- Often preferred for younger patients

**Bioprosthetic (tissue) valves:**
- Made from bovine (cow) or porcine (pig) heart tissue
- Do not require long-term blood thinners in most cases
- May wear out after 10–15 years, potentially requiring re-operation
- Often preferred for older patients or those who cannot take blood thinners

## Dr. Sharma's Approach

Dr. Sharma always attempts repair first when it is technically feasible and likely to produce a durable result. With experience in over 7,000 open-heart surgeries, he makes this decision intraoperatively after directly inspecting the valve.

For replacement, the choice between mechanical and tissue valves is a shared decision with the patient, considering age, lifestyle, ability to manage blood thinners, and patient preference.

## Book a Consultation

If you have been diagnosed with valve disease, consult Dr. R.K. Sharma for an expert evaluation. Call **+91-7231044444** or visit Eternal Hospital, Near Airport Circle, Sanganer, Jaipur. OPD: Mon–Sat, 10 AM – 4 PM.
    `,
  },
  'heart-healthy-diet-india': {
    title: 'Heart-Healthy Diet for Indians: Foods That Protect Your Heart',
    date: 'November 15, 2024',
    isoDate: '2024-11-15',
    readTime: '5 min read',
    category: 'Prevention',
    description: 'Evidence-based heart-healthy diet tips for Indians — which traditional foods help, what to avoid, and daily habits to prevent heart disease. By Dr. R.K. Sharma, Jaipur.',
    faqs: [
      { q: 'What is the best cooking oil for heart health in India?', a: 'Mustard oil, groundnut (peanut) oil, and rice bran oil are good choices for everyday Indian cooking. Olive oil is excellent for salads and low-heat cooking. Avoid reusing cooking oil and limit ghee, coconut oil, and palm oil.' },
      { q: 'Is ghee bad for the heart?', a: 'Ghee in moderation (1–2 teaspoons per day) is not harmful for most people. However, excessive ghee consumption raises LDL cholesterol. Patients with existing heart disease should limit ghee and prefer healthier oils.' },
      { q: 'Which Indian foods are good for the heart?', a: 'Dal, rajma, chana, fresh vegetables, seasonal fruits, oats, ragi, bajra, walnuts, almonds, flaxseeds, and fatty fish like rohu and surmai are all heart-friendly Indian foods.' },
      { q: 'Can diet alone prevent heart disease?', a: 'Diet is one of the most important factors, but heart disease prevention also requires regular exercise (30 minutes daily), not smoking, managing stress, and controlling blood pressure, sugar, and cholesterol with medical guidance.' },
      { q: 'How much salt should I eat daily for heart health?', a: 'The recommended limit is less than 5 grams (about 1 teaspoon) of salt per day. Most Indians consume nearly double this amount. Reduce papad, pickles, processed snacks, and avoid adding extra salt at the table.' },
    ],
    content: `
## Why Diet Matters for Heart Health

Heart disease is the leading cause of death in India, and poor dietary habits are a major contributing factor. The good news is that simple changes to your daily diet can significantly reduce your risk of heart disease — and many heart-protective foods are already part of traditional Indian cuisine.

## Foods That Protect Your Heart

### Whole Grains and Millets
- **Oats, ragi (finger millet), bajra (pearl millet), jowar (sorghum)** are rich in fibre, which helps lower cholesterol
- Replace refined flour (maida) with whole wheat atta
- Start your day with oats porridge or ragi dosa

### Pulses and Legumes
- **Dal, rajma, chana, moong** are excellent sources of plant protein and soluble fibre
- Include a serving of dal or legumes in every meal
- They help reduce LDL ("bad") cholesterol

### Fresh Fruits and Vegetables
- Aim for at least 5 servings of fruits and vegetables daily
- **Seasonal Indian fruits:** guava, papaya, pomegranate, amla (Indian gooseberry), banana
- **Vegetables:** palak (spinach), lauki (bottle gourd), karela (bitter gourd), tamatar (tomato), gajar (carrot)
- Rich in antioxidants, potassium, and fibre

### Healthy Fats
- **Walnuts, almonds, flaxseeds (alsi)** contain omega-3 fatty acids that protect the heart
- **Mustard oil and groundnut oil** are good choices for cooking
- **Olive oil** is excellent for salads and low-heat cooking
- Limit ghee, coconut oil, and dalda (vanaspati)

### Fish
- Fatty fish like **rohu, surmai, and bangda** are rich in omega-3 fatty acids
- Aim for 2 servings per week if you eat non-vegetarian food

## Foods to Limit or Avoid

- **Excessive salt:** Limit to less than 5 grams per day; reduce papad, pickles, and processed snacks
- **Refined sugar:** Limit sweets, sugary drinks, and mithai
- **Trans fats:** Avoid vanaspati (dalda), deep-fried street food, and commercially baked goods
- **Processed meats:** Sausages, salami, and bacon are linked to higher heart disease risk
- **Excessive ghee and butter:** Use sparingly, not liberally

## Simple Daily Habits

- Cook at home more often — restaurant and street food is typically high in salt, oil, and sugar
- Use less oil while cooking — air frying, steaming, and grilling are healthier methods
- Drink plenty of water — at least 8 glasses per day
- Include a handful of nuts as a daily snack
- Read food labels and check sodium and trans fat content
- Avoid skipping meals, especially breakfast

## The Role of Diet After Heart Surgery

Patients recovering from bypass surgery or valve surgery should follow a strict low-salt, low-fat diet as advised by their surgeon. Dr. Sharma's team at Eternal Hospital provides personalised dietary guidance as part of post-operative care.

## Consult Dr. R.K. Sharma

For a comprehensive cardiac evaluation and personalised heart health advice, call **+91-7231044444** or visit Eternal Hospital, Near Airport Circle, Sanganer, Jaipur. OPD: Mon–Sat, 10 AM – 4 PM.
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return {}
  return {
    title: `${post.title} | Dr. Ravindra Kumar Sharma – Cardiac Surgeon Jaipur`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  const paragraphs = post.content.trim().split('\n').filter(Boolean)

  return (
    <main className="min-h-screen bg-[#080C18] pt-32 pb-24">
      <BlogPostingSchema
        title={post.title}
        slug={slug}
        datePublished={post.isoDate}
        description={post.description}
      />
      <BreadcrumbSchema postTitle={post.title} slug={slug} />
      <FAQSchema faqs={post.faqs} />
      {slug === 'recovery-after-open-heart-surgery' && <HowToSchema />}

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
