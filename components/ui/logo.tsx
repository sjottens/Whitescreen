// components/ui/logo.tsx - Optimized SVG logo component

export default function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Screenglow logo"
    >
      {/* Background circle */}
      <rect width="40" height="40" rx="8" fill="#06B6D4" />

      {/* Monitor frame */}
      <rect x="8" y="8" width="24" height="18" rx="2" fill="white" />

      {/* Screen content - test pattern */}
      <rect x="10" y="10" width="20" height="12" fill="#E2E8F0" />

      {/* Accent elements */}
      <circle cx="18" cy="15" r="2" fill="#0F172A" opacity="0.3" />
      <circle cx="22" cy="15" r="2" fill="#0F172A" opacity="0.3" />
    </svg>
  );
}
