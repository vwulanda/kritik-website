'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function ResetPassword() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hash = window.location.hash;
    const match = hash.match(/access_token=([^&]*)/);
    if (match && match[1]) {
      const token = match[1];
      setAccessToken(token);
    } else {
      setError('Invalid or missing reset token.');
    }
    setLoading(false);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accessToken) return;

    const { error: updateError } = await supabase.auth.updateUser(
      { password: newPassword },
      { accessToken }
    );

    if (updateError) {
      setError(updateError.message);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <main className="relative min-h-screen bg-white text-primary px-6 py-10 overflow-hidden scroll-smooth">
      {/* 🧭 Sticky Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm px-6 py-4 flex justify-center gap-6 text-sm text-[#4B3F72] font-semibold tracking-wide">
        <a href="/" className="hover:underline">Home</a>
        <a href="/#download" className="hover:underline">Get the App</a>
        <a href="/#feedback" className="hover:underline">Feedback</a>
      </nav>

      <div className="h-16" />

      {/* 🫧 Background blob */}
      <div className="absolute top-[-100px] -left-20 w-[500px] h-[500px] bg-[#F3F0FF] rounded-full blur-[100px] opacity-60 z-0" />

      <div className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center animate-fade-in">
        {/* 🔥 Logo */}
        <motion.div
          whileTap={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Image
            src="/logo.png"
            alt="kritik.ai logo"
            width={100}
            height={100}
            className="mx-auto mb-6 cursor-pointer"
          />
        </motion.div>

        <h1 className="text-3xl font-extrabold mb-4 text-[#4B3F72]">Reset Your Password</h1>

        {loading && <p>Loading...</p>}

        {!loading && !submitted && !error && (
          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full bg-[#F2F2F2] text-black px-4 py-3 rounded-lg mb-4 focus:outline-none"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              minLength={6}
              required
            />
            <button
              type="submit"
              className="w-full bg-[#4B3F72] text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-[#3d3460] transition-all duration-200"
            >
              Update Password
            </button>
          </form>
        )}

        {error && (
          <p className="text-red-500 mt-4">{error}</p>
        )}

        {submitted && (
          <div className="mt-6">
            <p className="text-green-600 font-medium mb-4">Your password has been updated! 🎉</p>
            <a
              href="/"
              className="mt-2 inline-block px-5 py-3 bg-[#4B3F72] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-[#3d3460] transition-all duration-200"
            >
              Return to Home
            </a>
          </div>
        )}
      </div>
    </main>
  );
}