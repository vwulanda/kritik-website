'use client';

import { useEffect } from 'react';

export default function DeeplinkRedirectPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = `kritik-ai://reset-password${hash}`;
      window.location.replace(target);
    } else {
      document.body.innerText = 'Something went wrong. No session found.';
    }
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
      Redirecting you back to the app…
    </div>
  );
}