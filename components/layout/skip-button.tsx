// components/layout/skip-button.tsx - Skip to main content button
'use client';

export default function SkipButton() {
  const handleClick = () => {
    const main = document.getElementById('main-content');
    if (main) {
      const offsetTop = main.getBoundingClientRect().top + window.scrollY;
      const headerHeight = 80;
      window.scrollTo({
        top: Math.max(0, offsetTop - headerHeight),
        behavior: 'smooth'
      });
      main.focus();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="skip-to-main"
    >
      Skip to main content
    </button>
  );
}
