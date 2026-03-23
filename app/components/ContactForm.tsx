'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const INPUT =
  'w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-sm'

export default function ContactForm() {
  const router = useRouter()
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setPending(true)

    const form = e.currentTarget
    const data = {
      prenom: (form.elements.namedItem('prenom') as HTMLInputElement).value,
      nom: (form.elements.namedItem('nom') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      telephone: (form.elements.namedItem('telephone') as HTMLInputElement).value,
      restaurant: (form.elements.namedItem('restaurant') as HTMLInputElement).value,
      couverts: (form.elements.namedItem('couverts') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error || 'Erreur inconnue')
      }

      router.push('/merci')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue. Réessayez.')
      setPending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-slate-700 mb-1.5">Prénom <span aria-hidden="true">*</span></label>
          <input id="prenom" name="prenom" type="text" required autoComplete="given-name" placeholder="Jean" className={INPUT} />
        </div>
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-slate-700 mb-1.5">Nom <span aria-hidden="true">*</span></label>
          <input id="nom" name="nom" type="text" required autoComplete="family-name" placeholder="Dupont" className={INPUT} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email professionnel <span aria-hidden="true">*</span></label>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="contact@restaurant.fr" className={INPUT} />
      </div>
      <div>
        <label htmlFor="telephone" className="block text-sm font-medium text-slate-700 mb-1.5">Téléphone <span aria-hidden="true">*</span></label>
        <input id="telephone" name="telephone" type="tel" required autoComplete="tel" placeholder="+33 6 12 34 56 78" className={INPUT} />
      </div>
      <div>
        <label htmlFor="restaurant" className="block text-sm font-medium text-slate-700 mb-1.5">Nom du restaurant <span aria-hidden="true">*</span></label>
        <input id="restaurant" name="restaurant" type="text" required autoComplete="organization" placeholder="Le Petit Bistrot" className={INPUT} />
      </div>
      <div>
        <label htmlFor="couverts" className="block text-sm font-medium text-slate-700 mb-1.5">Nombre de couverts</label>
        <select id="couverts" name="couverts" className={`${INPUT} bg-white`}>
          <option value="">Sélectionner…</option>
          <option value="1-30">Moins de 30 couverts</option>
          <option value="30-60">30 à 60 couverts</option>
          <option value="60-100">60 à 100 couverts</option>
          <option value="100+">Plus de 100 couverts</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
        <textarea id="message" name="message" rows={4} placeholder="Décrivez vos besoins ou posez vos questions…" className={`${INPUT} resize-none`} />
      </div>
      <div className="flex items-start gap-3">
        <input id="rgpd" name="rgpd" type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-[#4F46E5]" />
        <label htmlFor="rgpd" className="text-sm text-slate-500 leading-relaxed">
          J&apos;accepte que mes données soient utilisées pour me recontacter conformément à notre politique de confidentialité. <span aria-hidden="true">*</span>
        </label>
      </div>
      {error && <p role="alert" className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg">{error}</p>}
      <button type="submit" disabled={pending} className="w-full bg-[#4F46E5] hover:bg-[#3730A3] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors">
        {pending ? 'Envoi en cours…' : 'Demander ma démo gratuite →'}
      </button>
      <p className="text-xs text-slate-400 text-center">Aucune carte bancaire requise. Réponse sous 24h.</p>
    </form>
  )
}
