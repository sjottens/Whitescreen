// components/providers/consent-provider.tsx - Consent state management provider

'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ConsentState,
  getConsentFromStorage,
  saveConsentToStorage,
  DEFAULT_CONSENT,
} from '@/lib/consent-types';

interface ConsentContextType {
  consent: ConsentState;
  updateConsent: (consent: ConsentState) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  hasConsented: boolean;
  isInitialized: boolean;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_CONSENT);
  const [hasConsented, setHasConsented] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize from localStorage on client
  useEffect(() => {
    const stored = getConsentFromStorage();
    setConsent(stored);
    setHasConsented(stored.analytics || stored.marketing || stored.preferences);
    setIsInitialized(true);
  }, []);

  const updateConsent = (newConsent: ConsentState) => {
    setConsent(newConsent);
    saveConsentToStorage(newConsent);
    setHasConsented(newConsent.analytics || newConsent.marketing || newConsent.preferences);
  };

  const acceptAll = () => {
    const newConsent: ConsentState = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
      version: DEFAULT_CONSENT.version,
    };
    updateConsent(newConsent);
  };

  const rejectAll = () => {
    const newConsent: ConsentState = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: true,
      version: DEFAULT_CONSENT.version,
    };
    updateConsent(newConsent);
  };

  return (
    <ConsentContext.Provider
      value={{
        consent,
        updateConsent,
        acceptAll,
        rejectAll,
        hasConsented,
        isInitialized,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error('useConsent must be used within ConsentProvider');
  }
  return context;
}
