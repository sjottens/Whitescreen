// components/tools/photosensitivity-warning.tsx - Shown before tools that
// flash the screen (dead pixel fixer, brightness flicker mode). Flashing in
// roughly the 3-30 Hz range can trigger seizures in people with
// photosensitive epilepsy.

import { AlertTriangle } from 'lucide-react';

const TITLE = 'Photosensitivity warning';
const BODY =
  'This tool flashes rapidly changing colors. It can trigger seizures in people with photosensitive epilepsy. Do not use it if you or anyone who can see the screen is photosensitive, and look away from the flashing area while it runs.';

export default function PhotosensitivityWarning({ children }: { children?: React.ReactNode }) {
  return (
    <div role="alert" className="rounded-lg border border-amber-400 bg-amber-50 p-4 text-amber-900">
      <p className="flex items-center gap-2 font-bold">
        <AlertTriangle className="w-5 h-5 flex-shrink-0" />
        {TITLE}
      </p>
      <p className="mt-1 text-sm">{BODY}</p>
      {children}
    </div>
  );
}
