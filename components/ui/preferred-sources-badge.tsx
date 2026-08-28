/**
 * Preferred Sources Badge Component
 * Displays a badge indicating this website is a preferred source for Google AI features
 * Including AI Overviews, AI Mode, Top Stories, and Google Discover
 */

import React from 'react';
import { Mail } from 'lucide-react';

interface PreferredSourcesBadgeProps {
  variant?: 'inline' | 'standalone' | 'footer';
  className?: string;
  showTooltip?: boolean;
}

export default function PreferredSourcesBadge({
  variant = 'inline',
  className = '',
  showTooltip = true,
}: PreferredSourcesBadgeProps) {
  const tooltipText =
    'This website is a preferred source for Google AI Overviews, AI Mode, Top Stories, and Google Discover';

  const baseStyles =
    'inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 text-sm font-medium text-blue-900 transition-all duration-200 hover:shadow-md hover:border-blue-300';

  const variantStyles = {
    inline: 'text-xs md:text-sm',
    standalone: 'px-4 py-2.5 text-base md:text-lg',
    footer: 'text-xs md:text-sm px-2 py-1',
  };

  return (
    <div
      className={`relative inline-flex ${className}`}
      title={showTooltip ? tooltipText : undefined}
      role="img"
      aria-label={tooltipText}
    >
      <div className={`${baseStyles} ${variantStyles[variant]}`}>
        <svg
          className="w-4 h-4 md:w-5 md:h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Google's 'G' Logo inspired mark */}
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M12 6v7l5.25 3.15" strokeWidth="1.5" />
        </svg>
        <span className="font-semibold">Google Preferred Source</span>
      </div>

      {/* Hover Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded shadow-lg whitespace-nowrap opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100 z-50">
          {tooltipText}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </div>
  );
}

/**
 * Standalone Badge Card Component
 * For displaying as a prominent feature/badge on the homepage or dedicated section
 */
export function PreferredSourcesCard() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50 border border-blue-200 p-6 md:p-8 shadow-lg">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500 shadow-md">
              <svg
                className="w-7 h-7 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                {/* Checkmark for trusted/verified */}
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900">
              Google Preferred Source
            </h3>
            <p className="text-xs md:text-sm text-blue-700 font-medium mt-1">
              Trusted by Google for AI features
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
          This website is recognized as a preferred source for{' '}
          <strong>Google AI Overviews</strong>, <strong>AI Mode</strong>,{' '}
          <strong>Top Stories</strong>, and <strong>Google Discover</strong>.
        </p>

        {/* Benefits List */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-white text-xs font-bold flex-shrink-0">
              ✓
            </span>
            <span>Appears in Google AI Overviews</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-white text-xs font-bold flex-shrink-0">
              ✓
            </span>
            <span>Featured in Google Discover feeds</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-white text-xs font-bold flex-shrink-0">
              ✓
            </span>
            <span>Recognized for high-quality content</span>
          </div>
        </div>

        {/* Call to Action / More Info */}
        <a
          href="https://support.google.com/news/publishers/answer/14779857"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          <span>Learn more</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

/**
 * Minimal Footer Badge
 * For displaying in footer navigation or sidebar
 */
export function PreferredSourcesFooterBadge() {
  return (
    <div className="inline-flex items-center gap-2 text-xs text-gray-600 hover:text-blue-600 transition-colors">
      <svg
        className="w-4 h-4 text-blue-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
      <span className="font-medium">Google Preferred Source</span>
    </div>
  );
}
