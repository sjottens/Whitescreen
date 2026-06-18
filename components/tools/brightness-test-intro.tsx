'use client';

import { AlertCircle, Sun, Zap } from 'lucide-react';

interface BrightnessTestIntroProps {
  locale: string;
}

export default function BrightnessTestIntro({ locale }: BrightnessTestIntroProps) {
  const isEn = locale === 'en';

  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 md:py-16">
      <div className="container">
        {/* Main Intro */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
            {isEn ? 'Brightness Test & Detector' : 'Test de Luminosité'}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
            {isEn
              ? 'Test monitor brightness levels, gamma response, and display uniformity with precision tools. Identify brightness inconsistencies, backlight bleeding, and color uniformity issues.'
              : 'Testez les niveaux de luminosité du moniteur, la réponse gamma et l\'uniformité de l\'affichage avec des outils de précision.'}
          </p>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">11 Steps</div>
              <p className="text-slate-300 text-sm">{isEn ? 'Brightness Ladder' : 'Escalier de Luminosité'}</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Gamma Test</div>
              <p className="text-slate-300 text-sm">{isEn ? 'Response Curves' : 'Courbes de Réponse'}</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Instant</div>
              <p className="text-slate-300 text-sm">{isEn ? 'Results in Seconds' : 'Résultats Instantanés'}</p>
            </div>
          </div>
        </div>

        {/* What is Brightness Test */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Sun className="w-8 h-8 text-yellow-400" />
            {isEn ? 'What is a Brightness Test?' : 'Que Teste-t-on avec le Test de Luminosité?'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Brightness Uniformity */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Sun className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">{isEn ? 'Brightness Uniformity' : 'Uniformité de Luminosité'}</h3>
              </div>
              <p className="text-slate-300 mb-4">
                {isEn
                  ? 'Measures how evenly your display maintains brightness across the entire screen. Uneven brightness creates dark corners or bright spots.'
                  : 'Mesure l\'uniformité de la luminosité sur tout l\'écran. Les zones inégales créent des coins sombres ou des points brillants.'}
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>✓ {isEn ? 'Detect backlight bleeding' : 'Détecter les fuites de rétroéclairage'}</li>
                <li>✓ {isEn ? 'Identify dark corners' : 'Identifier les coins sombres'}</li>
                <li>✓ {isEn ? 'Check edge brightness' : 'Vérifier la luminosité des bords'}</li>
              </ul>
            </div>

            {/* Gamma Response */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">{isEn ? 'Gamma Response' : 'Réponse Gamma'}</h3>
              </div>
              <p className="text-slate-300 mb-4">
                {isEn
                  ? 'Tests the display\'s tone curve and how it renders midtones. Proper gamma (2.2) ensures accurate color representation and smooth gradations.'
                  : 'Teste la courbe de tonalité et le rendu des tons moyens. Un gamma correct assure une représentation précise des couleurs.'}
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>✓ {isEn ? 'Verify tone gradation' : 'Vérifier la gradation des tons'}</li>
                <li>✓ {isEn ? 'Test gamma curve accuracy' : 'Tester la précision de la courbe gamma'}</li>
                <li>✓ {isEn ? 'Check midtone rendering' : 'Vérifier le rendu des tons moyens'}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {isEn ? 'How to Use This Brightness Test' : 'Comment Utiliser ce Test de Luminosité'}
          </h2>

          <ol className="space-y-4">
            {[
              {
                en: 'Adjust Monitor Settings',
                fr: 'Ajuster les paramètres du moniteur',
                descEn: 'Set your monitor to standard settings or factory defaults for consistent results.',
                descFr: 'Définissez votre moniteur sur les paramètres standard ou les valeurs par défaut d\'usine.'
              },
              {
                en: 'Run the Brightness Ladder Test',
                fr: 'Exécuter le test d\'escalier de luminosité',
                descEn: 'Look at the 11-step brightness ladder. Each step should be distinguishable without banding.',
                descFr: 'Regardez l\'escalier de luminosité à 11 étapes. Chaque étape doit être distinguable.'
              },
              {
                en: 'Check for Gradient Banding',
                fr: 'Vérifier les bandes de gradient',
                descEn: 'If you see distinct bands instead of smooth gradations, your display has limited bit depth or dithering issues.',
                descFr: 'Si vous voyez des bandes distinctes au lieu de gradations lisses, votre affichage a un problème.'
              },
              {
                en: 'Verify Uniformity',
                fr: 'Vérifier l\'uniformité',
                descEn: 'Check that brightness remains consistent across all areas of the screen, especially corners.',
                descFr: 'Vérifiez que la luminosité reste constante dans toutes les zones de l\'écran.'
              }
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-slate-900 rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-white mb-1">{isEn ? step.en : step.fr}</h4>
                  <p className="text-slate-300">{isEn ? step.descEn : step.descFr}</p>
                </div>
              </div>
            ))}
          </ol>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {isEn ? 'Frequently Asked Questions' : 'Questions Fréquemment Posées'}
          </h2>

          <div className="space-y-4">
            {[
              {
                q: isEn ? 'What is proper gamma for monitors?' : 'Quel est le gamma correct pour les moniteurs?',
                a: isEn 
                  ? 'Standard gamma is 2.2 for most displays. This provides optimal brightness and color perception. Gaming monitors often use 2.4 for more contrast.'
                  : 'Le gamma standard est 2,2 pour la plupart des affichages. Les moniteurs de jeu utilisent souvent 2,4 pour plus de contraste.'
              },
              {
                q: isEn ? 'What causes banding in gradients?' : 'Qu\'est-ce qui cause les bandes dans les dégradés?',
                a: isEn
                  ? 'Banding occurs when a display has 8-bit color instead of 10-bit, or when dithering is disabled. It creates visible steps instead of smooth transitions.'
                  : 'Les bandes se produisent quand l\'affichage a une couleur 8 bits au lieu de 10 bits, ou quand le tramage est désactivé.'
              },
              {
                q: isEn ? 'Is backlight bleeding normal?' : 'La fuite de rétroéclairage est-elle normale?',
                a: isEn
                  ? 'Slight backlight bleeding at edges is normal in IPS and VA panels. Excessive bleeding (visible during dark scenes) indicates a display defect covered by warranty.'
                  : 'Une légère fuite est normale dans les panneaux IPS et VA. Un excès indique un défaut couvert par la garantie.'
              },
              {
                q: isEn ? 'How does brightness affect color accuracy?' : 'Comment la luminosité affecte-t-elle la précision des couleurs?',
                a: isEn
                  ? 'Improper brightness settings can cause color shifts and loss of detail in shadows. Use 120 cd/m² for professional work and 100-150 cd/m² for general use.'
                  : 'Des paramètres de luminosité incorrects peuvent causer des décalages de couleur. Utilisez 120 cd/m² pour le travail professionnel.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
                <h4 className="text-lg font-bold text-white mb-3">{item.q}</h4>
                <p className="text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Warranty Info */}
        <div className="bg-emerald-950/30 border border-emerald-500/50 rounded-lg p-6 backdrop-blur">
          <h2 className="text-2xl font-bold text-white mb-3">💡 {isEn ? 'Professional Tip' : 'Conseil Professionnel'}</h2>
          <p className="text-slate-300 mb-3">
            {isEn
              ? 'If your monitor shows significant brightness inconsistencies, backlight bleeding, or fails uniformity tests within warranty, contact the manufacturer. Most premium monitors have strict brightness uniformity standards (typically ≤20% variation).'
              : 'Si votre moniteur montre des incohérences de luminosité, contactez le fabricant. Les moniteurs premium ont des normes strictes d\'uniformité de luminosité.'}
          </p>
          <p className="text-slate-300 text-sm">
            {isEn
              ? 'Common manufacturers: Dell, LG, ASUS, BenQ, Samsung, HP, AOC, MSI'
              : 'Fabricants courants: Dell, LG, ASUS, BenQ, Samsung, HP, AOC, MSI'}
          </p>
        </div>
      </div>
    </section>
  );
}
