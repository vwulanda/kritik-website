'use client';

import Link from 'next/link';
import Head from 'next/head';

export default function BlogPost() {
  const title =
    'Who Does Your Art Resonate With? New Artist References in kritik.ai – kritik.ai';
  const description =
    "kritik.ai now connects your art to known artists with style parallels and 'How to Get Closer' tips — plus sources so you can keep exploring.";
  const url = 'https://kritik.ai/blog/new-artist-references';

  return (
    <>
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
          Who Does Your Art Resonate With? New Artist References in kritik.ai
        </h1>

        <p className="text-muted mb-6">September 2025 · 4 min read</p>

        <p className="mb-4">
          Getting critique is great—but it’s even more powerful when you can see how your work
          resonates with artists who came before you.
        </p>

        <p className="mb-4">
          That’s why kritik.ai now adds <strong>artist references</strong> and{' '}
          <strong>“How to Get Closer” tips</strong> to every critique.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">Why add artist references?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Context matters:</strong> Seeing how your work relates to known styles can spark
            ideas you wouldn’t find on your own.
          </li>
          <li>
            <strong>Concrete inspiration:</strong> Instead of generic “fix the colors,” you’ll know{' '}
            <em>which</em> artist tackled similar challenges.
          </li>
          <li>
            <strong>Next steps you can trust:</strong> Every tip comes paired with real-world
            examples and sources you can explore.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">How it works</h2>
        <div className="bg-gray-50 border rounded-lg p-4 leading-6 text-sm">
          <p className="mb-2">
            Behind the scenes, kritik.ai looks up short, public descriptions of artists’ styles (from
            places like Wikipedia). Then it connects the dots with what your artwork is doing,
            creating parallels and concrete “next steps.”
          </p>
          <p className="mb-0">
            Think of it as a <strong>tiny, personalized moodboard in words.</strong>
          </p>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-2">What you’ll see in the app</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Style Parallels:</strong> short notes linking your work to artists’ approaches.
          </li>
          <li>
            <strong>How to Get Closer:</strong> 2–3 specific tips you can try, each linked to an
            artist.
          </li>
          <li>
            <strong>Sources included:</strong> so you can explore those artists further.
          </li>
        </ul>

        <div className="mt-10 border-t pt-6 text-center">
          <p className="mb-2 font-medium">See which artists your work resonates with</p>
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