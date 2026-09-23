// components/tools/photosensitivity-warning.tsx - Shown before tools that
// flash the screen (dead pixel fixer, brightness flicker mode). Flashing in
// roughly the 3-30 Hz range can trigger seizures in people with
// photosensitive epilepsy.

import { AlertTriangle } from 'lucide-react';

const TEXT: Record<string, { title: string; body: string }> = {
  en: {
    title: 'Photosensitivity warning',
    body: 'This tool flashes rapidly changing colors. It can trigger seizures in people with photosensitive epilepsy. Do not use it if you or anyone who can see the screen is photosensitive, and look away from the flashing area while it runs.',
  },
  nl: {
    title: 'Waarschuwing voor lichtgevoeligheid',
    body: 'Deze tool laat snel wisselende kleuren flitsen. Dat kan aanvallen uitlokken bij mensen met fotosensitieve epilepsie. Gebruik de tool niet als jij of iemand die het scherm kan zien lichtgevoelig is, en kijk weg van het flitsende deel zolang de tool draait.',
  },
  es: {
    title: 'Advertencia de fotosensibilidad',
    body: 'Esta herramienta muestra colores que parpadean rápidamente. Puede provocar crisis en personas con epilepsia fotosensible. No la uses si tú o alguien que pueda ver la pantalla es fotosensible, y aparta la vista de la zona que parpadea mientras funciona.',
  },
  de: {
    title: 'Warnung zur Lichtempfindlichkeit',
    body: 'Dieses Tool zeigt schnell wechselnde, blinkende Farben. Das kann bei Menschen mit photosensitiver Epilepsie Anfälle auslösen. Verwenden Sie es nicht, wenn Sie oder jemand, der den Bildschirm sehen kann, lichtempfindlich ist, und schauen Sie während des Betriebs vom blinkenden Bereich weg.',
  },
};

export default function PhotosensitivityWarning({ locale = 'en', children }: { locale?: string; children?: React.ReactNode }) {
  const text = TEXT[locale] || TEXT.en;
  return (
    <div role="alert" className="rounded-lg border border-amber-400 bg-amber-50 p-4 text-amber-900">
      <p className="flex items-center gap-2 font-bold">
        <AlertTriangle className="w-5 h-5 flex-shrink-0" />
        {text.title}
      </p>
      <p className="mt-1 text-sm">{text.body}</p>
      {children}
    </div>
  );
}
