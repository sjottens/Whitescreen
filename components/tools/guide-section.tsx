// components/tools/guide-section.tsx - Reusable guide section component for all tools

import { TOOL_GUIDES } from '@/lib/tool-guides';

interface GuideSectionProps {
  toolId: string;
}

export default function GuideSection({ toolId }: GuideSectionProps) {
  const guide = TOOL_GUIDES[toolId];

  if (!guide) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mt-12 bg-gradient-to-b from-slate-50 to-white rounded-xl p-8 border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Use This Tool</h2>

        {/* What is section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">What is this Test?</h3>
          <p className="text-slate-700 leading-relaxed">{guide.whatIs}</p>
        </div>

        {/* Main sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {guide.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">{section.title}</h3>
              {section.items ? (
                <ul className="text-slate-700 space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <strong>{item.split(':')[0]}:</strong>
                      {item.includes(':') ? item.split(':').slice(1).join(':') : ''}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-700">{section.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Tips section */}
        <div className="pt-8 border-t border-slate-200">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Testing Tips</h3>
          <ul className="text-slate-700 space-y-3 grid md:grid-cols-2 gap-4">
            {guide.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-cyan-600 mr-3 font-bold">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Keyboard shortcuts section (if available) */}
        {guide.shortcuts && guide.shortcuts.length > 0 && (
          <div className="mt-8 pt-8 border-t border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Keyboard Shortcuts</h3>
            <div className="grid md:grid-cols-2 gap-4 text-slate-700">
              {guide.shortcuts.map((shortcut, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="bg-slate-200 text-slate-900 px-3 py-1 rounded font-mono font-semibold mr-3">
                    {shortcut.key}
                  </span>
                  <span>{shortcut.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pro tip section */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-900 text-sm">
            <strong>Pro Tip:</strong> {guide.proTip}
          </p>
        </div>
      </div>
    </div>
  );
}
