'use client';

import type { ReactNode } from 'react';

interface RouteTransitionProps {
  children: ReactNode;
}

export default function RouteTransition({ children }: RouteTransitionProps) {
  return <>{children}</>;
}
