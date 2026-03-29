/**
 * Migration script: Populates Sanity CMS with all hardcoded website content.
 *
 * Usage: npx tsx scripts/migrate-to-sanity.ts
 *
 * Requires: SANITY_API_TOKEN, NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET
 * in .env.local
 */

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import { resolve } from 'path'

dotenv.config({ path: resolve(process.cwd(), '.env.local') })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
})

async function migrate() {
  console.log('Starting Sanity content migration...\n')

  // ─── Services ───
  console.log('📋 Migrating services...')
  const services = [
    {
      _type: 'service',
      title: 'Coronary Artery Bypass Graft (CABG)',
      subtitle: 'Beating Heart Technique',
      description: 'Dr. Sharma specializes in off-pump CABG (beating heart surgery), where 75% of his ~5,000 CABG surgeries are performed on a beating heart. This advanced technique reduces complications, minimizes blood transfusion needs, and accelerates recovery compared to conventional on-pump surgery.',
      highlights: ['~5,000 CABG surgeries performed', '75% beating heart technique', 'Reduced recovery time', 'Lower complication rates'],
      color: '#C41E3A',
      order: 1,
    },
    {
      _type: 'service',
      title: 'Valvular Reparative & Replacement Surgery',
      subtitle: 'Repair-First Approach',
      description: 'Comprehensive management of all valvular heart diseases including mitral, aortic, tricuspid, and pulmonary valve disorders. Dr. Sharma follows a repair-first philosophy, preserving native valve tissue whenever possible, and uses the latest prosthetic valves when replacement is necessary.',
      highlights: ['Mitral valve repair & replacement', 'Aortic valve surgery', 'Tricuspid valve procedures', 'Biological & mechanical options'],
      color: '#D4AF37',
      order: 2,
    },
    {
      _type: 'service',
      title: 'Aortic Surgery',
      subtitle: 'Complex Aortic Reconstruction',
      description: 'Treatment of aortic aneurysms and aortic dissections requires exceptional skill and experience. Dr. Sharma performs complex aortic root procedures, ascending aorta replacements, and arch reconstructions, combining technical precision with state-of-the-art cerebral protection strategies.',
      highlights: ['Aortic aneurysm repair', 'Aortic dissection surgery', 'Aortic root replacement', 'Arch reconstruction'],
      color: '#60A5FA',
      order: 3,
    },
    {
      _type: 'service',
      title: 'Minimally Invasive Cardiac Surgery',
      subtitle: 'Smaller Incisions, Faster Recovery',
      description: 'Using small incisions and advanced video-assisted techniques, minimally invasive cardiac surgery offers patients significantly reduced pain, shorter hospital stays, faster return to normal activities, and excellent cosmetic results — without compromising on surgical outcomes.',
      highlights: ['Mini-thoracotomy approach', 'Reduced hospital stay', 'Less post-op pain', 'Faster return to activity'],
      color: '#34D399',
      order: 4,
    },
    {
      _type: 'service',
      title: 'Peripheral Vascular Surgery',
      subtitle: 'Comprehensive Vascular Care',
      description: 'Management of peripheral arterial disease, carotid artery disease, and venous disorders affecting the limbs and major vessels. Procedures include bypass surgeries, endarterectomies, and endovascular interventions to restore normal blood flow and prevent limb loss.',
      highlights: ['Carotid endarterectomy', 'Peripheral bypass surgery', 'Varicose vein treatment', 'Aneurysm repair'],
      color: '#A78BFA',
      order: 5,
    },
    {
      _type: 'service',
      title: 'Congenital Heart Surgery',
      subtitle: 'Correcting Birth Defects',
      description: 'Surgical correction of congenital heart defects in children and adults, including atrial and ventricular septal defects (ASD/VSD), tetralogy of Fallot, patent ductus arteriosus, and other structural abnormalities. Dr. Sharma\'s vast experience ensures optimal outcomes for these complex cases.',
      highlights: ['ASD & VSD closure', 'Tetralogy of Fallot repair', 'PDA ligation', 'Complex reconstructions'],
      color: '#F472B6',
      order: 6,
    },
    {
      _type: 'service',
      title: 'Lung Surgery',
      subtitle: 'Thoracic Surgical Care',
      description: 'Comprehensive thoracic surgery for lung conditions including lung cancer, pleural diseases, chest wall tumors, and mediastinal masses. Dr. Sharma performs lobectomies, pneumonectomies, decortications, and other thoracic procedures with precision and extensive experience.',
      highlights: ['Lung cancer surgery', 'Lobectomy & pneumonectomy', 'Pleural disease management', 'Chest wall procedures'],
      color: '#38BDF8',
      order: 7,
    },
  ]
  for (const s of services) {
    await client.create(s)
    console.log(`  ✓ ${s.title}`)
  }

  // ─── Doctor Profile ───
  console.log('\n👨‍⚕️ Migrating doctor profile...')
  await client.create({
    _type: 'doctorProfile',
    name: 'Dr. Ravindra Kumar Sharma',
    title: 'Director, Cardiothoracic and Vascular Surgery (CTVS)',
    hospital: 'Eternal Hospital, Jaipur',
    bio: 'Dr. Ravindra Kumar Sharma is the Director of Cardiothoracic and Vascular Surgery (CTVS) at Eternal Hospital, Jaipur. With over 44 years of medical experience and 25 years as an independent cardiac surgeon, he has transformed the landscape of cardiac care in Rajasthan.',
    bioExtended: 'Having performed approximately 7,000 open heart surgeries — including ~5,000 Coronary Artery Bypass Surgeries (75% on beating heart) and ~2,000 valve/congenital heart surgeries — Dr. Sharma brings unparalleled expertise to every patient.',
    qualifications: [
      { _key: 'q1', year: '1981', degree: 'MBBS', institution: 'J.L.N. Medical College, Ajmer' },
      { _key: 'q2', year: '1985', degree: 'MS (General Surgery)', institution: 'J.L.N. Medical College, Ajmer' },
      { _key: 'q3', year: '1992', degree: 'MCh (Thoracic Surgery)', institution: 'C.M.C. Hospital, Vellore' },
    ],
    highlights: [
      '44+ years of total medical experience',
      '25 years as an independent cardiac surgeon',
      'Trained under Dr. N. Trehan at Escorts Heart Institute, New Delhi',
      'Trained under Prof. Stanley John at CMC Vellore',
      'International exposure at University Hospital Uppsala, Sweden',
      '~7,000 open heart surgeries performed',
      'Expert in minimally invasive cardiac procedures',
    ],
    stats: [
      { _key: 's1', label: 'Open Heart Surgeries', value: '7,000+' },
      { _key: 's2', label: 'Years Experience', value: '44+' },
      { _key: 's3', label: 'CABG Surgeries', value: '5,000+' },
      { _key: 's4', label: 'Valve Surgeries', value: '2,000+' },
    ],
    internationalExposure: [
      'University Hospital Uppsala, Sweden',
    ],
  })
  console.log('  ✓ Dr. Ravindra Kumar Sharma')

  // ─── FAQs ───
  console.log('\n❓ Migrating FAQs...')
  const faqs = [
    {
      _type: 'faq',
      question: 'What is bypass surgery (CABG) and when is it needed?',
      answer: 'Coronary Artery Bypass Grafting (CABG) is a surgical procedure that creates new pathways for blood to flow to the heart muscle, bypassing blocked or narrowed arteries. It is recommended when one or more coronary arteries are severely blocked and other treatments like medications or angioplasty are not sufficient. Dr. Sharma performs 75% of CABG surgeries on a beating heart, reducing risks significantly.',
      order: 1,
      published: true,
    },
    {
      _type: 'faq',
      question: 'What is the recovery time after open heart surgery?',
      answer: 'Most patients can walk short distances within 1-2 days of surgery and are discharged within 5-7 days. Full recovery typically takes 6-12 weeks. With beating heart CABG techniques used by Dr. Sharma, recovery is often faster and with fewer complications.',
      order: 2,
      published: true,
    },
    {
      _type: 'faq',
      question: 'Is minimally invasive cardiac surgery available for all patients?',
      answer: 'Minimally invasive techniques are suitable for many but not all patients. Suitability depends on the type and complexity of the cardiac condition, overall health, and anatomy. Dr. Sharma evaluates each patient individually and recommends the safest and most effective approach.',
      order: 3,
      published: true,
    },
    {
      _type: 'faq',
      question: 'What are the signs that you need to see a cardiac surgeon?',
      answer: 'You should consult a cardiac surgeon if you have been diagnosed with: significant coronary artery disease not treatable by stenting, severe valve disease, aortic aneurysm, or congenital heart defects. Symptoms like persistent chest pain, shortness of breath, or palpitations warrant immediate evaluation.',
      order: 4,
      published: true,
    },
    {
      _type: 'faq',
      question: 'How do I book a consultation with Dr. R.K. Sharma?',
      answer: 'You can book an appointment by calling +91-7231044444 or 0141-3120000, through the appointment form on this website, or by visiting Eternal Hospital, Near Airport Circle, Sanganer, Jaipur. OPD hours are Monday to Saturday, 10:00 AM - 4:00 PM.',
      order: 5,
      published: true,
    },
  ]
  for (const f of faqs) {
    await client.create(f)
    console.log(`  ✓ ${f.question.slice(0, 50)}...`)
  }

  // ─── Site Settings ───
  console.log('\n⚙️ Migrating site settings...')
  await client.create({
    _type: 'siteSettings',
    phone: '+91-7231044444',
    address: 'Eternal Hospital, Near Airport Circle, Sanganer, Jaipur 302011',
    opdSchedule: 'Monday - Saturday: 10:00 AM - 4:00 PM',
  })
  console.log('  ✓ Site settings')

  // ─── Page Content ───
  console.log('\n📄 Migrating page content...')
  const pages = [
    {
      _type: 'pageContent',
      page: 'home',
      heroTagline: 'Director, CTVS — Eternal Hospital, Jaipur',
      heroHeading: 'Dr. Ravindra Kumar Sharma',
      heroSubheading: "Rajasthan's most trusted cardiac surgeon. 44+ years of excellence · 7,000+ lives saved",
      sectionHeading: 'Cardiac Surgery Services',
      sectionDescription: 'World-class cardiac care with 44+ years of precision and compassion.',
      metaTitle: 'Dr. Ravindra Kumar Sharma | Best Cardiac Surgeon in Jaipur',
      metaDescription: 'Director of CTVS at Eternal Hospital Jaipur. 44+ years experience & 7,000+ open heart surgeries. Off-pump CABG specialist.',
    },
    {
      _type: 'pageContent',
      page: 'about',
      heroTagline: 'About the Doctor',
      heroHeading: 'Dr. Ravindra Kumar Sharma',
      heroSubheading: "Director, Cardiothoracic and Vascular Surgery (CTVS) at Eternal Hospital, Jaipur — one of India's most experienced cardiac surgeons with over four decades of excellence.",
      sectionHeading: 'Career Journey',
      sectionDescription: 'Four decades of dedication to cardiac surgery',
      metaTitle: 'About Dr. Ravindra Kumar Sharma',
      metaDescription: 'Director CTVS, Eternal Hospital Jaipur. Trained at CMC Vellore & Uppsala Sweden. 44+ years experience, 7,000+ heart surgeries.',
    },
    {
      _type: 'pageContent',
      page: 'services',
      heroTagline: 'Specializations',
      heroHeading: 'Cardiac Surgery Services',
      heroSubheading: 'World-class cardiac care by Dr. Ravindra Kumar Sharma — from bypass surgery to minimally invasive procedures.',
      metaTitle: 'Cardiac Surgery Services in Jaipur',
      metaDescription: 'Cardiac surgery services by Dr. Ravindra Kumar Sharma: CABG, valve surgery, aortic surgery, lung surgery, minimally invasive & congenital heart surgery.',
    },
    {
      _type: 'pageContent',
      page: 'contact',
      heroHeading: 'Contact Dr. Sharma',
      heroSubheading: 'Reach out to schedule a consultation or learn more about cardiac surgery services.',
      metaTitle: 'Contact Dr. Ravindra Kumar Sharma',
      metaDescription: 'Contact Dr. Ravindra Kumar Sharma at Eternal Hospital Jaipur. OPD Mon-Sat 10 AM-4 PM. Call +91-7231044444.',
    },
  ]
  for (const p of pages) {
    await client.create(p)
    console.log(`  ✓ ${p.page} page`)
  }

  // ─── Testimonials (placeholder for when Google reviews aren't available) ───
  console.log('\n⭐ Migrating testimonials...')
  const testimonials = [
    {
      _type: 'testimonial',
      name: 'Rajesh Kumar',
      location: 'Jaipur',
      rating: 5,
      review: 'Dr. Sharma performed my bypass surgery with exceptional skill. The beating heart technique meant faster recovery. I was back to normal life within weeks. Highly recommended!',
      approved: true,
    },
    {
      _type: 'testimonial',
      name: 'Meena Devi',
      location: 'Jodhpur',
      rating: 5,
      review: 'My father needed urgent valve replacement surgery. Dr. Sharma and his team at Eternal Hospital were incredibly professional and caring. The surgery was successful and my father recovered well.',
      approved: true,
    },
    {
      _type: 'testimonial',
      name: 'Suresh Agarwal',
      location: 'Jaipur',
      rating: 5,
      review: 'Excellent cardiac surgeon with decades of experience. Dr. Sharma explained every aspect of the procedure clearly and made us feel confident. The care at Eternal Hospital was outstanding.',
      approved: true,
    },
  ]
  for (const t of testimonials) {
    await client.create(t)
    console.log(`  ✓ ${t.name}`)
  }

  console.log('\n✅ Migration complete! All content is now in Sanity CMS.')
  console.log('\nYou can view and edit all content at: your-site.com/studio')
}

migrate().catch((err) => {
  console.error('Migration failed:', err)
  process.exit(1)
})
