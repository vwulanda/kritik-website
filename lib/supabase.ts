// kritik-website/lib/supabase.ts
import { createBrowserClient } from '@supabase/ssr';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export const supabase = createClientComponentClient();