// kritik-website/app/reset/page.tsx
'use client';
export const dynamic = 'force-dynamic';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://viyyufypzokhurpkjddj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpeXl1Znlwem9raHVycGtqZGRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMjgwNjcsImV4cCI6MjA2MDkwNDA2N30.sCpLhULmoHLbSZEAbKNx9NpEODobsZOVQHg2Cdx6oE8'
);

function ResetPasswordInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [status, setStatus] = useState<'loading' | 'ready' | 'success' | 'error'>('loading');

  const access_token = searchParams.get('access_token');
  const refresh_token = searchParams.get('refresh_token');

  useEffect(() => {
    const exchange = async () => {
      if (!access_token || !refresh_token) {
        setStatus('error');
        return;
      }
      const { error } = await supabase.auth.setSession({ access_token, refresh_token });
      if (error) {
        setStatus('error');
      } else {
        setStatus('ready');
      }
    };
    exchange();
  }, [access_token, refresh_token]);

  const handleUpdate = async () => {
    if (!password || password.length < 6 || password !== confirm) return;
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      alert('Error: ' + error.message);
    } else {
      setStatus('success');
    }
  };

  if (status === 'loading') return <p className="p-10">Verifying token...</p>;
  if (status === 'error') return <p className="p-10 text-red-500">Invalid or expired token.</p>;
  <main className="p-10 text-center">
  <p className="text-green-700 font-semibold mb-2">✅ Password updated successfully!</p>
  <p className="text-sm text-gray-600">You can now return to the kritik.ai app and log in with your new password.</p>
  <a
    href="kritik-ai://auth"
    className="mt-6 inline-block text-purple-700 underline text-sm"
  >
    Open the App
  </a>
</main>

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Reset Your Password</h1>
      <input
        type="password"
        placeholder="New password"
        className="border p-2 rounded mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm password"
        className="border p-2 rounded mb-4"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <button
        onClick={handleUpdate}
        className="bg-purple-700 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={password.length < 6 || password !== confirm}
      >
        Update Password
      </button>
    </main>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<p className="p-10">Loading...</p>}>
      <ResetPasswordInner />
    </Suspense>
  );
}