'use client';
export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { getSupabaseClient } from '@/lib/supabase';

export default function DeeplinkRedirectPage() {
  const [status, setStatus] = useState('Verifying your session...');

  useEffect(() => {
    const supabase = getSupabaseClient();

    const attemptSessionFromHash = async () => {
      try {
        const hash = window.location.hash;

        if (!hash) {
          setStatus('No session information found.');
          return;
        }

        const params = new URLSearchParams(hash.replace('#', ''));
        const access_token = params.get('access_token');
        const refresh_token = params.get('refresh_token');

        if (!access_token || !refresh_token) {
          setStatus('Missing tokens in URL.');
          return;
        }

        const { error } = await supabase.auth.setSession({
          access_token,
          refresh_token,
        });

        if (error) {
          console.error('setSession error:', error.message);
          setStatus('Session expired or invalid.');
          return;
        }

        setStatus('Success! Redirecting to the app...');
        setTimeout(() => {
          window.location.replace('kritik-ai://reset-password');
        }, 1000);
      } catch (err) {
        console.error('Unexpected error during token parsing:', err);
        setStatus('Unexpected error. Please try again.');
      }
    };

    attemptSessionFromHash();
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