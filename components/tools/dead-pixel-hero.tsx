'use client';

interface DeadPixelHeroProps {
  locale: string;
}

// Compact header shown above the interactive tool. Deliberately short - the
// full "what are dead pixels / how to use / FAQ / warranty" explainer lives
// in <DeadPixelIntro>, rendered *after* the tool, so the test itself is the
// first thing visible on the page instead of being buried below a long
// educational section.
export default function DeadPixelHero({ locale: _locale }: DeadPixelHeroProps) {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-8 md:py-10">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">
          Dead Pixel Test & Detector
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
          Free dead pixel detector that cycles through color backgrounds to reveal dead, stuck, and hot pixels. Click below to start in fullscreen.
        </p>
      </div>
    </section>
  );
}
