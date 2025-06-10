'use client';

import Link from 'next/link';
import Head from 'next/head';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>How to Get Honest Feedback on Your Art Without Feeling Defeated – kritik.ai</title>
        <meta
          name="description"
          content="Why vague compliments or silence won’t help you grow — and what kind of feedback actually does."
        />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          How to Get Honest Feedback on Your Art Without Feeling Defeated
        </h1>

        <p className="text-muted mb-6">June 2025 · 4 min read</p>

        <p className="mb-4">
          Getting real feedback on your art is one of the fastest ways to grow — but let’s be honest, it can also be one of the hardest. Too often, artists get vague compliments (“Looks good!”) or, worse, total silence. And when someone *does* offer critique, it can feel discouraging or unclear.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Understand What “Helpful” Actually Means</h2>
        <p className="mb-4">
          Helpful critique isn’t just pointing out what’s wrong — it’s showing you *why* something isn’t working and offering ideas for improvement. Think: “Your composition feels crowded; try more negative space” instead of “This looks messy.”
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. Ask for Specific, Not General, Feedback</h2>
        <p className="mb-4">
          General questions get general answers. Instead of asking “What do you think?”, try:  
          “How’s the lighting in this piece?” or “Does the color palette feel cohesive?”  
          This helps the person giving feedback focus on what matters to you.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Feedback Is a Skill — On Both Sides</h2>
        <p className="mb-4">
          Giving good critique is a skill, just like painting or drawing. Not everyone knows how to offer useful insights, and that’s okay. If you're asking friends or other artists, be patient — or guide them by sharing what kind of feedback helps you most.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Use Tools That Give You Constructive Insight</h2>
        <p className="mb-4">
          Platforms like <Link href="/" className="underline text-[#4B3F72]">kritik.ai</Link> are built to fill that gap. Instead of vague AI responses or comment sections, you get structured critique broken into <strong>Summary, Technique, and Context</strong> — in a tone you choose (gentle, honest, or direct).
        </p>

        <p className="mb-4">
          The goal isn’t to judge your work — it’s to help you grow with feedback that’s clear, actionable, and respectful.
        </p>

        <div className="mt-10 border-t pt-6 text-center">
          <p className="mb-2 font-medium">Want critique that actually helps you grow?</p>
          <a
            href="https://apps.apple.com/us/app/kritik-ai/id6745596097"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4B3F72] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#3c2f5f] transition-all"
          >
            Try kritik.ai free →
          </a>

          <div className="mt-6">
            <Link href="/" className="text-sm text-[#4B3F72] underline hover:text-[#3c2f5f]">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}