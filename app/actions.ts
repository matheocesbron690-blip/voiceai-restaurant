'use server'

import { redirect } from 'next/navigation'

export async function submitContact(formData: FormData) {
  const restaurant = formData.get('restaurant') as string
  const email = formData.get('email') as string
  const telephone = formData.get('telephone') as string
  const couverts = formData.get('couverts') as string
  const rgpd = formData.get('rgpd')

  if (!restaurant || !email || !telephone || !rgpd) return

  const webhookUrl = process.env.N8N_WEBHOOK_URL
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ restaurant, email, telephone, couverts, date: new Date().toISOString(), source: 'landing_page' }),
      })
    } catch {}
  }

  redirect('/merci')
}
