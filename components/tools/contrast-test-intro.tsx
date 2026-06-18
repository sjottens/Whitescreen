'use client';

import { Contrast, Eye } from 'lucide-react';

interface ContrastTestIntroProps {
  locale: string;
}

export default function ContrastTestIntro({ locale }: ContrastTestIntroProps) {
  const isEn = locale === 'en';

  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 md:py-16">
      <div className="container">
        {/* Main Intro */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
            {isEn ? 'Contrast Test & Accessibility Checker' : 'Test de Contraste & Vérificateur d\'Accessibilité'}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
            {isEn
              ? 'Test monitor contrast ratio, WCAG accessibility compliance, and color vision deficiency simulation. Ensure your display meets professional standards and is accessible to all users.'
              : 'Testez le rapport de contraste du moniteur, la conformité WCAG et la simulation des déficiences visuelles des couleurs.'}
          </p>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">WCAG AAA</div>
              <p className="text-slate-300 text-sm">{isEn ? '7:1 Compliance' : 'Conformité 7:1'}</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">5 Modes</div>
              <p className="text-slate-300 text-sm">{isEn ? 'Color Vision Tests' : 'Tests de Vision des Couleurs'}</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Live</div>
              <p className="text-slate-300 text-sm">{isEn ? 'Contrast Ratio' : 'Rapport de Contraste'}</p>
            </div>
          </div>
        </div>

        {/* What is Contrast */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Contrast className="w-8 h-8 text-blue-400" />
            {isEn ? 'What is Display Contrast?' : 'Qu\'est-ce que le Contraste d\'Affichage?'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* WCAG Standards */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">{isEn ? 'WCAG Standards' : 'Normes WCAG'}</h3>
              </div>
              <p className="text-slate-300 mb-4">
                {isEn
                  ? 'WCAG (Web Content Accessibility Guidelines) defines minimum contrast ratios for readable text. AAA requires 7:1, AA requires 4.5:1.'
                  : 'Les WCAG définissent les rapports de contraste minimums pour le texte lisible. AAA nécessite 7:1, AA nécessite 4,5:1.'}
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>✓ {isEn ? 'AAA Level: 7:1 contrast' : 'Niveau AAA: contraste 7:1'}</li>
                <li>✓ {isEn ? 'AA Level: 4.5:1 contrast' : 'Niveau AA: contraste 4,5:1'}</li>
                <li>✓ {isEn ? 'Fail: Below 4.5:1' : 'Échoue: En dessous de 4,5:1'}</li>
              </ul>
            </div>

            {/* Color Vision Deficiency */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl font-bold text-white">{isEn ? 'Color Vision Deficiency' : 'Déficience Visuelle des Couleurs'}</h3>
              </div>
              <p className="text-slate-300 mb-4">
                {isEn
                  ? '8% of men and 0.5% of women have some form of color blindness. Our simulator helps test accessibility for people with various types of color vision deficiency.'
                  : '8% des hommes ont un certain type de daltonisme. Notre simulateur teste l\'accessibilité pour les personnes atteintes.'
                  }
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>✓ {isEn ? 'Deuteranopia (Red-Green)' : 'Deutéranopie (Rouge-Vert)'}</li>
                <li>✓ {isEn ? 'Protanopia (Red-Green)' : 'Protanopie (Rouge-Vert)'}</li>
                <li>✓ {isEn ? 'Tritanopia (Blue-Yellow)' : 'Tritanopie (Bleu-Jaune)'}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {isEn ? 'How to Test Monitor Contrast' : 'Comment Tester le Contraste du Moniteur'}
          </h2>

          <ol className="space-y-4">
            {[
              {
                en: 'View WCAG Ladder',
                fr: 'Voir l\'escalier WCAG',
                descEn: '11 pairs of colors with varying contrast ratios. See which levels you can distinguish.',
                descFr: '11 paires de couleurs avec différents rapports de contraste. Voir lesquels vous pouvez distinguer.'
              },
              {
                en: 'Test Text Readability',
                fr: 'Tester la lisibilité du texte',
                descEn: 'View text samples at different contrast levels. AAA text should be easily readable from normal viewing distance.',
                descFr: 'Voir des exemples de texte à différents niveaux de contraste. Le texte AAA devrait être facilement lisible.'
              },
              {
                en: 'Simulate Color Vision Deficiency',
                fr: 'Simuler la déficience visuelle des couleurs',
                descEn: 'Switch between 5 vision modes to see how people with color blindness perceive your display.',
                descFr: 'Basculez entre 5 modes de vision pour voir comment les personnes atteintes de daltonisme perçoivent votre affichage.'
              },
              {
                en: 'Check Custom Colors',
                fr: 'Vérifier les couleurs personnalisées',
                descEn: 'Test any foreground/background color pair to see the exact contrast ratio and WCAG compliance.',
                descFr: 'Testez n\'importe quelle paire de couleurs avant-plan/arrière-plan pour voir le rapport de contraste exact.'
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
                q: isEn ? 'What contrast ratio should I aim for?' : 'Quel rapport de contraste dois-je viser?',
                a: isEn
                  ? 'WCAG AAA (7:1) is the gold standard for accessibility. Most professional displays achieve 1000:1 static contrast, but visible text contrast is more important.'
                  : 'WCAG AAA (7:1) est la norme d\'or pour l\'accessibilité. La plupart des affichages professionnels atteignent 1000:1 de contraste statique.'
              },
              {
                q: isEn ? 'What is the difference between static and dynamic contrast?' : 'Quelle est la différence entre le contraste statique et dynamique?',
                a: isEn
                  ? 'Static contrast is measured between pure white and pure black on the same screen. Dynamic contrast uses local dimming. Static is more reliable for real-world content.'
                  : 'Le contraste statique est mesuré entre le blanc pur et le noir pur. Le contraste dynamique utilise l\'atténuation locale. Le statique est plus fiable.'
              },
              {
                q: isEn ? 'Why does contrast matter for accessibility?' : 'Pourquoi le contraste est-il important pour l\'accessibilité?',
                a: isEn
                  ? 'Low contrast makes text hard to read for people with visual impairment or when viewing in bright conditions. High contrast benefits everyone by improving readability.'
                  : 'Un faible contraste rend le texte difficile à lire pour les personnes malvoyantes. Un contraste élevé bénéficie à tout le monde.'
              },
              {
                q: isEn ? 'Can I test my design\'s contrast?' : 'Puis-je tester le contraste de ma conception?',
                a: isEn
                  ? 'Yes! Use the custom color tester to check any foreground/background combination. Enter hex values and instantly see the WCAG compliance level.'
                  : 'Oui! Utilisez le testeur de couleurs personnalisées pour vérifier n\'importe quelle combinaison avant-plan/arrière-plan.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
                <h4 className="text-lg font-bold text-white mb-3">{item.q}</h4>
                <p className="text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Accessibility Info */}
        <div className="bg-blue-950/30 border border-blue-500/50 rounded-lg p-6 backdrop-blur">
          <h2 className="text-2xl font-bold text-white mb-3">♿ {isEn ? 'Accessibility Matters' : 'L\'Accessibilité Compte'}</h2>
          <p className="text-slate-300 mb-3">
            {isEn
              ? 'Following WCAG contrast guidelines isn\'t just for compliance—it improves readability for everyone. Proper contrast helps users with low vision, color blindness, and those viewing in bright conditions.'
              : 'Suivre les directives de contraste WCAG améliore la lisibilité pour tout le monde. Le contraste adéquat aide les utilisateurs malvoyants et ceux qui regardent en conditions lumineuses.'
            }
          </p>
          <p className="text-slate-300 text-sm">
            {isEn
              ? 'Learn more: WCAG 2.1 Level AAA guidelines at w3.org'
              : 'En savoir plus: directives WCAG 2.1 Niveau AAA sur w3.org'}
          </p>
        </div>
      </div>
    </section>
  );
}
