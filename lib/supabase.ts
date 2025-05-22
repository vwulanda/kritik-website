'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';

// ❗ Wrap Supabase inside a function to avoid evaluating at import time
let _supabase: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (!_supabase) {
    _supabase = createClientComponentClient();
  }
  return _supabase;
}