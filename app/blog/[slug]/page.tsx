export async function generateStaticParams() {
  return [
    { slug: 'how-can-I-grow-as-an-artist' },
  ];
}

type Props = { params: { slug: string } };

export default function BlogPost({ params }: { params: { slug: string } }) {
  if (params.slug !== 'how-can-I-grow-as-an-artist') {
    return <div className="p-6 text-gray-700">Post not found.</div>;
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        How Can I Grow as an Artist Without Going to Art School?
      </h1>

      <p className="text-muted mb-6">June 2025 · 5 min read</p>

      <p className="mb-4">
        Not everyone has the time, money, or desire to attend art school — and that’s okay. The truth is, many successful artists today are self-taught. But the path can feel overwhelming without structure, feedback, or guidance.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Focus on Consistency, Not Perfection</h2>
      <p className="mb-4">
        Growth in art comes from showing up often. Don’t wait until you have the “perfect” idea. Set a regular creative routine — even 20 minutes a day can compound over time.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Get Feedback That Actually Helps You Improve</h2>
      <p className="mb-4">
        One of the biggest gaps for self-taught artists is the lack of structured critique. Random likes or emoji comments won’t help you grow. What you need is specific, constructive feedback on your technique, composition, and storytelling.
      </p>
      <p className="mb-4">
        <strong>That’s where tools like <a href="/" className="underline text-[#4B3F72]">kritik.ai</a> come in.</strong> It’s an AI-powered platform designed to give you gentle but honest feedback on your artwork — anytime, with no judgment.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Study the Greats, Then Break the Rules</h2>
      <p className="mb-4">
        Learn the fundamentals: lighting, anatomy, perspective, color theory. But don’t stop there — analyze how your favorite artists break conventions to create something truly unique. YouTube, Skillshare, and museum websites are gold mines of inspiration and technique.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Build a Body of Work, Not Just Random Pieces</h2>
      <p className="mb-4">
        Instead of jumping from style to style, try creating a series. It forces you to dig deeper and develop visual language. Even a 3-piece mini-series can help you discover what excites you.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Embrace the Journey (Not the Algorithm)</h2>
      <p className="mb-4">
        Social media is a tool — not your worth. Focus on creating meaningful work and improving your skills. Growth might not be visible every day, but it’s happening.
      </p>

      <div className="mt-10 border-t pt-6 text-center">
        <p className="mb-2 font-medium">Ready to level up your art?</p>
        <a
  href="https://apps.apple.com/us/app/kritik-ai/id6745596097"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#4B3F72] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#3c2f5f] transition-all"
        >
          Download kritik.ai on the App Store →
        </a>

        <div className="mt-6">
          <a href="/" className="text-sm text-[#4B3F72] underline hover:text-[#3c2f5f]">
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}