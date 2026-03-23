import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Merci ! — VoiceAI Restaurant',
  description: 'Votre demande a bien été reçue.',
  robots: { index: false },
}

export default function MerciPage() {
  return (
    <>
      <header className="bg-white border-b border-slate-100">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center">
          <Link href="/" className="font-bold text-xl text-[#4F46E5]">VoiceAI</Link>
        </nav>
      </header>
      <main className="flex-1 flex items-center justify-center bg-slate-50 px-4 py-20">
        <div className="max-w-lg text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">Merci pour votre demande !</h1>
          <p className="text-slate-500 mb-10">Un membre de notre équipe vous contacte sous{' '}<strong className="text-[#0F172A]">24h ouvrées</strong>.</p>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 text-left">
            <h2 className="font-semibold text-[#0F172A] mb-3">Et maintenant ?</h2>
            <ol className="space-y-2 text-sm text-slate-500">
              <li className="flex gap-3"><span className="w-5 h-5 rounded-full bg-[#4F46E5] text-white flex-shrink-0 flex items-center justify-center text-xs font-bold">1</span>Notre équipe analyse votre demande</li>
              <li className="flex gap-3"><span className="w-5 h-5 rounded-full bg-[#4F46E5] text-white flex-shrink-0 flex items-center justify-center text-xs font-bold">2</span>Nous vous appelons pour un point de 15 min</li>
              <li className="flex gap-3"><span className="w-5 h-5 rounded-full bg-[#4F46E5] text-white flex-shrink-0 flex items-center justify-center text-xs font-bold">3</span>Votre agent est déployé en 48h</li>
            </ol>
          </div>
          <Link href="/" className="inline-block bg-[#4F46E5] hover:bg-[#3730A3] text-white font-semibold px-8 py-3 rounded-xl transition-colors">Retour à l&apos;accueil</Link>
        </div>
      </main>
      <footer className="bg-[#0F172A] text-slate-400 py-8"><div className="max-w-6xl mx-auto px-4 text-center text-sm">© {new Date().getFullYear()} VoiceAI</div></footer>
    </>
  )
}
