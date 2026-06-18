'use client';

import { Palette, CheckCircle } from 'lucide-react';

interface ColorScreenIntroProps {
  locale: string;
  colorName: string;
  colorHex: string;
  colorLabel: string;
  useCases: Array<{ en: string; fr: string }>;
}

export default function ColorScreenIntro({ locale, colorName, colorHex, colorLabel, useCases }: ColorScreenIntroProps) {
  const isEn = locale === 'en';

  const colorDescriptions: { [key: string]: { en: string; fr: string } } = {
    white: {
      en: 'A pure white screen (RGB 255,255,255) ideal for testing brightness, display uniformity, and screen cleaning.',
      fr: 'Un écran blanc pur (RGB 255,255,255) idéal pour tester la luminosité, l\'uniformité de l\'affichage et le nettoyage de l\'écran.'
    },
    black: {
      en: 'A pure black screen (RGB 0,0,0) perfect for testing dark levels, contrast, and detecting dead pixels on dark backgrounds.',
      fr: 'Un écran noir pur (RGB 0,0,0) parfait pour tester les niveaux sombres, le contraste et détecter les pixels morts sur les fonds sombres.'
    },
    red: {
      en: 'A pure red screen (RGB 255,0,0) for testing red channel response, color separation, and red pixel defects.',
      fr: 'Un écran rouge pur (RGB 255,0,0) pour tester la réponse du canal rouge, la séparation des couleurs et les défauts de pixels rouges.'
    },
    green: {
      en: 'A pure green screen (RGB 0,255,0) for testing green channel response, color separation, and green pixel defects.',
      fr: 'Un écran vert pur (RGB 0,255,0) pour tester la réponse du canal vert, la séparation des couleurs et les défauts de pixels verts.'
    },
    blue: {
      en: 'A pure blue screen (RGB 0,0,255) for testing blue channel response, color separation, and blue pixel defects.',
      fr: 'Un écran bleu pur (RGB 0,0,255) pour tester la réponse du canal bleu, la séparation des couleurs et les défauts de pixels bleus.'
    },
    cyan: {
      en: 'A cyan screen (RGB 0,255,255) combining green and blue channels for full-spectrum color testing.',
      fr: 'Un écran cyan (RGB 0,255,255) combinant les canaux vert et bleu pour des tests de couleur complets.'
    },
    magenta: {
      en: 'A magenta screen (RGB 255,0,255) combining red and blue channels for comprehensive color channel testing.',
      fr: 'Un écran magenta (RGB 255,0,255) combinant les canaux rouge et bleu pour des tests de canaux de couleur complets.'
    },
    yellow: {
      en: 'A yellow screen (RGB 255,255,0) combining red and green channels for warm color spectrum testing.',
      fr: 'Un écran jaune (RGB 255,255,0) combinant les canaux rouge et vert pour des tests de spectre de couleurs chaudes.'
    },
    orange: {
      en: 'An orange screen (RGB 255,165,0) for testing warm color rendering and gradient smoothness.',
      fr: 'Un écran orange (RGB 255,165,0) pour tester le rendu des couleurs chaudes et la douceur des dégradés.'
    },
    pink: {
      en: 'A pink screen (RGB 255,192,203) for testing color balance and light tonal accuracy.',
      fr: 'Un écran rose (RGB 255,192,203) pour tester l\'équilibre des couleurs et la précision tonale.'
    },
    purple: {
      en: 'A purple screen (RGB 128,0,128) for testing deep color saturation and mid-tone color accuracy.',
      fr: 'Un écran violet (RGB 128,0,128) pour tester la saturation profonde des couleurs et la précision des couleurs de tons moyens.'
    }
  };

  const description = colorDescriptions[colorName.toLowerCase()] || {
    en: `A ${colorName} full screen for display testing and diagnostic purposes.`,
    fr: `Un écran ${colorName} complet pour des tests d'affichage et des fins de diagnostic.`
  };

  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 md:py-16">
      <div className="container">
        {/* Main Intro */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
            {isEn ? `${colorLabel} Screen Test` : `Test d'Écran ${colorLabel}`}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
            {isEn ? description.en : description.fr}
          </p>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Pure Color</div>
              <p className="text-slate-300 text-sm">{colorHex}</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Full Screen</div>
              <p className="text-slate-300 text-sm">{isEn ? 'Immersive Test' : 'Test Immersif'}</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Instant</div>
              <p className="text-slate-300 text-sm">{isEn ? 'Results in Seconds' : 'Résultats Instantanés'}</p>
            </div>
          </div>
        </div>

        {/* What You Can Test */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Palette className="w-8 h-8 text-purple-400" />
            {isEn ? 'What Can You Test?' : 'Qu\'est-ce que Vous Pouvez Tester?'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
              <h3 className="text-xl font-bold text-white mb-4">{isEn ? 'Display Quality' : 'Qualité d\'Affichage'}</h3>
              <ul className="space-y-2 text-slate-300">
                <li>✓ {isEn ? 'Color uniformity across screen' : 'Uniformité des couleurs sur l\'écran'}</li>
                <li>✓ {isEn ? 'Brightness consistency' : 'Cohérence de la luminosité'}</li>
                <li>✓ {isEn ? 'Backlight bleeding detection' : 'Détection des fuites de rétroéclairage'}</li>
                <li>✓ {isEn ? 'Dead pixel identification' : 'Identification des pixels morts'}</li>
                <li>✓ {isEn ? 'Panel defects' : 'Défauts du panneau'}</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
              <h3 className="text-xl font-bold text-white mb-4">{isEn ? 'Specific Uses' : 'Utilisations Spécifiques'}</h3>
              <ul className="space-y-2 text-slate-300">
                <li>✓ {isEn ? 'Photography & lighting' : 'Photographie et éclairage'}</li>
                <li>✓ {isEn ? 'Video production' : 'Production vidéo'}</li>
                <li>✓ {isEn ? 'Green/blue screen effects' : 'Effets d\'écran vert/bleu'}</li>
                <li>✓ {isEn ? 'Screen cleaning' : 'Nettoyage d\'écran'}</li>
                <li>✓ {isEn ? 'Color calibration' : 'Étalonnage des couleurs'}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {isEn ? 'How to Use This Screen Test' : 'Comment Utiliser ce Test d\'Écran'}
          </h2>

          <ol className="space-y-4">
            {[
              {
                en: 'Start the Full Screen Test',
                fr: 'Démarrer le test d\'écran complet',
                descEn: 'Click "Start Test" to display the full screen color. Press F for fullscreen mode for optimal viewing.',
                descFr: 'Cliquez sur "Démarrer le test" pour afficher la couleur d\'écran complet. Appuyez sur F pour le mode plein écran.'
              },
              {
                en: 'Inspect the Entire Screen',
                fr: 'Inspecter l\'écran entier',
                descEn: 'Look across all areas including corners, edges, and center. Check for color uniformity and brightness consistency.',
                descFr: 'Regardez tous les domaines, y compris les coins, les bords et le centre. Vérifiez l\'uniformité des couleurs.'
              },
              {
                en: 'Look for Display Issues',
                fr: 'Rechercher les problèmes d\'affichage',
                descEn: 'Identify dead pixels (dark spots), backlight bleeding (bright edges), or color shifts (tint variations).',
                descFr: 'Identifiez les pixels morts, les fuites de rétroéclairage ou les décalages de couleur.'
              },
              {
                en: 'Use for Purpose',
                fr: 'Utiliser à votre fin',
                descEn: 'Use the solid color screen for photography lighting, video production backgrounds, or screen calibration.',
                descFr: 'Utilisez l\'écran de couleur unie pour l\'éclairage photographique ou les arrière-plans vidéo.'
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

        {/* Use Cases */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {isEn ? 'Common Use Cases' : 'Cas d\'Usage Courants'}
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((useCase, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">{isEn ? useCase.en : useCase.fr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {isEn ? 'Frequently Asked Questions' : 'Questions Fréquemment Posées'}
          </h2>

          <div className="space-y-4">
            {[
              {
                q: isEn ? 'Why use full screen color tests?' : 'Pourquoi utiliser des tests de couleur d\'écran complet?',
                a: isEn
                  ? 'Full screen tests help identify display issues like backlight bleeding, dead pixels, and color uniformity problems across the entire panel.'
                  : 'Les tests d\'écran complet aident à identifier les problèmes d\'affichage comme les fuites de rétroéclairage et les pixels morts.'
              },
              {
                q: isEn ? 'Can I use this for color calibration?' : 'Puis-je utiliser cela pour l\'étalonnage des couleurs?',
                a: isEn
                  ? 'While this provides pure color reference, professional color calibration requires specialized tools and software. This is useful for basic verification.'
                  : 'Bien que cela fournisse une référence de couleur pure, l\'étalonnage professionnel nécessite des outils spécialisés. Ceci est utile pour une vérification de base.'
              },
              {
                q: isEn ? 'What is a dead pixel?' : 'Qu\'est-ce qu\'un pixel mort?',
                a: isEn
                  ? 'A dead pixel appears as a dark spot (usually black) that doesn\'t display color. It\'s a hardware defect that\'s usually permanent.'
                  : 'Un pixel mort apparaît comme un point sombre (généralement noir) qui n\'affiche pas de couleur. C\'est un défaut matériel permanent.'
              },
              {
                q: isEn ? 'How do I clean my screen safely?' : 'Comment nettoyer mon écran en toute sécurité?',
                a: isEn
                  ? 'Use a soft, lint-free cloth. Use white screen mode first to see any dust or marks. Never use harsh chemicals or excessive pressure.'
                  : 'Utilisez un tissu doux sans peluches. Utilisez d\'abord le mode écran blanc pour voir la poussière. Ne jamais utiliser de produits chimiques agressifs.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
                <h4 className="text-lg font-bold text-white mb-3">{item.q}</h4>
                <p className="text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Info */}
        <div className="bg-purple-950/30 border border-purple-500/50 rounded-lg p-6 backdrop-blur">
          <h2 className="text-2xl font-bold text-white mb-3">🎨 {isEn ? 'Professional Use' : 'Utilisation Professionnelle'}</h2>
          <p className="text-slate-300 mb-3">
            {isEn
              ? 'Professional photographers, videographers, and content creators use full-screen color tests for display verification, lighting setup, and color reference. This tool provides the exact color reference you need.'
              : 'Les photographes, vidéographes et créateurs de contenu professionnels utilisent des tests de couleur pour vérifier l\'affichage et l\'étalonnage des couleurs.'}
          </p>
          <p className="text-slate-300 text-sm">
            {isEn ? 'Color Value: ' : 'Valeur de Couleur: '}
            <strong>{colorHex}</strong> (RGB {colorLabel})
          </p>
        </div>
      </div>
    </section>
  );
}
