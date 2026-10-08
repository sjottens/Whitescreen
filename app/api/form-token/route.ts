// app/api/form-token/route.ts - Hands a mail form its signed token (lib/form-token.ts).

import { NextResponse } from 'next/server';
import { createFormToken } from '@/lib/form-token';

export const dynamic = 'force-dynamic';

export function GET() {
  return NextResponse.json({ token: createFormToken() }, { headers: { 'Cache-Control': 'no-store' } });
}
