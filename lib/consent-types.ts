// lib/consent-types.ts - Cookie consent types and utilities

export type ConsentType = 'analytics' | 'marketing' | 'preferences';

export interface ConsentState {
  necessary: boolean; // Always true, required for functionality
  analytics: boolean; // Google Analytics - for usage statistics
  marketing: boolean; // Google AdSense personalized ads
  preferences: boolean; // Language preference, theme
  consentedAt?: number; // Timestamp when user gave consent
  version: number; // Consent banner version
}

export const CONSENT_STORAGE_KEY = 'testascreen_consent';
export const CONSENT_VERSION = 1;

export const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: true,
  version: CONSENT_VERSION,
};

export function getConsentFromStorage(): ConsentState {
  if (typeof window === 'undefined') return DEFAULT_CONSENT;
  
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        ...DEFAULT_CONSENT,
        ...parsed,
        version: CONSENT_VERSION,
      };
    }
  } catch (error) {
    console.warn('Failed to read consent from storage:', error);
  }
  
  return DEFAULT_CONSENT;
}

export function saveConsentToStorage(consent: ConsentState): void {
  if (typeof window === 'undefined') return;
  
  try {
    const toStore: ConsentState = {
      ...consent,
      consentedAt: Date.now(),
      version: CONSENT_VERSION,
    };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(toStore));
  } catch (error) {
    console.warn('Failed to save consent to storage:', error);
  }
}
