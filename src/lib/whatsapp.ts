const WHATSAPP_API_URL = 'https://graph.facebook.com/v21.0'

interface SendTemplateParams {
  to: string
  templateName: string
  languageCode?: string
  bodyParams?: string[]
}

interface SendTextParams {
  to: string
  message: string
}

export async function sendWhatsAppTemplate({ to, templateName, languageCode = 'en_US', bodyParams }: SendTemplateParams) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID

  if (!token || !phoneNumberId) {
    console.warn('WhatsApp API not configured — skipping notification')
    return
  }

  const components: Array<Record<string, unknown>> = []
  if (bodyParams && bodyParams.length > 0) {
    components.push({
      type: 'body',
      parameters: bodyParams.map(text => ({ type: 'text', text })),
    })
  }

  try {
    const res = await fetch(`${WHATSAPP_API_URL}/${phoneNumberId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to,
        type: 'template',
        template: {
          name: templateName,
          language: { code: languageCode },
          ...(components.length > 0 ? { components } : {}),
        },
      }),
    })

    const result = await res.json()
    if (!res.ok) {
      console.error('WhatsApp API error:', JSON.stringify(result))
    } else {
      console.log('WhatsApp notification sent:', result)
    }
    return result
  } catch (err) {
    console.error('Failed to send WhatsApp notification:', err)
  }
}

export async function sendWhatsAppText({ to, message }: SendTextParams) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID

  if (!token || !phoneNumberId) {
    console.warn('WhatsApp API not configured — skipping notification')
    return
  }

  try {
    const res = await fetch(`${WHATSAPP_API_URL}/${phoneNumberId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to,
        type: 'text',
        text: { body: message },
      }),
    })

    const result = await res.json()
    if (!res.ok) {
      console.error('WhatsApp API error:', JSON.stringify(result))
    } else {
      console.log('WhatsApp text sent:', result)
    }
    return result
  } catch (err) {
    console.error('Failed to send WhatsApp notification:', err)
  }
}

export function formatContactNotification(data: {
  name: string
  email: string
  message: string
}) {
  return [
    '📩 *New Contact Inquiry*',
    '',
    `*Name:* ${data.name}`,
    `*Email:* ${data.email}`,
    `*Message:* ${data.message}`,
    '',
    `_Received at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}_`,
  ].join('\n')
}

export function formatAppointmentNotification(data: {
  name: string
  phone: string
  email?: string
  issue: string
}) {
  return [
    '🏥 *New Appointment Request*',
    '',
    `*Patient:* ${data.name}`,
    `*Phone:* ${data.phone}`,
    data.email ? `*Email:* ${data.email}` : '',
    `*Condition:* ${data.issue}`,
    '',
    `_Received at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}_`,
  ].filter(Boolean).join('\n')
}
