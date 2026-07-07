import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TEST_TOOLS, COLOR_TOOLS } from '@/lib/constants';
import { t } from '@/lib/translations';
import { getLocalizedPath } from '@/lib/link-utils';
import type { Locale } from '@/lib/i18n';

interface RelatedToolsProps {
  currentToolId: string;
  locale: Locale;
}

export default function RelatedTools({ currentToolId, locale }: RelatedToolsProps) {
  const translate = t(locale);

  // Get related tools (all other test tools + some color tools)
  const relatedTools = [
    ...TEST_TOOLS.filter((t) => t.id !== currentToolId).slice(0, 3),
    ...COLOR_TOOLS.slice(0, 2),
  ];

  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 md:py-20">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          {translate('browse_all_resources').includes('{count}')
            ? translate('browse_all_resources').replace('{count}', 'All')
            : 'Explore More Tools'}
        </h2>
        <p className="text-xl text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          {translate('features_subtitle')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {relatedTools.map((tool) => (
            <Link
              key={tool.id}
              href={getLocalizedPath(locale, tool.path)}
              className="group relative overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50 backdrop-blur transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/20"
            >
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                {/* Display the tool color or create a visual */}
                {(tool as any).color ? (
                  <>
                    <div
                      className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: (tool as any).color }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-blue-500/30" />
                )}

                {/* Icon or text overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📊</div>
                    <span className="text-white font-bold text-xs text-center block px-2">
                      {translate(tool.nameKey as any)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {translate(tool.nameKey as any)}
                </h3>
                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors line-clamp-2 mb-3">
                  {translate(tool.descriptionKey as any)}
                </p>
                <div className="flex items-center text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">
                  {translate('btn_start_testing')}
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={getLocalizedPath(locale, '/tools')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 hover:scale-105"
          >
            {translate('browse_all_resources').replace('{count}', 'All')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
