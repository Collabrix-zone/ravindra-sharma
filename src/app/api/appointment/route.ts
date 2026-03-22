import { NextResponse } from 'next/server'
import { sanityWriteClient } from '@/lib/sanityWrite'
import { sendWhatsAppTemplate } from '@/lib/whatsapp'

const NOTIFY_NUMBER = '917976296019'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, issue } = body

    if (!name || !phone || !issue) {
      return NextResponse.json({ error: 'Name, phone, and condition are required' }, { status: 400 })
    }

    // Save to Sanity
    const doc = await sanityWriteClient.create({
      _type: 'appointmentRequest',
      name,
      phone,
      email: email || undefined,
      condition: issue,
      submittedAt: new Date().toISOString(),
      status: 'new',
    })

    // Send WhatsApp notification using hello_world template (for testing)
    // Replace with custom template once approved
    sendWhatsAppTemplate({
      to: NOTIFY_NUMBER,
      templateName: 'hello_world',
    })

    return NextResponse.json({ success: true, id: doc._id })
  } catch {
    return NextResponse.json({ error: 'Failed to submit appointment request' }, { status: 500 })
  }
}
