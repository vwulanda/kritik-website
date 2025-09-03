'use client';

import Link from 'next/link';
import Head from 'next/head';

export default function BlogPost() {
  const title =
    'Two AIs Are Better Than One: How kritik.ai Double-Checks Every Critique – kritik.ai';
  const description =
    "Every critique on kritik.ai is drafted by one AI and checked by another. Plain-English breakdown of how our Writer ↔ Reviewer loop reduces errors and keeps feedback useful.";
  const url = 'https://kritik.ai/blog/two-ais-are-better-than-one';

  return (
    <>
      {/* Extra <Head> for social cards when navigating client-side */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Two AIs Are Better Than One: How kritik.ai Double-Checks Every Critique
        </h1>

        <p className="text-muted mb-6">September 2025 · 4 min read</p>

        <p className="mb-4">
          Getting feedback on your art can be nerve-wracking. And when it comes
          from AI, it's fair to ask: <em>"Can I trust this?"</em> With kritik.ai,
          every critique is made in two steps: a <strong>Writer AI drafts</strong> it,
          then a <strong>Reviewer AI checks</strong> it for structure, clarity, and grounded
          claims. If the Reviewer flags issues, the draft is revised before you see it.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Why double-check?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Reduce misses:</strong> the Reviewer catches vague lines and nudges the Writer to be concrete.</li>
          <li><strong>Keep structure:</strong> every critique follows <em>Summary → Technique → Context</em>, so it’s easy to act on.</li>
          <li><strong>Stay kind, not fluffy:</strong> tone can be gentle or honest, but never random.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">How it works</h2>
        <div className="bg-gray-50 border rounded-lg p-4 leading-6 text-sm">
          <p className="mb-2"><strong>1) Writer AI:</strong> looks at your image (and optional caption) and drafts a critique in three sections.</p>
          <p className="mb-2"><strong>2) Reviewer AI:</strong> checks clarity, structure, and claims. If something’s off, it sends it back for a quick fix.</p>
          <p className="mb-0"><strong>3) You:</strong> get a clean, structured read you can actually use.</p>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-2">Coming soon: Artist references & tips</h2>
        <p className="mb-4">
          We’ve also begun adding <strong>style parallels</strong> and
          <strong> “How to Get Closer”</strong> tips. Behind the scenes, kritik.ai
          pulls short, public snippets from Wikipedia about artists’ styles and
          turns them into quick, grounded notes—kind of like a tiny moodboard in
          words. (We keep sources attached so you can read more.)
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">What you’ll notice in the app</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Three clear sections: <em>Summary, Technique, Context</em>.</li>
          <li>Optional tone switch: <strong>gentle</strong> ↔ <strong>honest</strong>.</li>
          <li>“Style Parallels” + “How to Get Closer,” with source links.</li>
        </ul>

        <div className="mt-10 border-t pt-6 text-center">
          <p className="mb-2 font-medium">Try a double-checked critique on your next piece</p>
          <a
            href="https://apps.apple.com/us/app/kritik-ai/id6745596097"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4B3F72] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#3c2f5f] transition-all"
          >
            Get a Kritik critique →
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