import Link from 'next/link'
import { submitContact } from './actions'

export default function Home() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between" aria-label="Navigation principale">
          <span className="font-bold text-xl text-[#4F46E5]">VoiceAI</span>
          <Link href="#contact" className="bg-[#4F46E5] hover:bg-[#3730A3] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            Demander une démo
          </Link>
        </nav>
      </header>

      <main className="flex-1 pt-16">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1E1B4B] text-white">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-36 text-center">
            <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-indigo-500/30 text-indigo-300 rounded-full">Nouveau — Agent IA pour restaurants</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Un agent IA vocal pour{' '}<span className="text-indigo-400">votre restaurant</span>,{' '}disponible&nbsp;24h/24&nbsp;7j/7
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Fini les appels manqués. Votre agent répond, prend les réservations et synchronise votre agenda — même quand vous dormez.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="bg-[#4F46E5] hover:bg-[#3730A3] text-white font-semibold px-8 py-3 rounded-xl transition-colors">Démarrer gratuitement</Link>
              <Link href="#avantages" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-xl transition-colors">Voir comment ça marche</Link>
            </div>
          </div>
        </section>

        <section className="bg-[#4F46E5] text-white" aria-label="Chiffres clés">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[{value:'24h/24',label:'Disponibilité'},{value:'< 2s',label:'Temps de réponse'},{value:'98%',label:'Satisfaction client'},{value:'0€',label:'Pour démarrer'}].map(({value,label})=>(
              <div key={label}><p className="text-3xl font-extrabold">{value}</p><p className="text-sm text-indigo-200 mt-1">{label}</p></div>
            ))}
          </div>
        </section>

        <section id="avantages" className="py-20 sm:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">Tout ce dont votre restaurant a besoin</h2>
              <p className="text-slate-500 max-w-xl mx-auto">Votre agent vocal gère l&apos;essentiel pour que vous puissiez vous concentrer sur vos plats.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {icon:'📅',title:'Prise de RDV automatique',desc:"Vos clients réservent par téléphone à toute heure. L'agent gère les disponibilités et confirme instantanément."},
                {icon:'💬',title:'Réponses aux questions',desc:"Horaires, menu, allergènes, accès PMR… l'agent répond à toutes les questions fréquentes sans vous déranger."},
                {icon:'🗓️',title:'Agenda synchronisé',desc:'Toutes les réservations apparaissent en temps réel dans votre agenda. Zéro double booking.'}
              ].map(({icon,title,desc})=>(
                <article key={title} className="bg-slate-50 rounded-2xl p-8 hover:shadow-md transition-shadow">
                  <span className="text-4xl mb-4 block" role="img" aria-hidden="true">{icon}</span>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">Opérationnel en 48h</h2>
              <p className="text-slate-500">Simple, rapide, sans compétence technique.</p>
            </div>
            <ol className="grid sm:grid-cols-3 gap-8">
              {[
                {step:'01',title:'Remplissez le formulaire',desc:"Dites-nous comment s'appelle votre restaurant et comment vous joindre."},
                {step:'02',title:'On configure votre agent',desc:"Notre équipe paramètre votre agent selon vos horaires, menus et politiques."},
                {step:'03',title:"C'est parti !",desc:"Votre numéro est actif. Les clients appellent, l'agent répond."}
              ].map(({step,title,desc})=>(
                <li key={step} className="relative pl-14">
                  <span className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#4F46E5] text-white flex items-center justify-center font-bold text-sm">{step}</span>
                  <h3 className="font-bold text-[#0F172A] mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="tarifs" className="py-20 sm:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">Tarifs simples et transparents</h2>
              <p className="text-slate-500">Sans engagement. Sans surprise.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {[
                {name:'Starter',price:'79€',period:'/mois',desc:'Idéal pour démarrer',features:["Jusqu'à 200 appels/mois",'Prise de réservation','FAQ automatique','Support email'],cta:'Commencer',highlight:false},
                {name:'Pro',price:'149€',period:'/mois',desc:'Pour les restaurants actifs',features:['Appels illimités','Agenda multi-salle','SMS de confirmation','Support prioritaire'],cta:'Commencer',highlight:true}
              ].map(({name,price,period,desc,features,cta,highlight})=>(
                <article key={name} className={`rounded-2xl p-8 border-2 flex flex-col ${highlight?'border-[#4F46E5] bg-[#4F46E5] text-white':'border-slate-200 bg-white text-[#0F172A]'}`}>
                  {highlight&&<span className="self-start text-xs font-semibold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full mb-4">Le plus populaire</span>}
                  <h3 className="text-xl font-bold mb-1">{name}</h3>
                  <p className={`text-sm mb-4 ${highlight?'text-indigo-200':'text-slate-500'}`}>{desc}</p>
                  <p className="text-4xl font-extrabold mb-6">{price}<span className={`text-base font-normal ${highlight?'text-indigo-200':'text-slate-400'}`}>{period}</span></p>
                  <ul className="space-y-3 mb-8 flex-1">{features.map(f=>(<li key={f} className="flex items-center gap-2 text-sm"><span className={highlight?'text-white':'text-[#4F46E5]'}>✓</span>{f}</li>))}</ul>
                  <Link href="#contact" className={`text-center font-semibold py-3 rounded-xl transition-colors ${highlight?'bg-white text-[#4F46E5] hover:bg-slate-100':'bg-[#4F46E5] text-white hover:bg-[#3730A3]'}`}>{cta}</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 sm:py-28 bg-slate-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">Lancez votre agent en 2 minutes</h2>
              <p className="text-slate-500">Remplissez ce formulaire et nous vous recontactons sous 24h.</p>
            </div>
            <form action={submitContact} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-6" noValidate>
              <div>
                <label htmlFor="restaurant" className="block text-sm font-medium text-slate-700 mb-1.5">Nom du restaurant <span aria-hidden="true">*</span></label>
                <input id="restaurant" name="restaurant" type="text" required autoComplete="organization" placeholder="Le Petit Bistrot" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email professionnel <span aria-hidden="true">*</span></label>
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
                <label htmlFor="rgpd" className="text-sm text-slate-500 leading-relaxed">J&apos;accepte que mes données soient utilisées pour me recontacter conformément à notre politique de confidentialité. <span aria-hidden="true">*</span></label>
              </div>
              <button type="submit" className="w-full bg-[#4F46E5] hover:bg-[#3730A3] text-white font-semibold py-3 rounded-xl transition-colors">Demander ma démo gratuite →</button>
              <p className="text-xs text-slate-400 text-center">Aucune carte bancaire requise. Réponse sous 24h.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#0F172A] text-slate-400 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <span className="font-bold text-white">VoiceAI</span>
          <p>© {new Date().getFullYear()} VoiceAI — Tous droits réservés</p>
          <nav aria-label="Liens légaux" className="flex gap-4">
            <Link href="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
          </nav>
        </div>
      </footer>
    </>
  )
}
