'use client';

import { useState } from 'react';
import { t } from '@/lib/translations';

interface Monitor {
  name: string;
  brand: string;
  resolution: string;
  refreshRate: string;
  panelType: string;
  size: string;
  price: string;
  responseTime: string;
  brightness: string;
  contrast: string;
}

const PRESET_MONITORS: Monitor[] = [
  {
    name: 'ASUS ROG Swift Pro',
    brand: 'ASUS',
    resolution: '1440p (2560x1440)',
    refreshRate: '360Hz',
    panelType: 'IPS',
    size: '27"',
    price: '$800-900',
    responseTime: '0.03ms (GtG)',
    brightness: '600 nits',
    contrast: '1000:1',
  },
  {
    name: 'LG UltraGear',
    brand: 'LG',
    resolution: '1440p (2560x1440)',
    refreshRate: '144Hz',
    panelType: 'IPS',
    size: '27"',
    price: '$400-500',
    responseTime: '1ms (GtG)',
    brightness: '350 nits',
    contrast: '1000:1',
  },
  {
    name: 'Dell Alienware AW3423DW',
    brand: 'Dell',
    resolution: '1440p (2560x1440)',
    refreshRate: '165Hz',
    panelType: 'OLED',
    size: '34" Ultrawide',
    price: '$1200-1400',
    responseTime: '0.03ms',
    brightness: '1000 nits',
    contrast: '∞:1 (OLED)',
  },
  {
    name: 'BenQ EW2880U',
    brand: 'BenQ',
    resolution: '4K (3840x2160)',
    refreshRate: '60Hz',
    panelType: 'IPS',
    size: '28"',
    price: '$400-500',
    responseTime: '5ms (GtG)',
    brightness: '350 nits',
    contrast: '1000:1',
  },
  {
    name: 'Samsung Odyssey',
    brand: 'Samsung',
    resolution: '1440p (2560x1440)',
    refreshRate: '240Hz',
    panelType: 'VA',
    size: '27"',
    price: '$500-600',
    responseTime: '1ms',
    brightness: '400 nits',
    contrast: '3000:1',
  },
];

export default function MonitorComparisonTool() {
  const translate = t('en');
  const [monitor1, setMonitor1] = useState<Monitor | null>(PRESET_MONITORS[0]);
  const [monitor2, setMonitor2] = useState<Monitor | null>(PRESET_MONITORS[1]);
  const [monitor3, setMonitor3] = useState<Monitor | null>(PRESET_MONITORS[4]);

  const specs = [
    { label: 'Brand', key: 'brand' },
    { label: 'Resolution', key: 'resolution' },
    { label: 'Refresh Rate', key: 'refreshRate' },
    { label: 'Panel Type', key: 'panelType' },
    { label: 'Size', key: 'size' },
    { label: 'Response Time', key: 'responseTime' },
    { label: 'Brightness', key: 'brightness' },
    { label: 'Contrast', key: 'contrast' },
    { label: 'Price Range', key: 'price' },
  ];

  const highlightDifference = (
    mon1: Monitor | null,
    mon2: Monitor | null,
    key: keyof Monitor
  ): boolean => {
    if (!mon1 || !mon2) return false;
    return mon1[key] !== mon2[key];
  };

  return (
    <div className="space-y-8">
      {/* Selection Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white rounded-lg shadow-lg p-6">
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-3">{translate('monitor_compare_monitor_1_label' as any)}</label>
          <select
            value={monitor1?.name || ''}
            onChange={(e) => {
              const mon = PRESET_MONITORS.find((m) => m.name === e.target.value);
              setMonitor1(mon || null);
            }}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">{translate('monitor_compare_select_monitor_placeholder' as any)}</option>
            {PRESET_MONITORS.map((mon) => (
              <option key={mon.name} value={mon.name}>
                {mon.brand} - {mon.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-3">{translate('monitor_compare_monitor_2_label' as any)}</label>
          <select
            value={monitor2?.name || ''}
            onChange={(e) => {
              const mon = PRESET_MONITORS.find((m) => m.name === e.target.value);
              setMonitor2(mon || null);
            }}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">{translate('monitor_compare_select_monitor_placeholder' as any)}</option>
            {PRESET_MONITORS.map((mon) => (
              <option key={mon.name} value={mon.name}>
                {mon.brand} - {mon.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-3">{translate('monitor_compare_monitor_3_label' as any)}</label>
          <select
            value={monitor3?.name || ''}
            onChange={(e) => {
              const mon = PRESET_MONITORS.find((m) => m.name === e.target.value);
              setMonitor3(mon || null);
            }}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">{translate('monitor_compare_skip_option' as any)}</option>
            {PRESET_MONITORS.map((mon) => (
              <option key={mon.name} value={mon.name}>
                {mon.brand} - {mon.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison Table */}
      {monitor1 || monitor2 || monitor3 ? (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="px-6 py-4 text-left font-semibold text-slate-900 w-24">{translate('monitor_compare_spec_col_label' as any)}</th>
                  {monitor1 && (
                    <th className="px-6 py-4 text-left font-semibold text-blue-600">
                      {monitor1.brand} {monitor1.name}
                    </th>
                  )}
                  {monitor2 && (
                    <th className="px-6 py-4 text-left font-semibold text-green-600">
                      {monitor2.brand} {monitor2.name}
                    </th>
                  )}
                  {monitor3 && (
                    <th className="px-6 py-4 text-left font-semibold text-purple-600">
                      {monitor3.brand} {monitor3.name}
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, idx) => (
                  <tr
                    key={spec.key}
                    className={`border-b border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-blue-50`}
                  >
                    <td className="px-6 py-4 font-semibold text-slate-900">{spec.label}</td>
                    {monitor1 && (
                      <td
                        className={`px-6 py-4 ${
                          highlightDifference(monitor1, monitor2, spec.key as keyof Monitor) ||
                          highlightDifference(monitor1, monitor3, spec.key as keyof Monitor)
                            ? 'font-semibold text-slate-900'
                            : ''
                        }`}
                      >
                        {monitor1[spec.key as keyof Monitor]}
                      </td>
                    )}
                    {monitor2 && (
                      <td
                        className={`px-6 py-4 ${
                          highlightDifference(monitor2, monitor1, spec.key as keyof Monitor) ||
                          highlightDifference(monitor2, monitor3, spec.key as keyof Monitor)
                            ? 'font-semibold text-slate-900'
                            : ''
                        }`}
                      >
                        {monitor2[spec.key as keyof Monitor]}
                      </td>
                    )}
                    {monitor3 && (
                      <td
                        className={`px-6 py-4 ${
                          highlightDifference(monitor3, monitor1, spec.key as keyof Monitor) ||
                          highlightDifference(monitor3, monitor2, spec.key as keyof Monitor)
                            ? 'font-semibold text-slate-900'
                            : ''
                        }`}
                      >
                        {monitor3[spec.key as keyof Monitor]}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 border-t border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4">💡 {translate('monitor_compare_summary_title' as any)}</h3>
            <ul className="text-sm text-slate-700 space-y-2">
              {monitor1 && (
                <li>
                  <strong className="text-blue-600">{monitor1.brand}</strong>: Best for{' '}
                  {monitor1.refreshRate === '360Hz' && 'competitive esports'}
                  {monitor1.panelType === 'OLED' && 'visual quality and contrast'}
                  {monitor1.resolution.includes('4K') && 'detailed work and professional use'}
                  {!['360Hz', 'OLED'].some((s) => JSON.stringify(monitor1).includes(s)) &&
                    !monitor1.resolution.includes('4K') &&
                    'gaming and general use'}
                </li>
              )}
              {monitor2 && (
                <li>
                  <strong className="text-green-600">{monitor2.brand}</strong>: Best for{' '}
                  {monitor2.refreshRate === '360Hz' && 'competitive esports'}
                  {monitor2.panelType === 'OLED' && 'visual quality and contrast'}
                  {monitor2.resolution.includes('4K') && 'detailed work and professional use'}
                  {!['360Hz', 'OLED'].some((s) => JSON.stringify(monitor2).includes(s)) &&
                    !monitor2.resolution.includes('4K') &&
                    'gaming and general use'}
                </li>
              )}
              {monitor3 && (
                <li>
                  <strong className="text-purple-600">{monitor3.brand}</strong>: Best for{' '}
                  {monitor3.refreshRate === '360Hz' && 'competitive esports'}
                  {monitor3.panelType === 'OLED' && 'visual quality and contrast'}
                  {monitor3.resolution.includes('4K') && 'detailed work and professional use'}
                  {!['360Hz', 'OLED'].some((s) => JSON.stringify(monitor3).includes(s)) &&
                    !monitor3.resolution.includes('4K') &&
                    'gaming and general use'}
                </li>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-slate-100 rounded-lg p-12 text-center">
          <p className="text-slate-600 mb-4">{translate('monitor_compare_minimum_hint' as any)}</p>
        </div>
      )}
    </div>
  );
}
