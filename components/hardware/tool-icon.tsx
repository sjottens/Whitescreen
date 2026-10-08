// components/hardware/tool-icon.tsx - Inline SVG icons for the hardware tests
// (no icon library: five small icons don't justify one).

import type { HardwareToolId } from '@/lib/hardware-tools';

const PATHS: Record<HardwareToolId, string> = {
  'screen-test': 'M3 5h18v11H3zM8 20h8M12 16v4',
  'mic-test': 'M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM5 11a7 7 0 0 0 14 0M12 18v3',
  'keyboard-test': 'M3 6h18v12H3zM7 10h.01M11 10h.01M15 10h.01M17 14H7',
  'webcam-test': 'M12 3a7 7 0 1 0 0 14a7 7 0 0 0 0-14zM12 7.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5zM8 21h8M12 17v4',
  'click-speed-test': 'M12 3a6 6 0 0 0-6 6v6a6 6 0 0 0 12 0V9a6 6 0 0 0-6-6zM12 3v7M6 10h12',
  'used-laptop-check': 'M4 5h16v10H4zM2 19h20M9 10l2 2 4-4',
};

export default function ToolIcon({ id, className = 'w-6 h-6' }: { id: HardwareToolId; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[id]} />
    </svg>
  );
}
