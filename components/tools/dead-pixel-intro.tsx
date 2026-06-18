'use client';

import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface DeadPixelIntroProps {
  locale: string;
}

export default function DeadPixelIntro({ locale }: DeadPixelIntroProps) {
  const isEn = locale === 'en';

  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 md:py-16">
      <div className="container">
        {/* Main Intro */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
            {isEn ? 'Dead Pixel Test & Detector' : 'Test Pixel Mort'}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
            {isEn
              ? 'Use our free dead pixel detector to identify stuck pixels, dead pixels, and hot pixels on your display. This comprehensive test cycles through multiple color backgrounds to make defective pixels highly visible.'
              : 'Utilisez notre détecteur gratuit de pixels morts pour identifier les pixels coincés, morts et chauds sur votre écran.'}
          </p>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">100%</div>
              <p className="text-slate-300 text-sm">{isEn ? 'Free to Use' : 'Gratuit'}</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">16 Colors</div>
              <p className="text-slate-300 text-sm">{isEn ? 'Comprehensive Detection' : 'Détection Complète'}</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Instant</div>
              <p className="text-slate-300 text-sm">{isEn ? 'Results in Seconds' : 'Résultats Instantanés'}</p>
            </div>
          </div>
        </div>

        {/* What are Dead Pixels */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-emerald-400" />
            {isEn ? 'What Are Dead Pixels?' : 'Que Sont les Pixels Morts?'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Dead Pixels */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold text-white">{isEn ? 'Dead Pixels' : 'Pixels Morts'}</h3>
              </div>
              <p className="text-slate-300 mb-4">
                {isEn
                  ? 'Pixels that are not receiving power and appear as small dark/black dots on your display. They fail to illuminate regardless of color changes.'
                  : 'Pixels qui ne reçoivent pas d\'alimentation et apparaissent comme de petits points noirs.'}
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• {isEn ? 'Appear as black or dark spots' : 'Apparaissent en noir'}</li>
                <li>• {isEn ? 'Permanent defect (hard to fix)' : 'Défaut permanent'}</li>
                <li>• {isEn ? 'More common than stuck pixels' : 'Plus commun que les pixels coincés'}</li>
              </ul>
            </div>

            {/* Stuck Pixels */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">{isEn ? 'Stuck Pixels' : 'Pixels Coincés'}</h3>
              </div>
              <p className="text-slate-300 mb-4">
                {isEn
                  ? 'Pixels "stuck" in the ON position, displaying a single color (usually red, green, or blue). They may respond to physical pressure or heat.'
                  : 'Pixels "coincés" en position ON, affichant une seule couleur.'}
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• {isEn ? 'Appear as colored dots (RGB)' : 'Apparaissent comme des points colorés'}</li>
                <li>• {isEn ? 'Sometimes fixable with tools/methods' : 'Parfois réparables'}</li>
                <li>• {isEn ? 'Less common but more noticeable' : 'Moins commun mais plus visible'}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pixel Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {isEn ? 'Types of Defective Pixels' : 'Types de Pixels Défectueux'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Black pixel */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 backdrop-blur">
              <div className="w-full h-24 bg-white rounded mb-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full shadow-md"></div>
              </div>
              <h4 className="font-bold text-white mb-2">{isEn ? 'Black Dead Pixel' : 'Pixel Noir Mort'}</h4>
              <p className="text-sm text-slate-400">
                {isEn ? 'Appears on colored backgrounds' : 'Apparaît sur fond coloré'}
              </p>
            </div>

            {/* Red stuck */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 backdrop-blur">
              <div className="w-full h-24 bg-white rounded mb-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-red-500 rounded-full shadow-md"></div>
              </div>
              <h4 className="font-bold text-white mb-2">{isEn ? 'Red Stuck Pixel' : 'Pixel Rouge Coincé'}</h4>
              <p className="text-sm text-slate-400">
                {isEn ? 'Stuck on red subpixel' : 'Coincé sur le sous-pixel rouge'}
              </p>
            </div>

            {/* Green stuck */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 backdrop-blur">
              <div className="w-full h-24 bg-white rounded mb-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full shadow-md"></div>
              </div>
              <h4 className="font-bold text-white mb-2">{isEn ? 'Green Stuck Pixel' : 'Pixel Vert Coincé'}</h4>
              <p className="text-sm text-slate-400">
                {isEn ? 'Stuck on green subpixel' : 'Coincé sur le sous-pixel vert'}
              </p>
            </div>

            {/* Blue stuck */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 backdrop-blur">
              <div className="w-full h-24 bg-white rounded mb-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full shadow-md"></div>
              </div>
              <h4 className="font-bold text-white mb-2">{isEn ? 'Blue Stuck Pixel' : 'Pixel Bleu Coincé'}</h4>
              <p className="text-sm text-slate-400">
                {isEn ? 'Stuck on blue subpixel' : 'Coincé sur le sous-pixel bleu'}
              </p>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {isEn ? 'How to Use This Dead Pixel Test' : 'Comment Utiliser ce Test'}
          </h2>

          <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-8 backdrop-blur">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-slate-900 rounded-full flex items-center justify-center font-bold">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">{isEn ? 'Clean Your Screen' : 'Nettoyez Votre Écran'}</h4>
                  <p className="text-slate-300">
                    {isEn
                      ? 'Use a soft, lint-free cloth to gently clean your screen. Remove any dust or smudges.'
                      : 'Utilisez un chiffon doux pour nettoyer votre écran.'}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-slate-900 rounded-full flex items-center justify-center font-bold">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">{isEn ? 'Start the Test' : 'Commencez le Test'}</h4>
                  <p className="text-slate-300">
                    {isEn
                      ? 'Click "Start Test" and press F11 for fullscreen mode (recommended for best results).'
                      : 'Cliquez sur "Démarrer le Test" et appuyez sur F11.'}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-slate-900 rounded-full flex items-center justify-center font-bold">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">
                    {isEn ? 'Look Carefully' : 'Regardez Attentivement'}
                  </h4>
                  <p className="text-slate-300">
                    {isEn
                      ? 'Spend 10-15 seconds on each color. Look for spots that don\'t match the background color.'
                      : 'Passez 10-15 secondes par couleur. Recherchez des taches.'}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-slate-900 rounded-full flex items-center justify-center font-bold">
                  4
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">{isEn ? 'Document Issues' : 'Documentez les Problèmes'}</h4>
                  <p className="text-slate-300">
                    {isEn
                      ? 'Take photos of any dead pixels found. Note their location for warranty claims.'
                      : 'Prenez des photos pour les réclamations en garantie.'}
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {isEn ? 'Frequently Asked Questions' : 'Questions Fréquemment Posées'}
          </h2>

          <div className="space-y-4">
            {[
              {
                q: isEn ? 'Can dead pixels be fixed?' : 'Les pixels morts peuvent-ils être réparés?',
                a: isEn
                  ? 'Dead pixels are usually permanent hardware failures. Stuck pixels sometimes respond to software fixes or physical pressure, but dead pixels cannot be repaired.'
                  : 'Les pixels morts sont généralement des défauts permanents.',
              },
              {
                q: isEn ? 'How many dead pixels are acceptable?' : 'Combien de pixels morts sont acceptables?',
                a: isEn
                  ? 'Most manufacturers allow 0-8 dead pixels depending on the warranty terms. Check your warranty for specifics.'
                  : 'La plupart acceptent 0-8 pixels morts selon la garantie.',
              },
              {
                q: isEn ? 'Is this test accurate?' : 'Ce test est-il précis?',
                a: isEn
                  ? 'Yes, this is a comprehensive color-cycling test that makes defective pixels highly visible. It\'s the most effective method for detecting dead and stuck pixels.'
                  : 'Oui, c\'est une méthode efficace pour détecter les pixels défectueux.',
              },
              {
                q: isEn ? 'Why do I need fullscreen mode?' : 'Pourquoi avez-vous besoin du mode plein écran?',
                a: isEn
                  ? 'Fullscreen mode ensures you\'re testing the entire display surface and eliminates distractions from the browser UI.'
                  : 'Le mode plein écran teste toute la surface d\'affichage.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
                <h3 className="font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Warranty Info */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-lg p-8 backdrop-blur">
          <h2 className="text-2xl font-bold text-white mb-4">
            {isEn ? '💡 Warranty Information' : '💡 Information de Garantie'}
          </h2>
          <p className="text-slate-300 mb-4">
            {isEn
              ? 'If you find dead pixels within your warranty period, contact the manufacturer with documented evidence (photos). Most manufacturers cover 0-8 dead pixels. Premium displays often have stricter standards.'
              : 'Si vous trouvez des pixels morts, contactez le fabricant avec des preuves documentées.'}
          </p>
          <p className="text-slate-400 text-sm">
            {isEn
              ? 'Common manufacturers: Dell, LG, ASUS, BenQ, Samsung, HP, AOC, MSI'
              : 'Fabricants courants: Dell, LG, ASUS, BenQ, Samsung, HP, AOC, MSI'}
          </p>
        </div>
      </div>
    </section>
  );
}
