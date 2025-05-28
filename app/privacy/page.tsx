'use client';

import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-[#4B3F72]">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Privacy & Disclaimer</h1>

        <p>
          <strong>Your privacy matters to us.</strong> At <span className="font-semibold">kritik.ai</span>, we don’t sell your data or track you across the web. We collect only what’s needed to make your experience better — like your email and artwork uploads — and we keep it secure.
        </p>

        <p>
          <strong>AI-generated critiques are just that — AI-generated.</strong> While we use advanced models to provide structured feedback, the critiques should be seen as guidance, not professional evaluations. They're here to help you grow, reflect, and refine your work, not to judge it.
        </p>

        <p>
          <strong>Beta warning!</strong> Kritik.ai is in its early stages. Bugs might pop up, features may evolve, and we’re still learning. By using the app, you're agreeing to be part of this creative journey — glitches and all.
        </p>

        <p>
          Have questions or feedback? Reach out anytime at <a href="mailto:hello@kritik.ai" className="underline">hello@kritik.ai</a>.
        </p>

        <Link href="/" className="inline-block mt-6 text-[#4B3F72] underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}