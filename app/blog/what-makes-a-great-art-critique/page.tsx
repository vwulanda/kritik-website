'use client';

import Link from 'next/link';
import Head from 'next/head';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>What Makes a Great Art Critique? Use the Summary–Technique–Context Loop – kritik.ai</title>
        <meta
          name="description"
          content="Great critique follows a repeatable loop: Self-critique → kritik.ai’s structured pass (Summary–Technique–Context) → peer feedback. See examples and a paste-ready template."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "What Makes a Great Art Critique? Use the Summary–Technique–Context Loop",
              "description": "Great critique follows a repeatable loop: Self-critique → kritik.ai’s structured pass (Summary–Technique–Context) → peer feedback. See examples and a paste-ready template.",
              "author": { "@type": "Person", "name": "kritik.ai" },
              "publisher": {
                "@type": "Organization",
                "name": "kritik.ai",
                "logo": { "@type": "ImageObject", "url": "https://kritik.ai/logo.png" }
              },
              "url": "https://kritik.ai/blog/what-makes-a-great-art-critique",
              "mainEntityOfPage": "https://kritik.ai/blog/what-makes-a-great-art-critique",
              "datePublished": "2025-08-18",
              "dateModified": "2025-08-18"
            })
          }}
        />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          What Makes a Great Art Critique? Use the Summary–Technique–Context Loop
        </h1>

        <p className="text-muted mb-6">August 2025 · 6 min read</p>

        <p className="mb-4">
          A great critique isn’t a verdict—it’s a roadmap. The fastest way to make your next pass better is to follow a
          repeatable loop: <strong>Self-critique → kritik.ai’s structured pass → peer feedback</strong>. All three use the
          same backbone: <em>Summary, Technique, Context</em>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">The backbone (and why we use it in kritik.ai)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Summary:</strong> Restate the intent and what the piece currently communicates.</li>
          <li><strong>Technique:</strong> Specific, observable notes (composition, value grouping, color, edges, perspective, texture).</li>
          <li><strong>Context:</strong> How choices support the goal, audience, references; trade-offs and next steps.</li>
        </ol>
        <p className="mb-4">
          <Link href="/" className="underline text-[#4B3F72]">kritik.ai</Link> outputs your critique in exactly this structure—so your
          private pass and your public ask speak the same language.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">The loop: from draft to confident share</h2>
        <div className="bg-gray-50 border rounded-lg p-4 text-sm leading-6 mb-4">
          <p className="mb-1"><strong>1) Self-critique:</strong> Do a quick STC pass yourself (2–3 sentences per section).</p>
          <p className="mb-1"><strong>2) Run through kritik.ai:</strong> Upload, choose tone (gentle / honest / direct), and get a structured STC critique.</p>
          <p className="mb-1"><strong>3) Merge & edit:</strong> Combine your notes + Kritik’s suggestions into 2–3 high-impact changes.</p>
          <p className="mb-0"><strong>4) Share publicly:</strong> Post the improved version with a focused ask using the same STC language.</p>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-2">Example: weak vs. STC (Kritik-aligned) critique</h2>
        <div className="bg-gray-50 border rounded-lg p-4 text-sm leading-6">
          <p className="mb-2"><strong>Weak:</strong> “The colors are weird and the face looks flat.”</p>
          <p className="mb-2"><strong>STC (after a Kritik pass):</strong></p>
          <p><strong>Summary —</strong> Portrait aims for moody isolation; subject should feel luminous against a cool city backdrop.</p>
          <p><strong>Technique —</strong> Skin shadows skew green, which flattens depth; edge control around jaw is uniformly soft, reducing focal clarity; background values encroach on midtones.</p>
          <p><strong>Context —</strong> To amplify isolation, separate subject/background by warming shadow midpoints, sharpening a few primary edges (eyes, jaw–cheek transition), and dropping background midtones by ~½–1 stop.</p>
          <p className="mt-2"><strong>Try next:</strong> Warm shadow mix (add a touch of red to the greens), one crisp edge at the eye corner, and a subtle vignette to keep the gaze centered.</p>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-2">Paste-ready template (works for self, Kritik, and peers)</h2>
        <div className="bg-gray-50 border rounded-lg p-4 text-sm leading-6">
          <p><strong>Summary:</strong> Intent + what it currently reads as.</p>
          <p><strong>Technique:</strong> 2–3 specific observations tied to values/color/edges/perspective/composition.</p>
          <p><strong>Context:</strong> How edits serve the goal; 2–3 concrete next steps.</p>
          <p className="mt-2"><strong>Optional tone:</strong> Gentle / Honest / Direct (matches <Link href="/" className="underline">kritik.ai</Link>).</p>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-2">Why tone matters (and how Kritik handles it)</h2>
        <p className="mb-4">
          Different stages need different tones. Early sketches often benefit from a <em>gentle</em> read (momentum over
          precision); later passes might need <em>honest/direct</em> specificity. In <Link href="/" className="underline text-[#4B3F72]">kritik.ai</Link>,
          you pick the tone and still get the same STC structure—so you can keep moving without losing clarity.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Turn Kritik output into your public ask</h2>
        <p className="mb-4">
          After you apply 1–3 high-impact edits from your Kritik pass, share publicly using the same frame:
        </p>
        <div className="bg-gray-50 border rounded-lg p-4 text-sm leading-6">
          <p><strong>Post text:</strong> “<em>Summary</em>: moody portrait aiming for luminous isolation. <em>Technique</em> focus: edge control around jaw, warm–cool balance in skin shadows, background value separation. <em>Ask</em>: Does the focal edge at the eye read crisp without feeling cut out?”</p>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-2">Checklist: does your critique create motion?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Named the goal (Summary) before editing?</li>
          <li>2–3 specific, observable notes (Technique), not taste-only?</li>
          <li>Clear “why it matters” plus next steps (Context)?</li>
          <li>Tone matches stage (gentle early, honest/direct later)?</li>
        </ul>

        <div className="mt-10 border-t pt-6 text-center">
          <p className="mb-2 font-medium">Run your next piece through a structured STC pass</p>
          <a
            href="https://apps.apple.com/us/app/kritik-ai/id6745596097"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4B3F72] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#3c2f5f] transition-all"
          >
            Get a Kritik critique in minutes →
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