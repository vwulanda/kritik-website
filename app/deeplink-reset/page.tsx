'use client';
export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { getSupabaseClient } from '@/lib/supabase';

export default function DeeplinkRedirectPage() {
  const [status, setStatus] = useState('Verifying your session...');

  useEffect(() => {
    const exchange = async () => {
      const supabase = getSupabaseClient();

      try {
        // If the token is in the hash (e.g. #access_token=...), rebuild full URL manually
        const currentUrl = window.location.href;
        const hash = window.location.hash;
        let fullUrl = currentUrl;

        if (hash && !currentUrl.includes('?')) {
          const base = currentUrl.split('#')[0];
          const queryFromHash = hash.replace('#', '?');
          fullUrl = base + queryFromHash;
        }

        console.log('[Deeplink Reset] Final URL for exchange:', fullUrl);

        const { data, error } = await supabase.auth.exchangeCodeForSession(fullUrl);

        if (error) {
          console.error('Token exchange failed:', error.message);
          setStatus('Session expired or invalid link.');
          return;
        }

        if (!data?.session) {
          console.warn('Token exchange returned no session.');
          setStatus('Something went wrong. No session returned.');
          return;
        }

        console.log('Session exchange successful:', data.session);
        setStatus('Success! Redirecting to the app...');

        setTimeout(() => {
          window.location.replace('kritik-ai://reset-password');
        }, 1000);
      } catch (err) {
        console.error('Unexpected error during session exchange:', err);
        setStatus('Unexpected error. Please try again.');
      }
    };

    exchange();
  }, []);

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        fontSize: '1rem',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      {status}
    </div>
  );
}