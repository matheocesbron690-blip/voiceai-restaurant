import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { nom, prenom, email, telephone, restaurant, couverts, message } = body

  if (!nom || !prenom || !email || !telephone || !restaurant) {
    return NextResponse.json({ error: 'Champs obligatoires manquants.' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'VoiceAI <onboarding@resend.dev>',
    to: 'matheocesbron690@gmail.com',
    replyTo: email,
    subject: `Nouvelle demande — ${restaurant}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <h2 style="color:#4F46E5;margin-bottom:24px">Nouvelle demande de démo VoiceAI</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr style="border-bottom:1px solid #e2e8f0">
            <td style="padding:10px 0;color:#64748b;width:40%">Prénom</td>
            <td style="padding:10px 0;font-weight:600">${prenom}</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0">
            <td style="padding:10px 0;color:#64748b">Nom</td>
            <td style="padding:10px 0;font-weight:600">${nom}</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0">
            <td style="padding:10px 0;color:#64748b">Email</td>
            <td style="padding:10px 0;font-weight:600"><a href="mailto:${email}" style="color:#4F46E5">${email}</a></td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0">
            <td style="padding:10px 0;color:#64748b">Téléphone</td>
            <td style="padding:10px 0;font-weight:600">${telephone}</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0">
            <td style="padding:10px 0;color:#64748b">Restaurant</td>
            <td style="padding:10px 0;font-weight:600">${restaurant}</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0">
            <td style="padding:10px 0;color:#64748b">Couverts</td>
            <td style="padding:10px 0;font-weight:600">${couverts || '—'}</td>
          </tr>
          ${message ? `<tr><td style="padding:10px 0;color:#64748b;vertical-align:top">Message</td><td style="padding:10px 0;font-weight:600;white-space:pre-wrap">${message}</td></tr>` : ''}
        </table>
        <p style="margin-top:32px;color:#94a3b8;font-size:12px">
          Soumis le ${new Date().toLocaleString('fr-FR')} • VoiceAI Restaurant
        </p>
      </div>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: "Erreur lors de l'envoi de l'email." }, { status: 500 })
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, prenom, email, telephone, restaurant, couverts, message, date: new Date().toISOString() }),
      })
    } catch {}
  }

  return NextResponse.json({ success: true })
}
