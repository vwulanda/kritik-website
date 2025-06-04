// app/blog/page.tsx
'use client';

import Link from 'next/link';

export default function BlogIndex() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🎨 Artist Blog</h1>
      <p className="mb-8 text-gray-600">
        Honest advice, creative prompts, and feedback tips for artists — written to help you grow.
      </p>

      <ul className="space-y-6">
        <li>
          <Link href="/blog/how-can-I-grow-as-an-artist" className="text-xl text-[#4B3F72] font-semibold hover:underline">
            How Can I Grow as an Artist Without Going to Art School?
          </Link>
          <p className="text-sm text-gray-600">Tips for self-taught artists looking to grow without formal training.</p>
        </li>
        <li>
          <Link href="/blog/ai-feedback-for-artists" className="text-xl text-[#4B3F72] font-semibold hover:underline">
            AI Feedback for Artists: Helpful or Harmful?
          </Link>
          <p className="text-sm text-gray-600">The pros and cons of getting art critique from AI.</p>
        </li>
        <li>
          <Link href="/blog/how-to-get-honest-feedback" className="text-xl text-[#4B3F72] font-semibold hover:underline">
            How to Get Honest Feedback on Your Art (Without Judgment)
          </Link>
          <p className="text-sm text-gray-600">A guide to getting real, helpful feedback — minus the harsh vibes.</p>
        </li>
        <li>
          <Link href="/blog/anonymous-art-feedback" className="text-xl text-[#4B3F72] font-semibold hover:underline">
            Where Can I Share My Art Anonymously for Feedback?
          </Link>
          <p className="text-sm text-gray-600">Best platforms for safe, judgment-free art critique — including kritik.ai.</p>
        </li>
        <li>
          <Link href="/blog/what-makes-a-great-art-critique" className="text-xl text-[#4B3F72] font-semibold hover:underline">
            What Makes a Great Art Critique? A Beginner’s Guide
          </Link>
          <p className="text-sm text-gray-600">Understand what separates helpful critique from vague comments.</p>
        </li>
      </ul>
      <div className="mt-12 text-center">
  <Link href="/" className="text-sm text-[#4B3F72] underline hover:text-[#3c2f5f]">
    ← Back to Home
  </Link>
</div>
    </main>
  );
}