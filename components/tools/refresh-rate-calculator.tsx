'use client';

import { useState, useEffect } from 'react';
import { t } from '@/lib/translations';

interface GPUSpec {
  name: string;
  tier: 'entry' | 'mid' | 'high' | 'ultra';
  recommendedHz: number;
}

interface CPUSpec {
  name: string;
  tier: 'entry' | 'mid' | 'high' | 'ultra';
}

const GPU_OPTIONS: GPUSpec[] = [
  { name: 'RTX 4090', tier: 'ultra', recommendedHz: 360 },
  { name: 'RTX 4080', tier: 'ultra', recommendedHz: 360 },
  { name: 'RTX 4070 Ti', tier: 'high', recommendedHz: 360 },
  { name: 'RTX 4070', tier: 'high', recommendedHz: 240 },
  { name: 'RTX 4060 Ti', tier: 'high', recommendedHz: 144 },
  { name: 'RTX 3090 Ti', tier: 'high', recommendedHz: 360 },
  { name: 'RTX 3080 Ti', tier: 'high', recommendedHz: 240 },
  { name: 'RTX 3070', tier: 'mid', recommendedHz: 240 },
  { name: 'RTX 3060 Ti', tier: 'mid', recommendedHz: 144 },
  { name: 'RTX 3060', tier: 'mid', recommendedHz: 144 },
  { name: 'RTX 2080 Ti', tier: 'mid', recommendedHz: 144 },
  { name: 'RTX 2080', tier: 'mid', recommendedHz: 144 },
  { name: 'RTX 2070', tier: 'mid', recommendedHz: 100 },
  { name: 'GTX 1660 Ti', tier: 'entry', recommendedHz: 144 },
  { name: 'GTX 1660', tier: 'entry', recommendedHz: 100 },
  { name: 'GTX 1650', tier: 'entry', recommendedHz: 75 },
  { name: 'RTX 4060', tier: 'entry', recommendedHz: 60 },
  { name: 'No GPU (iGPU)', tier: 'entry', recommendedHz: 60 },
];

const CPU_OPTIONS: CPUSpec[] = [
  { name: 'Intel i9-14900K', tier: 'ultra' },
  { name: 'Intel i9-13900K', tier: 'ultra' },
  { name: 'AMD Ryzen 9 7950X', tier: 'ultra' },
  { name: 'Intel i7-14700K', tier: 'high' },
  { name: 'Intel i7-13700K', tier: 'high' },
  { name: 'AMD Ryzen 7 7700X', tier: 'high' },
  { name: 'Intel i5-14600K', tier: 'mid' },
  { name: 'Intel i5-13600K', tier: 'mid' },
  { name: 'AMD Ryzen 5 5600X', tier: 'mid' },
  { name: 'Intel i5-12400', tier: 'mid' },
  { name: 'Intel i3-14100', tier: 'entry' },
  { name: 'AMD Ryzen 5 5500', tier: 'entry' },
];

export default function RefreshRateCalculator() {
  const translate = t('en');
  const [selectedGPU, setSelectedGPU] = useState<GPUSpec | null>(GPU_OPTIONS[0]);
  const [selectedCPU, setSelectedCPU] = useState<CPUSpec | null>(CPU_OPTIONS[0]);
  const [recommendation, setRecommendation] = useState<number>(60);

  useEffect(() => {
    if (!selectedGPU || !selectedCPU) return;

    // GPU determines refresh rate ceiling
    // CPU tier provides minor boost
    let recommendedHz = selectedGPU.recommendedHz;

    // CPU tier can provide small boost
    if (selectedCPU.tier === 'ultra' && recommendedHz < 360) {
      recommendedHz = Math.min(recommendedHz + 20, 360);
    } else if (selectedCPU.tier === 'high' && recommendedHz < 240) {
      recommendedHz = Math.min(recommendedHz + 10, 360);
    }

    setRecommendation(recommendedHz);
  }, [selectedGPU, selectedCPU]);

  const getRecommendationText = (hz: number): string => {
    if (hz >= 360) {
      return 'Excellent for esports and competitive gaming. Your setup can handle 360Hz+ monitors.';
    } else if (hz >= 240) {
      return 'Great for competitive gaming. A 240Hz monitor would be ideal for your system.';
    } else if (hz >= 144) {
      return 'Good for gaming. A 144Hz monitor is perfect for smooth gameplay.';
    } else if (hz >= 100) {
      return 'Suitable for casual gaming. Consider a 100-120Hz monitor for better smoothness.';
    } else {
      return 'Best for productivity. 60Hz monitors are fine, gaming refresh rate is not a priority.';
    }
  };

  const getColorClass = (hz: number): string => {
    if (hz >= 360) return 'text-purple-800';
    if (hz >= 240) return 'text-blue-800';
    if (hz >= 144) return 'text-green-800';
    if (hz >= 100) return 'text-amber-700';
    return 'text-slate-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      {/* GPU Selection */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-slate-900 mb-3">
          {translate('refresh_rate_gpu_label' as any)}
        </label>
        <select
          value={selectedGPU?.name || ''}
          onChange={(e) => {
            const gpu = GPU_OPTIONS.find((g) => g.name === e.target.value);
            setSelectedGPU(gpu || null);
          }}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black"
        >
          <option value="">{translate('refresh_rate_gpu_placeholder' as any)}</option>
          {GPU_OPTIONS.map((gpu) => (
            <option key={gpu.name} value={gpu.name}>
              {gpu.name}
            </option>
          ))}
        </select>
      </div>

      {/* CPU Selection */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-slate-900 mb-3">
          {translate('refresh_rate_cpu_label' as any)}
        </label>
        <select
          value={selectedCPU?.name || ''}
          onChange={(e) => {
            const cpu = CPU_OPTIONS.find((c) => c.name === e.target.value);
            setSelectedCPU(cpu || null);
          }}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black"
        >
          <option value="">{translate('refresh_rate_cpu_placeholder' as any)}</option>
          {CPU_OPTIONS.map((cpu) => (
            <option key={cpu.name} value={cpu.name}>
              {cpu.name}
            </option>
          ))}
        </select>
      </div>

      {/* Recommendation */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-lg border-2 border-blue-200">
        <p className="text-sm font-semibold text-slate-800 mb-2">{translate('refresh_rate_recommended_label' as any)}</p>
        <p className={`text-6xl font-bold mb-4 ${getColorClass(recommendation)}`}>
          {recommendation}Hz
        </p>
        <p className="text-lg font-medium text-slate-800">{getRecommendationText(recommendation)}</p>

        {/* Monitor Options */}
        <div className="mt-6 pt-6 border-t border-slate-200">
          <p className="text-sm font-semibold text-slate-900 mb-4">{translate('refresh_rate_monitor_recommendations_label' as any)}</p>
          <div className="space-y-2 text-sm">
            {recommendation >= 240 && (
              <div className="flex items-center gap-2">
                <span className="text-blue-800 font-bold">✓</span>
                <span className="text-slate-800">240Hz or 360Hz gaming monitor</span>
              </div>
            )}
            {recommendation >= 144 && recommendation < 240 && (
              <div className="flex items-center gap-2">
                <span className="text-green-800 font-bold">✓</span>
                <span className="text-slate-800">144Hz gaming monitor (excellent choice)</span>
              </div>
            )}
            {recommendation >= 100 && recommendation < 144 && (
              <div className="flex items-center gap-2">
                <span className="text-amber-700 font-bold">✓</span>
                <span className="text-slate-800">120Hz or 144Hz monitor for smooth experience</span>
              </div>
            )}
            {recommendation < 100 && (
              <div className="flex items-center gap-2">
                <span className="text-slate-800 font-bold">✓</span>
                <span className="text-slate-800">60Hz or 75Hz monitor (standard)</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-slate-900 mb-3">💡 {translate('refresh_rate_tips_title' as any)}</h3>
        <ul className="space-y-2 text-sm text-slate-800 font-medium">
          <li>
            {translate('refresh_rate_tip_1' as any)}
          </li>
          <li>{translate('refresh_rate_tip_2' as any)}</li>
          <li>{translate('refresh_rate_tip_3' as any)}</li>
          <li>{translate('refresh_rate_tip_4' as any)}</li>
        </ul>
      </div>
    </div>
  );
}
