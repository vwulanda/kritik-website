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

  const token = searchParams.get('token');
  const type = searchParams.get('type') || 'recovery';

  const [status, setStatus] = useState<'verifying' | 'ready' | 'error' | 'updating' | 'success'>('verifying');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setStatus('error');
        setErrorMsg('Missing token in URL.');
        return;
      }

      const { error } = await supabase.auth.verifyOtp({
        type: 'recovery',
        token,
      } as Parameters<typeof supabase.auth.verifyOtp>[0]); // ✅ Safe TS cast

      if (error) {
        console.error('OTP verification failed:', error.message);
        setStatus('error');
        setErrorMsg(error.message);
      } else {
        setStatus('ready');
      }
    };

    verifyToken();
  }, [token, type]);

  const handleUpdate = async () => {
    if (!password || password.length < 6 || password !== confirm) {
      setErrorMsg('Passwords must match and be at least 6 characters.');
      return;
    }

    setStatus('updating');

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setErrorMsg(error.message);
      setStatus('ready');
    } else {
      setStatus('success');
    }
  };

  if (status === 'verifying') {
    return <p className="p-10">Verifying reset token...</p>;
  }

  if (status === 'error') {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <p className="text-red-500 text-lg font-semibold mb-2">⚠️ Reset link is invalid or has expired.</p>
        <p className="text-sm text-gray-600">Please request a new reset link or contact us at <a href="mailto:support@kritik.ai" className="underline">support@kritik.ai</a>.</p>
      </main>
    );
  }

  if (status === 'success') {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <p className="text-green-700 text-lg font-semibold mb-2">✅ Password updated successfully!</p>
        <p className="text-sm text-gray-600">You can now return to the kritik.ai app and log in.</p>
        <a
          href="kritik-ai://auth"
          className="mt-6 text-purple-700 underline text-sm"
        >
          Open the App
        </a>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Reset Your Password</h1>

      {errorMsg && <p className="text-red-500 text-sm mb-4">{errorMsg}</p>}

      <input
        type="password"
        placeholder="New password"
        className="border p-2 rounded mb-2 w-full max-w-sm"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm password"
        className="border p-2 rounded mb-4 w-full max-w-sm"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <button
        onClick={handleUpdate}
        disabled={status === 'updating'}
        className="bg-purple-700 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {status === 'updating' ? 'Updating...' : 'Update Password'}
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