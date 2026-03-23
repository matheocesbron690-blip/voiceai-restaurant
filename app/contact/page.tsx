import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '../components/ContactForm'

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
          <ContactForm />
        </div>
      </main>
      <footer className="bg-[#0F172A] text-slate-400 py-8"><div className="max-w-6xl mx-auto px-4 text-center text-sm">© {new Date().getFullYear()} VoiceAI</div></footer>
    </>
  )
}
