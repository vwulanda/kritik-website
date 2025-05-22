'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function DeeplinkRedirectPage() {
  const [status, setStatus] = useState('Verifying your session...');

  useEffect(() => {
    const exchange = async () => {
      try {
        const { error } = await supabase.auth.exchangeCodeForSession(window.location.href);
        if (error) {
          console.error('Token exchange failed:', error.message);
          setStatus('Session expired or invalid link.');
        } else {
          setStatus('Success! Redirecting to the app...');
          window.location.replace('kritik-ai://reset-password');
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setStatus('Something went wrong while verifying your session.');
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