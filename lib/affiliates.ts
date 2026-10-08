// lib/affiliates.ts - Affiliate products shown under each hardware test.
//
// A product only shows when `enabled` is true AND `url` is filled in. When a
// tool has no product that passes, its whole affiliate block is hidden.
// Links are rendered with rel="sponsored nofollow noopener".

import type { HardwareToolId } from './hardware-tools';

export interface AffiliateProduct {
  name: string;
  description: string;
  url: string;
  enabled: boolean;
}

type ToolWithAffiliates = Exclude<HardwareToolId, 'screen-test'>;

export const AFFILIATES: Record<ToolWithAffiliates, AffiliateProduct[]> = {
  'mic-test': [
    { name: '', description: '', url: '', enabled: false },
    { name: '', description: '', url: '', enabled: false },
    { name: '', description: '', url: '', enabled: false },
  ],
  'keyboard-test': [
    { name: '', description: '', url: '', enabled: false },
    { name: '', description: '', url: '', enabled: false },
    { name: '', description: '', url: '', enabled: false },
  ],
  'webcam-test': [
    { name: '', description: '', url: '', enabled: false },
    { name: '', description: '', url: '', enabled: false },
    { name: '', description: '', url: '', enabled: false },
  ],
  'click-speed-test': [
    { name: '', description: '', url: '', enabled: false },
    { name: '', description: '', url: '', enabled: false },
    { name: '', description: '', url: '', enabled: false },
  ],
  'used-laptop-check': [
    { name: '', description: '', url: '', enabled: false },
    { name: '', description: '', url: '', enabled: false },
    { name: '', description: '', url: '', enabled: false },
  ],
};

export function getAffiliates(tool: ToolWithAffiliates): AffiliateProduct[] {
  return AFFILIATES[tool].filter((p) => p.enabled && p.url.trim() !== '' && p.name.trim() !== '');
}
