export default function Head() {
  const title = "Two AIs Are Better Than One: How kritik.ai Double-Checks Every Critique – kritik.ai";
  const description =
    "Every critique on kritik.ai is written by one AI and reviewed by another. Plain-English breakdown of how our Writer ↔ Reviewer loop reduces errors and keeps feedback useful.";
  const url = "https://kritik.ai/blog/two-ais-are-better-than-one";
  const published = "2025-09-03";
  const modified = "2025-09-03";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="kritik.ai" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      <script
        type="application/ld+json"
        // JSON-LD for SEO
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "Two AIs Are Better Than One: How kritik.ai Double-Checks Every Critique",
            description,
            author: { "@type": "Person", name: "kritik.ai" },
            publisher: {
              "@type": "Organization",
              name: "kritik.ai",
              logo: {
                "@type": "ImageObject",
                url: "https://kritik.ai/logo.png",
              },
            },
            url,
            mainEntityOfPage: url,
            datePublished: published,
            dateModified: modified,
          }),
        }}
      />
    </>
  );
}