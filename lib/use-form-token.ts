// lib/use-form-token.ts - Fetches a signed token for a mail form when it mounts
// (see lib/form-token.ts). The token is '' until it has arrived. Tokens are
// single-use, so call refresh() after a send that failed to get a new one.

'use client';

import { useCallback, useEffect, useState } from 'react';

export function useFormToken(): { token: string; refresh: () => void } {
  const [token, setToken] = useState('');
  const [round, setRound] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setToken('');
    fetch('/api/form-token', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data: { token?: string }) => {
        if (!cancelled && data.token) setToken(data.token);
      })
      .catch(() => {
        // The form won't send without a token and tells the visitor to retry.
      });
    return () => {
      cancelled = true;
    };
  }, [round]);

  const refresh = useCallback(() => setRound((r) => r + 1), []);
  return { token, refresh };
}
