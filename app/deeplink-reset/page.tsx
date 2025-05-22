'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function DeeplinkRedirectPage() {
  const [status, setStatus] = useState('Verifying your session...');

  useEffect(() => {
    const exchange = async () => {
      try {
        const { data, error } = await supabase.auth.exchangeCodeForSession(window.location.href);

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

        // ✅ Give Supabase session a brief moment to initialize
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