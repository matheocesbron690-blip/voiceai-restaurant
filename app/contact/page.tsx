import type { Metadata } from 'next'
import Link from 'next/link'
import { submitContact } from '../actions'

export const metadata: Metadata = {
  title: 'Contact — VoiceAI Restaurant',
  description: 'Contactez-nous pour déployer votre agent IA vocal en 48h.',
}

export default function ContactPage() {
  return (
    <>
      <header className="bg-white border-b border-slate-100">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-[#4F46E5]">VoiceAI</Link>
        </nav>
      </header>
      <main className="flex-1 bg-slate-50 py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="text-sm text-slate-500 hover:text-[#4F46E5] transition-colors">← Retour à l&apos;accueil</Link>
          </div>
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">Parlons de votre restaurant</h1>
            <p className="text-slate-500">Remplissez ce formulaire et nous vous recontactons sous 24h ouvrées.</p>
          </div>
          <form action={submitContact} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-6" noValidate>
            <div>
              <label htmlFor="restaurant" className="block text-sm font-medium text-slate-700 mb-1.5">Nom du restaurant <span aria-hidden="true">*</span></label>
              <input id="restaurant" name="restaurant" type="text" required autoComplete="organization" placeholder="Le Petit Bistrot" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email <span aria-hidden="true">*</span></label>
              <input id="email" name="email" type="email" required autoComplete="email" placeholder="contact@restaurant.fr" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-sm" />
            </div>
            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-slate-700 mb-1.5">Téléphone <span aria-hidden="true">*</span></label>
              <input id="telephone" name="telephone" type="tel" required autoComplete="tel" placeholder="+33 6 12 34 56 78" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-sm" />
            </div>
            <div>
              <label htmlFor="couverts" className="block text-sm font-medium text-slate-700 mb-1.5">Nombre de couverts</label>
              <select id="couverts" name="couverts" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-sm bg-white">
                <option value="">Sélectionner…</option>
                <option value="1-30">Moins de 30 couverts</option>
                <option value="30-60">30 à 60 couverts</option>
                <option value="60-100">60 à 100 couverts</option>
                <option value="100+">Plus de 100 couverts</option>
              </select>
            </div>
            <div className="flex items-start gap-3">
              <input id="rgpd" name="rgpd" type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-[#4F46E5]" />
              <label htmlFor="rgpd" className="text-sm text-slate-500 leading-relaxed">J&apos;accepte que mes données soient utilisées pour me recontacter. <span aria-hidden="true">*</span></label>
            </div>
            <button type="submit" className="w-full bg-[#4F46E5] hover:bg-[#3730A3] text-white font-semibold py-3 rounded-xl transition-colors">Envoyer →</button>
          </form>
        </div>
      </main>
      <footer className="bg-[#0F172A] text-slate-400 py-8"><div className="max-w-6xl mx-auto px-4 text-center text-sm">© {new Date().getFullYear()} VoiceAI</div></footer>
    </>
  )
}
